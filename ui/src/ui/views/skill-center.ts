import { html, nothing } from "lit";
import type { SkillMessageMap } from "../controllers/skills.ts";
import { clampText } from "../format.ts";
import type { SkillStatusEntry, SkillStatusReport } from "../types.ts";
import { groupSkills } from "./skills-grouping.ts";
import {
  computeSkillMissing,
  computeSkillReasons,
  renderSkillStatusChips,
} from "./skills-shared.ts";

export type SkillCenterProps = {
  loading: boolean;
  report: SkillStatusReport | null;
  error: string | null;
  filter: string;
  selectedSkill: SkillStatusEntry | null;
  queryText: string;
  edits: Record<string, string>;
  busyKey: string | null;
  messages: SkillMessageMap;
  onFilterChange: (next: string) => void;
  onRefresh: () => void;
  onSkillSelect: (skill: SkillStatusEntry) => void;
  onQueryChange: (text: string) => void;
  onQuerySubmit: () => void;
  onToggle: (skillKey: string, enabled: boolean) => void;
  onEdit: (skillKey: string, value: string) => void;
  onSaveKey: (skillKey: string) => void;
  onInstall: (skillKey: string, name: string, installId: string) => void;
};

export function renderSkillCenter(props: SkillCenterProps) {
  const skills = props.report?.skills ?? [];
  const filter = props.filter.trim().toLowerCase();
  const filtered = filter
    ? skills.filter((skill) =>
        [skill.name, skill.description, skill.source].join(" ").toLowerCase().includes(filter),
      )
    : skills;

  // 分离默认Skill和用户Skill
  const defaultSkills = filtered.filter((skill) => skill.bundled || skill.source === "openclaw-bundled");
  const mySkills = filtered.filter((skill) => !skill.bundled && skill.source !== "openclaw-bundled");

  return html`
    <div class="skill-center-layout">
      <!-- 左侧主区域 -->
      <div class="skill-center-main">
        ${props.selectedSkill
          ? renderSkillExecutionPanel(props)
          : renderSkillCenterWelcome()}
      </div>

      <!-- 右侧Skill列表 -->
      <aside class="skill-center-sidebar">
        <div class="skill-sidebar-header">
          <div class="skill-sidebar-title">Skill 列表</div>
          <button 
            class="btn btn--sm" 
            ?disabled=${props.loading} 
            @click=${props.onRefresh}
            title="刷新"
          >
            ${props.loading ? "⟳" : "↻"}
          </button>
        </div>

        <div class="skill-sidebar-filter">
          <input
            class="skill-filter-input"
            .value=${props.filter}
            @input=${(e: Event) => props.onFilterChange((e.target as HTMLInputElement).value)}
            placeholder="搜索 Skill..."
          />
        </div>

        ${props.error
          ? html`<div class="callout danger" style="margin: 12px;">${props.error}</div>`
          : nothing}

        <div class="skill-sidebar-content">
          <!-- 默认 Skill -->
          ${defaultSkills.length > 0
            ? html`
                <div class="skill-category">
                  <div class="skill-category-header">
                    <span class="skill-category-title">默认 Skill</span>
                    <span class="skill-category-count">${defaultSkills.length}</span>
                  </div>
                  <div class="skill-list">
                    ${defaultSkills.map((skill) => renderSkillListItem(skill, props))}
                  </div>
                </div>
              `
            : nothing}

          <!-- 我的 Skill -->
          ${mySkills.length > 0
            ? html`
                <div class="skill-category">
                  <div class="skill-category-header">
                    <span class="skill-category-title">我的 Skill</span>
                    <span class="skill-category-count">${mySkills.length}</span>
                  </div>
                  <div class="skill-list">
                    ${mySkills.map((skill) => renderSkillListItem(skill, props))}
                  </div>
                </div>
              `
            : nothing}

          ${filtered.length === 0
            ? html`<div class="skill-empty">未找到 Skill</div>`
            : nothing}
        </div>
      </aside>
    </div>
  `;
}

