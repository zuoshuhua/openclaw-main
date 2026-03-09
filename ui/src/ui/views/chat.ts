import { html, nothing } from "lit";
import { ref } from "lit/directives/ref.js";
import { repeat } from "lit/directives/repeat.js";
import {
  renderMessageGroup,
  renderReadingIndicatorGroup,
  renderStreamingGroup,
} from "../chat/grouped-render.ts";
import { normalizeMessage, normalizeRoleForGrouping } from "../chat/message-normalizer.ts";
import { icons } from "../icons.ts";
import { detectTextDirection } from "../text-direction.ts";
import type { SessionsListResult, SkillStatusReport, SkillStatusEntry } from "../types.ts";
import type { ChatItem, MessageGroup } from "../types/chat-types.ts";
import type { ChatAttachment, ChatQueueItem } from "../ui-types.ts";
import { renderMarkdownSidebar } from "./markdown-sidebar.ts";
import "../components/resizable-divider.ts";

export type CompactionIndicatorStatus = {
  active: boolean;
  startedAt: number | null;
  completedAt: number | null;
};

export type FallbackIndicatorStatus = {
  phase?: "active" | "cleared";
  selected: string;
  active: string;
  previous?: string;
  reason?: string;
  attempts: string[];
  occurredAt: number;
};

export type ChatProps = {
  sessionKey: string;
  onSessionKeyChange: (next: string) => void;
  thinkingLevel: string | null;
  showThinking: boolean;
  loading: boolean;
  sending: boolean;
  canAbort?: boolean;
  compactionStatus?: CompactionIndicatorStatus | null;
  fallbackStatus?: FallbackIndicatorStatus | null;
  messages: unknown[];
  toolMessages: unknown[];
  stream: string | null;
  streamStartedAt: number | null;
  assistantAvatarUrl?: string | null;
  draft: string;
  queue: ChatQueueItem[];
  connected: boolean;
  canSend: boolean;
  disabledReason: string | null;
  error: string | null;
  sessions: SessionsListResult | null;
  // Focus mode
  focusMode: boolean;
  // Sidebar state
  sidebarOpen?: boolean;
  sidebarContent?: string | null;
  sidebarError?: string | null;
  splitRatio?: number;
  assistantName: string;
  assistantAvatar: string | null;
  // Image attachments
  attachments?: ChatAttachment[];
  onAttachmentsChange?: (attachments: ChatAttachment[]) => void;
  // Scroll control
  showNewMessages?: boolean;
  onScrollToBottom?: () => void;
  // Event handlers
  onRefresh: () => void;
  onToggleFocusMode: () => void;
  onDraftChange: (next: string) => void;
  onSend: () => void;
  onAbort?: () => void;
  onQueueRemove: (id: string) => void;
  onNewSession: () => void;
  onOpenSidebar?: (content: string) => void;
  onCloseSidebar?: () => void;
  onSplitRatioChange?: (ratio: number) => void;
  onChatScroll?: (event: Event) => void;
  // Skill panel
  skillsReport?: SkillStatusReport | null;
  skillsFilter?: string;
  onSkillsFilterChange?: (filter: string) => void;
  onSkillSelect?: (skill: SkillStatusEntry) => void;
  // Skill category collapse state
  defaultSkillsExpanded?: boolean;
  mySkillsExpanded?: boolean;
  onToggleDefaultSkills?: () => void;
  onToggleMySkills?: () => void;
  // Skill refresh
  onSkillsRefresh?: () => void;
  skillsRefreshing?: boolean;
};

const COMPACTION_TOAST_DURATION_MS = 5000;
const FALLBACK_TOAST_DURATION_MS = 8000;

