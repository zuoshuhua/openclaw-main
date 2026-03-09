import "./agent-scope-C20LDXxH.js";
import "./paths-B-UhE8oc.js";
import "./subsystem-Cz-8RV-1.js";
import "./utils-Dkpkr730.js";
import "./workspace-BPZaOnoC.js";
import "./logger-z1fQ0OvK.js";
import "./model-selection-B7s8ALQI.js";
import "./env-CzhFkGTc.js";
import "./github-copilot-token-Ccz0f65i.js";
import "./boolean-mcn6kL0s.js";
import "./internal-hooks-DnZwKbbp.js";
import "./registry-D0OGArIh.js";
import { a as normalizeWhatsAppTarget, i as isWhatsAppGroupJid } from "./plugins-CaibREC7.js";
import { n as resolveWhatsAppAccount } from "./accounts-BsdFAVCU.js";
import "./bindings-7oGHFogR.js";
import "./image-ops-CuX2qoDO.js";
import "./message-channel-BWWzCg24.js";
import "./path-alias-guards-hzH0WXBo.js";
import "./fs-safe-BVhAcfCx.js";
import "./proxy-env-C2xOc67k.js";
import "./tool-images-Bdk3k0dB.js";
import "./fetch-CDsIFpm_.js";
import "./fetch-guard-BVtuO-MG.js";
import "./chunk-BP318Cq6.js";
import "./markdown-tables-CEYmHdyu.js";
import "./ir-Cgpk0W-a.js";
import "./render-flG67HhW.js";
import { f as readReactionParams, h as readStringParam, i as ToolAuthorizationError, l as jsonResult, n as missingTargetError, o as createActionGate } from "./target-errors-Ckz9Hwl1.js";
import "./tables-Ox-sxs-V.js";
import { r as sendReactionWhatsApp } from "./outbound-D326s1AZ.js";

//#region src/whatsapp/resolve-outbound-target.ts
function resolveWhatsAppOutboundTarget(params) {
	const trimmed = params.to?.trim() ?? "";
	const allowListRaw = (params.allowFrom ?? []).map((entry) => String(entry).trim()).filter(Boolean);
	const hasWildcard = allowListRaw.includes("*");
	const allowList = allowListRaw.filter((entry) => entry !== "*").map((entry) => normalizeWhatsAppTarget(entry)).filter((entry) => Boolean(entry));
	if (trimmed) {
		const normalizedTo = normalizeWhatsAppTarget(trimmed);
		if (!normalizedTo) return {
			ok: false,
			error: missingTargetError("WhatsApp", "<E.164|group JID>")
		};
		if (isWhatsAppGroupJid(normalizedTo)) return {
			ok: true,
			to: normalizedTo
		};
		if (hasWildcard || allowList.length === 0) return {
			ok: true,
			to: normalizedTo
		};
		if (allowList.includes(normalizedTo)) return {
			ok: true,
			to: normalizedTo
		};
		return {
			ok: false,
			error: missingTargetError("WhatsApp", "<E.164|group JID>")
		};
	}
	return {
		ok: false,
		error: missingTargetError("WhatsApp", "<E.164|group JID>")
	};
}

//#endregion
//#region src/agents/tools/whatsapp-target-auth.ts
function resolveAuthorizedWhatsAppOutboundTarget(params) {
	const account = resolveWhatsAppAccount({
		cfg: params.cfg,
		accountId: params.accountId
	});
	const resolution = resolveWhatsAppOutboundTarget({
		to: params.chatJid,
		allowFrom: account.allowFrom ?? [],
		mode: "implicit"
	});
	if (!resolution.ok) throw new ToolAuthorizationError(`WhatsApp ${params.actionLabel} blocked: chatJid "${params.chatJid}" is not in the configured allowFrom list for account "${account.accountId}".`);
	return {
		to: resolution.to,
		accountId: account.accountId
	};
}

//#endregion
//#region src/agents/tools/whatsapp-actions.ts
async function handleWhatsAppAction(params, cfg) {
	const action = readStringParam(params, "action", { required: true });
	const isActionEnabled = createActionGate(cfg.channels?.whatsapp?.actions);
	if (action === "react") {
		if (!isActionEnabled("reactions")) throw new Error("WhatsApp reactions are disabled.");
		const chatJid = readStringParam(params, "chatJid", { required: true });
		const messageId = readStringParam(params, "messageId", { required: true });
		const { emoji, remove, isEmpty } = readReactionParams(params, { removeErrorMessage: "Emoji is required to remove a WhatsApp reaction." });
		const participant = readStringParam(params, "participant");
		const accountId = readStringParam(params, "accountId");
		const fromMeRaw = params.fromMe;
		const fromMe = typeof fromMeRaw === "boolean" ? fromMeRaw : void 0;
		const resolved = resolveAuthorizedWhatsAppOutboundTarget({
			cfg,
			chatJid,
			accountId,
			actionLabel: "reaction"
		});
		const resolvedEmoji = remove ? "" : emoji;
		await sendReactionWhatsApp(resolved.to, messageId, resolvedEmoji, {
			verbose: false,
			fromMe,
			participant: participant ?? void 0,
			accountId: resolved.accountId
		});
		if (!remove && !isEmpty) return jsonResult({
			ok: true,
			added: emoji
		});
		return jsonResult({
			ok: true,
			removed: true
		});
	}
	throw new Error(`Unsupported WhatsApp action: ${action}`);
}

//#endregion
export { handleWhatsAppAction };