function renderSkillCenterWelcome() {
  return html`
    <div class="skill-center-welcome">
      <div class="skill-welcome-icon">🎯</div>
      <div class="skill-welcome-title">开始你的技能分析</div>
      <div class="skill-welcome-desc">
        从右侧选择一个或多个 Skill，系统将按照对应的专业分析框架为你生成报告
      </div>
      <div class="skill-welcome-hint">
        选择 Skill，然后输入问题 →
      </div>
    </div>
  `;
}

function renderSkillExecutionPanel(props: SkillCenterProps) {
  const skill = props.selectedSkill!;
  const busy = props.busyKey === skill.skillKey;
  const missing = computeSkillMissing(skill);
  const reasons = computeSkillReasons(skill);

  return html`
    <div class="skill-execution-panel">
      <div class="skill-execution-header">
        <button 
          class="btn btn--ghost btn--sm" 
          @click=${() => props.onSkillSelect(null as unknown as SkillStatusEntry)}
        >
          ← 返回
        </button>
        <div class="skill-execution-title">
          ${skill.emoji ? `${skill.emoji} ` : ""}${skill.name}
        </div>
        <div class="skill-execution-badge ${skill.disabled ? 'disabled' : 'enabled'}">
          ${skill.disabled ? '已禁用' : '已启用'}
        </div>
      </div>

      <div class="skill-execution-body">
        <div class="skill-info-card">
          <div class="skill-info-desc">${skill.description}</div>
          ${renderSkillStatusChips({ skill, showBundledBadge: false })}
          ${missing.length > 0
            ? html`
                <div class="skill-info-missing">
                  <strong>缺少依赖:</strong> ${missing.join(", ")}
                </div>
              `
            : nothing}
          ${reasons.length > 0
            ? html`
                <div class="skill-info-reasons">
                  <strong>状态:</strong> ${reasons.join(", ")}
                </div>
              `
            : nothing}
        </div>

        <div class="skill-query-section">
          <div class="skill-query-label">输入你的问题</div>
          <textarea
            class="skill-query-input"
            .value=${props.queryText}
            @input=${(e: Event) => props.onQueryChange((e.target as HTMLTextAreaElement).value)}
            placeholder="请输入你想让 Skill 分析的问题..."
            rows="4"
            ?disabled=${busy || skill.disabled}
          ></textarea>
          <button
            class="btn btn--primary skill-query-submit"
            ?disabled=${busy || skill.disabled || !props.queryText.trim()}
            @click=${props.onQuerySubmit}
          >
            ${busy ? "执行中..." : "执行 Skill"}
          </button>
        </div>

        ${props.messages[skill.skillKey]
          ? html`
              <div class="skill-message ${props.messages[skill.skillKey].kind}">
                ${props.messages[skill.skillKey].message}
              </div>
            `
          : nothing}
      </div>
    </div>
  `;
}

function renderSkillListItem(skill: SkillStatusEntry, props: SkillCenterProps) {
  const isSelected = props.selectedSkill?.skillKey === skill.skillKey;
  const missing = computeSkillMissing(skill);
  
  return html`
    <div 
      class="skill-list-item ${isSelected ? 'selected' : ''} ${skill.disabled ? 'disabled' : ''}"
      @click=${() => props.onSkillSelect(skill)}
    >
      <div class="skill-item-header">
        <span class="skill-item-emoji">${skill.emoji || "🔧"}</span>
        <span class="skill-item-name">${skill.name}</span>
        ${skill.disabled
          ? html`<span class="skill-item-badge disabled">禁用</span>`
          : nothing}
        ${missing.length > 0
          ? html`<span class="skill-item-badge missing">缺依赖</span>`
          : nothing}
      </div>
      <div class="skill-item-desc">${clampText(skill.description, 60)}</div>
    </div>
  `;
}