function adjustTextareaHeight(el: HTMLTextAreaElement) {
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight}px`;
}

function renderCompactionIndicator(status: CompactionIndicatorStatus | null | undefined) {
  if (!status) {
    return nothing;
  }

  // Show "compacting..." while active
  if (status.active) {
    return html`
      <div class="compaction-indicator compaction-indicator--active" role="status" aria-live="polite">
        ${icons.loader} Compacting context...
      </div>
    `;
  }

  // Show "compaction complete" briefly after completion
  if (status.completedAt) {
    const elapsed = Date.now() - status.completedAt;
    if (elapsed < COMPACTION_TOAST_DURATION_MS) {
      return html`
        <div class="compaction-indicator compaction-indicator--complete" role="status" aria-live="polite">
          ${icons.check} Context compacted
        </div>
      `;
    }
  }

  return nothing;
}

function renderFallbackIndicator(status: FallbackIndicatorStatus | null | undefined) {
  if (!status) {
    return nothing;
  }
  const phase = status.phase ?? "active";
  const elapsed = Date.now() - status.occurredAt;
  if (elapsed >= FALLBACK_TOAST_DURATION_MS) {
    return nothing;
  }
  const details = [
    `Selected: ${status.selected}`,
    phase === "cleared" ? `Active: ${status.selected}` : `Active: ${status.active}`,
    phase === "cleared" && status.previous ? `Previous fallback: ${status.previous}` : null,
    status.reason ? `Reason: ${status.reason}` : null,
    status.attempts.length > 0 ? `Attempts: ${status.attempts.slice(0, 3).join(" | ")}` : null,
  ]
    .filter(Boolean)
    .join(" • ");
  const message =
    phase === "cleared"
      ? `Fallback cleared: ${status.selected}`
      : `Fallback active: ${status.active}`;
  const className =
    phase === "cleared"
      ? "compaction-indicator compaction-indicator--fallback-cleared"
      : "compaction-indicator compaction-indicator--fallback";
  const icon = phase === "cleared" ? icons.check : icons.brain;
  return html`
    <div
      class=${className}
      role="status"
      aria-live="polite"
      title=${details}
    >
      ${icon} ${message}
    </div>
  `;
}

function generateAttachmentId(): string {
  return `att-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function handlePaste(e: ClipboardEvent, props: ChatProps) {
  const items = e.clipboardData?.items;
  if (!items || !props.onAttachmentsChange) {
    return;
  }

  const imageItems: DataTransferItem[] = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.type.startsWith("image/")) {
      imageItems.push(item);
    }
  }

  if (imageItems.length === 0) {
    return;
  }

  e.preventDefault();

  for (const item of imageItems) {
    const file = item.getAsFile();
    if (!file) {
      continue;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const dataUrl = reader.result as string;
      const newAttachment: ChatAttachment = {
        id: generateAttachmentId(),
        dataUrl,
        mimeType: file.type,
      };
      const current = props.attachments ?? [];
      props.onAttachmentsChange?.([...current, newAttachment]);
    });
    reader.readAsDataURL(file);
  }
}

function renderAttachmentPreview(props: ChatProps) {
  const attachments = props.attachments ?? [];
  if (attachments.length === 0) {
    return nothing;
  }

  return html`
    <div class="chat-attachments">
      ${attachments.map(
        (att) => html`
          <div class="chat-attachment">
            <img
              src=${att.dataUrl}
              alt="Attachment preview"
              class="chat-attachment__img"
            />
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${() => {
                const next = (props.attachments ?? []).filter((a) => a.id !== att.id);
                props.onAttachmentsChange?.(next);
              }}
            >
              ${icons.x}
            </button>
          </div>
        `,
      )}
    </div>
  `;
}

