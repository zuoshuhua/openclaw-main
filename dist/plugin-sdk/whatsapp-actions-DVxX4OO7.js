import { i as resolveWhatsAppAccount } from "./accounts-BJ3FD8iq.js";
import "./paths-MKyEVmEb.js";
import "./github-copilot-token-D5fdS6xD.js";
import "./config-BmhsqdYr.js";
import "./subsystem-D6oMbtUD.js";
import "./utils-Dvmyx0m4.js";
import "./command-format-CJB6Ncs3.js";
import "./agent-scope-9Jx8TNbO.js";
import "./logger-DI7sEWlb.js";
import "./registry-BVz0kWJu.js";
import "./message-channel-BYv7z0XM.js";
import "./plugins-DBRUuA3Q.js";
import "./bindings-B-sCo6Ng.js";
import "./path-alias-guards-BjeQ193W.js";
import "./fs-safe-PgLsCe8k.js";
import "./image-ops-D__KhkKk.js";
import "./ssrf-Vn2lDwyW.js";
import "./fetch-guard-DLYDvtEU.js";
import "./local-roots-DjU9gGw0.js";
import "./ir-Nb9UyO90.js";
import "./chunk-DHHTnHFi.js";
import "./markdown-tables-DEcTRDKt.js";
import "./render-CRfOWrdg.js";
import "./tables-Dahh_vv1.js";
import "./tool-images-CV8lcMiQ.js";
import { f as readReactionParams, h as readStringParam, i as ToolAuthorizationError, l as jsonResult, o as createActionGate } from "./target-errors-7GtjgfiP.js";
import { t as resolveWhatsAppOutboundTarget } from "./resolve-outbound-target-ClO_mG8D.js";
import { r as sendReactionWhatsApp } from "./outbound-BTJfB38J.js";

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