export function renderChat(props: ChatProps) {
  const canCompose = props.connected;
  const isBusy = props.sending || props.stream !== null;
  const canAbort = Boolean(props.canAbort && props.onAbort);
  const activeSession = props.sessions?.sessions?.find((row) => row.key === props.sessionKey);
  const reasoningLevel = activeSession?.reasoningLevel ?? "off";
  const showReasoning = props.showThinking && reasoningLevel !== "off";
  const assistantIdentity = {
    name: props.assistantName,
    avatar: props.assistantAvatar ?? props.assistantAvatarUrl ?? null,
  };

  const hasAttachments = (props.attachments?.length ?? 0) > 0;
  const composePlaceholder = props.connected
    ? hasAttachments
      ? "Add a message or paste more images..."
      : "Message (↩ to send, Shift+↩ for line breaks, paste images)"
    : "Connect to the gateway to start chatting…";

  const splitRatio = props.splitRatio ?? 0.6;
  const sidebarOpen = Boolean(props.sidebarOpen && props.onCloseSidebar);
  const thread = html`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${props.onChatScroll}
    >
      ${
        props.loading
          ? html`
              <div class="muted">Loading chat…</div>
            `
          : nothing
      }
      ${repeat(
        buildChatItems(props),
        (item) => item.key,
        (item) => {
          if (item.kind === "divider") {
            return html`
              <div class="chat-divider" role="separator" data-ts=${String(item.timestamp)}>
                <span class="chat-divider__line"></span>
                <span class="chat-divider__label">${item.label}</span>
                <span class="chat-divider__line"></span>
              </div>
            `;
          }

          if (item.kind === "reading-indicator") {
            return renderReadingIndicatorGroup(assistantIdentity);
          }

          if (item.kind === "stream") {
            return renderStreamingGroup(
              item.text,
              item.startedAt,
              props.onOpenSidebar,
              assistantIdentity,
            );
          }

          if (item.kind === "group") {
            return renderMessageGroup(item, {
              onOpenSidebar: props.onOpenSidebar,
              showReasoning,
              assistantName: props.assistantName,
              assistantAvatar: assistantIdentity.avatar,
            });
          }

          return nothing;
        },
      )}
    </div>
  `;

  return html`
    <section class="card chat">
      ${props.disabledReason ? html`<div class="callout">${props.disabledReason}</div>` : nothing}

      ${props.error ? html`<div class="callout danger">${props.error}</div>` : nothing}

      ${
        props.focusMode
          ? html`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${props.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${icons.x}
            </button>
          `
          : nothing
      }

      <div
        class="chat-split-container ${sidebarOpen ? "chat-split-container--open" : ""} ${props.skillsReport?.skills?.length ? "chat-split-container--with-skills" : ""}"
      >
        <div
          class="chat-main"
          style="flex: ${sidebarOpen ? `0 0 ${splitRatio * 100}%` : "1 1 100%"}"
        >
          ${thread}
        </div>

        ${
          sidebarOpen
            ? html`
              <resizable-divider
                .splitRatio=${splitRatio}
                @resize=${(e: CustomEvent) => props.onSplitRatioChange?.(e.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${renderMarkdownSidebar({
                  content: props.sidebarContent ?? null,
                  error: props.sidebarError ?? null,
                  onClose: props.onCloseSidebar!,
                  onViewRawText: () => {
                    if (!props.sidebarContent || !props.onOpenSidebar) {
                      return;
                    }
                    props.onOpenSidebar(`\`\`\`\n${props.sidebarContent}\n\`\`\``);
                  },
                })}
              </div>
            `
            : nothing
        }

        ${
          props.skillsReport?.skills?.length
            ? html`
              <div class="chat-skill-sidebar">
                ${renderChatSkillPanel(props)}
              </div>
            `
            : nothing
        }
      </div>

      ${
        props.queue.length
          ? html`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${props.queue.length})</div>
              <div class="chat-queue__list">
                ${props.queue.map(
                  (item) => html`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${
                          item.text ||
                          (item.attachments?.length ? `Image (${item.attachments.length})` : "")
                        }
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${() => props.onQueueRemove(item.id)}
                      >
                        ${icons.x}
                      </button>
                    </div>
                  `,
                )}
              </div>
            </div>
          `
          : nothing
      }

      ${renderFallbackIndicator(props.fallbackStatus)}
      ${renderCompactionIndicator(props.compactionStatus)}

      ${
        props.showNewMessages
          ? html`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${props.onScrollToBottom}
            >
              New messages ${icons.arrowDown}
            </button>
          `
          : nothing
      }

      <div class="chat-compose">
        ${renderAttachmentPreview(props)}
        <div class="chat-compose__row">
          <label class="field chat-compose__field">
            <span>Message</span>
            <textarea
              ${ref((el) => el && adjustTextareaHeight(el as HTMLTextAreaElement))}
              .value=${props.draft}
              dir=${detectTextDirection(props.draft)}
              ?disabled=${!props.connected}
              @keydown=${(e: KeyboardEvent) => {
                if (e.key !== "Enter") {
                  return;
                }
                if (e.isComposing || e.keyCode === 229) {
                  return;
                }
                if (e.shiftKey) {
                  return;
                } // Allow Shift+Enter for line breaks
                if (!props.connected) {
                  return;
                }
                e.preventDefault();
                if (canCompose) {
                  props.onSend();
                }
              }}
              @input=${(e: Event) => {
                const target = e.target as HTMLTextAreaElement;
                adjustTextareaHeight(target);
                props.onDraftChange(target.value);
              }}
              @paste=${(e: ClipboardEvent) => handlePaste(e, props)}
              placeholder=${composePlaceholder}
            ></textarea>
          </label>
          <div class="chat-compose__actions">
            <button
              class="btn"
              ?disabled=${!props.connected || (!canAbort && props.sending)}
              @click=${canAbort ? props.onAbort : props.onNewSession}
            >
              ${canAbort ? "Stop" : "New session"}
            </button>
            <button
              class="btn primary"
              ?disabled=${!props.connected}
              @click=${props.onSend}
            >
              ${isBusy ? "Queue" : "Send"}<kbd class="btn-kbd">↵</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

const CHAT_HISTORY_RENDER_LIMIT = 200;

function groupMessages(items: ChatItem[]): Array<ChatItem | MessageGroup> {
  const result: Array<ChatItem | MessageGroup> = [];
  let currentGroup: MessageGroup | null = null;

  for (const item of items) {
    if (item.kind !== "message") {
      if (currentGroup) {
        result.push(currentGroup);
        currentGroup = null;
      }
      result.push(item);
      continue;
    }

    const normalized = normalizeMessage(item.message);
    const role = normalizeRoleForGrouping(normalized.role);
    const timestamp = normalized.timestamp || Date.now();

    if (!currentGroup || currentGroup.role !== role) {
      if (currentGroup) {
        result.push(currentGroup);
      }
      currentGroup = {
        kind: "group",
        key: `group:${role}:${item.key}`,
        role,
        messages: [{ message: item.message, key: item.key }],
        timestamp,
        isStreaming: false,
      };
    } else {
      currentGroup.messages.push({ message: item.message, key: item.key });
    }
  }

  if (currentGroup) {
    result.push(currentGroup);
  }
  return result;
}

function buildChatItems(props: ChatProps): Array<ChatItem | MessageGroup> {
  const items: ChatItem[] = [];
  const history = Array.isArray(props.messages) ? props.messages : [];
  const tools = Array.isArray(props.toolMessages) ? props.toolMessages : [];
  const historyStart = Math.max(0, history.length - CHAT_HISTORY_RENDER_LIMIT);
  if (historyStart > 0) {
    items.push({
      kind: "message",
      key: "chat:history:notice",
      message: {
        role: "system",
        content: `Showing last ${CHAT_HISTORY_RENDER_LIMIT} messages (${historyStart} hidden).`,
        timestamp: Date.now(),
      },
    });
  }
  for (let i = historyStart; i < history.length; i++) {
    const msg = history[i];
    const normalized = normalizeMessage(msg);
    const raw = msg as Record<string, unknown>;
    const marker = raw.__openclaw as Record<string, unknown> | undefined;
    if (marker && marker.kind === "compaction") {
      items.push({
        kind: "divider",
        key:
          typeof marker.id === "string"
            ? `divider:compaction:${marker.id}`
            : `divider:compaction:${normalized.timestamp}:${i}`,
        label: "Compaction",
        timestamp: normalized.timestamp ?? Date.now(),
      });
      continue;
    }

    if (!props.showThinking && normalized.role.toLowerCase() === "toolresult") {
      continue;
    }

    items.push({
      kind: "message",
      key: messageKey(msg, i),
      message: msg,
    });
  }
  if (props.showThinking) {
    for (let i = 0; i < tools.length; i++) {
      items.push({
        kind: "message",
        key: messageKey(tools[i], i + history.length),
        message: tools[i],
      });
    }
  }

  if (props.stream !== null) {
    const key = `stream:${props.sessionKey}:${props.streamStartedAt ?? "live"}`;
    if (props.stream.trim().length > 0) {
      items.push({
        kind: "stream",
        key,
        text: props.stream,
        startedAt: props.streamStartedAt ?? Date.now(),
      });
    } else {
      items.push({ kind: "reading-indicator", key });
    }
  }

  return groupMessages(items);
}

function messageKey(message: unknown, index: number): string {
  const m = message as Record<string, unknown>;
  const toolCallId = typeof m.toolCallId === "string" ? m.toolCallId : "";
  if (toolCallId) {
    return `tool:${toolCallId}`;
  }
  const id = typeof m.id === "string" ? m.id : "";
  if (id) {
    return `msg:${id}`;
  }
  const messageId = typeof m.messageId === "string" ? m.messageId : "";
  if (messageId) {
    return `msg:${messageId}`;
  }
  const timestamp = typeof m.timestamp === "number" ? m.timestamp : null;
  const role = typeof m.role === "string" ? m.role : "unknown";
  if (timestamp != null) {
    return `msg:${role}:${timestamp}:${index}`;
  }
  return `msg:${role}:${index}`;
}

// Skill 名称和描述的中文翻译映射表
const skillTranslations: Record<string, { name: string; description: string }> = {
  weather: {
    name: "天气查询",
    description: "获取当前天气和天气预报。使用场景：用户询问天气、温度或任何地点的预报。不需要 API 密钥。",
  },
  github: {
    name: "GitHub",
    description: "与 GitHub 仓库交互，查看问题、PR、代码等",
  },
  slack: {
    name: "Slack",
    description: "发送消息到 Slack 频道",
  },
  notion: {
    name: "Notion",
    description: "查询和编辑 Notion 页面和数据库",
  },
  trello: {
    name: "Trello",
    description: "管理 Trello 看板和卡片",
  },
  obsidian: {
    name: "Obsidian",
    description: "查询和搜索 Obsidian 笔记",
  },
  "bear-notes": {
    name: "Bear 笔记",
    description: "查询和搜索 Bear 笔记应用",
  },
  "apple-notes": {
    name: "苹果备忘录",
    description: "查询和搜索苹果备忘录",
  },
  "apple-reminders": {
    name: "苹果提醒事项",
    description: "管理苹果提醒事项",
  },
  "spotify-player": {
    name: "Spotify",
    description: "控制 Spotify 播放",
  },
  summarize: {
    name: "文本摘要",
    description: "总结长文本内容",
  },
  canvas: {
    name: "画布",
    description: "创建和编辑可视化画布",
  },
  "openai-image-gen": {
    name: "AI 图像生成",
    description: "使用 OpenAI 生成图像",
  },
  "openai-whisper": {
    name: "语音转文字",
    description: "使用 OpenAI Whisper 转录音频",
  },
  "openai-whisper-api": {
    name: "语音转文字 API",
    description: "使用 OpenAI API 转录音频",
  },
  "sherpa-onnx-tts": {
    name: "语音合成",
    description: "使用 Sherpa ONNX 进行文本转语音",
  },
  "nano-banana-pro": {
    name: "图像生成",
    description: "使用 Nano Banana Pro 生成图像",
  },
  "nano-pdf": {
    name: "PDF 处理",
    description: "处理和分析 PDF 文件",
  },
  "session-logs": {
    name: "会话日志",
    description: "查看和管理会话日志",
  },
  healthcheck: {
    name: "健康检查",
    description: "检查系统健康状态",
  },
  himalaya: {
    name: "邮件客户端",
    description: "使用 Himalaya 邮件客户端",
  },
  tmux: {
    name: "Tmux",
    description: "管理 Tmux 会话",
  },
  "video-frames": {
    name: "视频帧提取",
    description: "从视频中提取帧",
  },
  "voice-call": {
    name: "语音通话",
    description: "进行语音通话",
  },
  xurl: {
    name: "URL 处理",
    description: "获取和解析 URL 内容",
  },
  wacli: {
    name: "WhatsApp CLI",
    description: "WhatsApp 命令行工具",
  },
  "things-mac": {
    name: "Things",
    description: "管理 Things 任务",
  },
  sonoscli: {
    name: "Sonos",
    description: "控制 Sonos 音响",
  },
  songsee: {
    name: "Songsee",
    description: "音乐搜索和播放",
  },
  "skill-creator": {
    name: "Skill 创建器",
    description: "创建和管理 Skill",
  },
  sag: {
    name: "SAG",
    description: "SAG 工具",
  },
  peekaboo: {
    name: "Peekaboo",
    description: "Peekaboo 工具",
  },
  ordercli: {
    name: "Order CLI",
    description: "订单管理命令行工具",
  },
  oracle: {
    name: "Oracle",
    description: "Oracle 数据库工具",
  },
  openhue: {
    name: "Hue",
    description: "控制 Philips Hue 灯光",
  },
  mcporter: {
    name: "McPorter",
    description: "McPorter 工具",
  },
  imsg: {
    name: "iMessage",
    description: "发送和接收 iMessage",
  },
  "model-usage": {
    name: "模型使用",
    description: "查看模型使用情况",
  },
  goplaces: {
    name: "地点搜索",
    description: "搜索地点和位置",
  },
  gog: {
    name: "GOG",
    description: "GOG 游戏平台工具",
  },
  gifgrep: {
    name: "GIF 搜索",
    description: "搜索 GIF 图片",
  },
  "gh-issues": {
    name: "GitHub Issues",
    description: "管理 GitHub Issues",
  },
  gemini: {
    name: "Gemini",
    description: "Google Gemini AI",
  },
  eightctl: {
    name: "Eightctl",
    description: "Eightctl 工具",
  },
  discord: {
    name: "Discord",
    description: "Discord 工具",
  },
  "coding-agent": {
    name: "编程助手",
    description: "辅助编程和代码生成",
  },
  clawhub: {
    name: "ClawHub",
    description: "ClawHub 工具",
  },
  camsnap: {
    name: "相机快照",
    description: "拍摄相机快照",
  },
  bluebubbles: {
    name: "BlueBubbles",
    description: "BlueBubbles 消息工具",
  },
  blucli: {
    name: "BluCLI",
    description: "BluCLI 工具",
  },
  blogwatcher: {
    name: "博客监控",
    description: "监控博客更新",
  },
  "1password": {
    name: "1Password",
    description: "1Password 密码管理",
  },
  // 金融分析类 Skill
  "unit-economics": {
    name: "单位经济学",
    description: "分析单位经济学指标",
  },
  "thesis-tracker": {
    name: "投资论点跟踪",
    description: "跟踪和管理投资论点",
  },
  "sector-overview": {
    name: "行业概览",
    description: "分析行业概况和趋势",
  },
  "returns-analysis": {
    name: "回报分析",
    description: "分析投资回报",
  },
  "portfolio-monitoring": {
    name: "投资组合监控",
    description: "监控投资组合表现",
  },
  "morning-note": {
    name: "晨会笔记",
    description: "生成晨会笔记",
  },
  "initiating-coverage": {
    name: "启动覆盖",
    description: "启动股票覆盖报告",
  },
  "idea-generation": {
    name: "创意生成",
    description: "生成投资创意",
  },
  "ic-memo": {
    name: "IC 备忘录",
    description: "生成投资委员会备忘录",
  },
  "earnings-preview": {
    name: "财报预览",
    description: "预览财报数据",
  },
  "earnings-analysis": {
    name: "财报分析",
    description: "分析财报数据",
  },
  "deal-sourcing": {
    name: "交易寻源",
    description: "寻找潜在交易",
  },
  "deal-screening": {
    name: "交易筛选",
    description: "筛选潜在交易",
  },
  "dd-checklist": {
    name: "尽职调查清单",
    description: "管理尽职调查清单",
  },
  "dcf-model": {
    name: "DCF 模型",
    description: "现金流折现模型分析",
  },
  "comps-analysis": {
    name: "可比公司分析",
    description: "分析可比公司估值",
  },
  "competitive-analysis": {
    name: "竞争分析",
    description: "分析竞争格局",
  },
  "catalyst-calendar": {
    name: "催化剂日历",
    description: "跟踪市场催化剂事件",
  },
  "bilibili-ai-digest": {
    name: "Bilibili AI 摘要",
    description: "生成 Bilibili 视频摘要",
  },
  "ai-trend-insights": {
    name: "AI 趋势洞察",
    description: "分析 AI 行业趋势",
  },
};

// 获取 Skill 的中文名称和描述
function getSkillTranslation(skill: SkillStatusEntry): { name: string; description: string } {
  const key = skill.skillKey || skill.name;
  const translation = skillTranslations[key];
  if (translation) {
    return translation;
  }
  // 如果没有翻译，返回原始值
  return {
    name: skill.name,
    description: skill.description,
  };
}

// Skill panel for chat page
function renderChatSkillPanel(props: ChatProps) {
  const report = props.skillsReport;
  const filter = (props.skillsFilter ?? "").trim().toLowerCase();

  if (!report?.skills?.length) {
    return html`
      <div class="chat-skill-panel">
        <div class="chat-skill-panel__header">
          <span class="chat-skill-panel__title">技能列表</span>
        </div>
        <div class="chat-skill-panel__empty">暂无可用技能</div>
      </div>
    `;
  }

  // 按创建时间排序（最新的在前）
  const skills = [...report.skills].sort((a, b) => {
    const timeA = a.createdAt ?? 0;
    const timeB = b.createdAt ?? 0;
    return timeB - timeA; // 降序排列，最新的在前
  });

  const filtered = filter
    ? skills.filter((skill) =>
        [skill.name, skill.description, skill.source].join(" ").toLowerCase().includes(filter),
      )
    : skills;

  // 定义用户技能来源（用户自己创建的技能，包括用户workspace下的技能）
  const userSkillSources = new Set(["agents-skills-personal", "agents-skills-project", "openclaw-workspace"]);
  
  // 分类技能：我的技能 vs 默认技能
  const mySkills = filtered.filter((skill) => userSkillSources.has(skill.source));
  const defaultSkills = filtered.filter((skill) => !userSkillSources.has(skill.source));

  const renderSkillItem = (skill: SkillStatusEntry) => {
    const isDisabled = skill.enabled === false;
    const missingDeps = skill.missingDependencies?.length ?? 0;
    const translation = getSkillTranslation(skill);

    return html`
      <div
        class="chat-skill-item ${isDisabled ? "disabled" : ""}"
        @click=${() => props.onSkillSelect?.(skill)}
        title="${translation.description}"
      >
        <div class="chat-skill-item__header">
          <span class="chat-skill-item__emoji">${skill.emoji || "🔧"}</span>
          <span class="chat-skill-item__name">${translation.name}</span>
          ${isDisabled
            ? html`<span class="chat-skill-item__badge disabled">已禁用</span>`
            : missingDeps > 0
              ? html`<span class="chat-skill-item__badge missing">${missingDeps} 项缺失</span>`
              : nothing}
        </div>
        ${translation.description
          ? html`<div class="chat-skill-item__desc">${translation.description}</div>`
          : nothing}
      </div>
    `;
  };

  // 获取展开状态，默认展开
  const defaultExpanded = props.defaultSkillsExpanded !== false;
  const myExpanded = props.mySkillsExpanded !== false;

  return html`
    <div class="chat-skill-panel">
      <div class="chat-skill-panel__header">
        <span class="chat-skill-panel__title">技能列表</span>
      </div>
      <div class="chat-skill-panel__filter">
        <input
          type="text"
          class="chat-skill-panel__filter-input"
          placeholder="搜索技能..."
          .value=${props.skillsFilter ?? ""}
          @input=${(e: Event) =>
            props.onSkillsFilterChange?.((e.target as HTMLInputElement).value)}
        />
        <button
          class="chat-skill-panel__refresh-btn ${props.skillsRefreshing ? "refreshing" : ""}"
          @click=${() => props.onSkillsRefresh?.()}
          title="刷新技能列表"
          ?disabled=${props.skillsRefreshing}
        >
          ${props.skillsRefreshing ? icons.loader : icons.refresh}
        </button>
      </div>
      <div class="chat-skill-panel__content">
        ${defaultSkills.length > 0
          ? html`
              <div class="chat-skill-category">
                <div
                  class="chat-skill-category__header chat-skill-category__header--clickable"
                  @click=${() => props.onToggleDefaultSkills?.()}
                >
                  <span class="chat-skill-category__toggle">
                    ${defaultExpanded ? "▼" : "▶"}
                  </span>
                  <span class="chat-skill-category__title">默认技能</span>
                  <span class="chat-skill-category__count">${defaultSkills.length}</span>
                </div>
                ${defaultExpanded
                  ? html`
                      <div class="chat-skill-list">
                        ${defaultSkills.map(renderSkillItem)}
                      </div>
                    `
                  : nothing}
              </div>
            `
          : nothing}
        ${mySkills.length > 0
          ? html`
              <div class="chat-skill-category">
                <div
                  class="chat-skill-category__header chat-skill-category__header--clickable"
                  @click=${() => props.onToggleMySkills?.()}
                >
                  <span class="chat-skill-category__toggle">
                    ${myExpanded ? "▼" : "▶"}
                  </span>
                  <span class="chat-skill-category__title">我的技能</span>
                  <span class="chat-skill-category__count">${mySkills.length}</span>
                </div>
                ${myExpanded
                  ? html`
                      <div class="chat-skill-list">
                        ${mySkills.map(renderSkillItem)}
                      </div>
                    `
                  : nothing}
              </div>
            `
          : nothing}
        ${filtered.length === 0
          ? html`<div class="chat-skill-panel__empty">未找到匹配的技能</div>`
          : nothing}
      </div>
    </div>
  `;
}
