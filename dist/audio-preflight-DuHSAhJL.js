import "./agent-scope-C20LDXxH.js";
import "./paths-B-UhE8oc.js";
import { p as shouldLogVerbose, u as logVerbose } from "./subsystem-Cz-8RV-1.js";
import "./utils-Dkpkr730.js";
import "./workspace-BPZaOnoC.js";
import "./logger-z1fQ0OvK.js";
import "./model-selection-B7s8ALQI.js";
import "./env-CzhFkGTc.js";
import "./github-copilot-token-Ccz0f65i.js";
import "./boolean-mcn6kL0s.js";
import "./internal-hooks-DnZwKbbp.js";
import "./registry-D0OGArIh.js";
import "./dock-nya2lWl3.js";
import "./plugins-CaibREC7.js";
import "./accounts-BsdFAVCU.js";
import "./bindings-7oGHFogR.js";
import "./accounts-BqTTD6LR.js";
import "./image-ops-CuX2qoDO.js";
import "./pi-model-discovery-C0JlS5iU.js";
import "./message-channel-BWWzCg24.js";
import "./pi-embedded-helpers-wDhrOlPN.js";
import "./chrome-DgNS7CRx.js";
import "./frontmatter-CRguOQQT.js";
import "./skills-nqeB6DQX.js";
import "./path-alias-guards-hzH0WXBo.js";
import "./redact-CjPSEMjT.js";
import "./errors-ClrT1sYQ.js";
import "./fs-safe-BVhAcfCx.js";
import "./proxy-env-C2xOc67k.js";
import "./store-BZVwJzrd.js";
import "./sessions-CJrpgXR9.js";
import "./accounts-JDaPsrgr.js";
import "./paths-Cta-tAwZ.js";
import "./tool-images-Bdk3k0dB.js";
import "./thinking-FnAYAFD8.js";
import "./image-CqminYp6.js";
import { g as isAudioAttachment, i as normalizeMediaAttachments, o as resolveMediaAttachmentLocalRoots, t as runAudioTranscription } from "./audio-transcription-runner-B-I2APia.js";
import "./fetch-CDsIFpm_.js";
import "./fetch-guard-BVtuO-MG.js";
import "./api-key-rotation-Bkv5oL5u.js";
import "./proxy-fetch-BddkV1I3.js";

//#region src/media-understanding/audio-preflight.ts
/**
* Transcribes the first audio attachment BEFORE mention checking.
* This allows voice notes to be processed in group chats with requireMention: true.
* Returns the transcript or undefined if transcription fails or no audio is found.
*/
async function transcribeFirstAudio(params) {
	const { ctx, cfg } = params;
	const audioConfig = cfg.tools?.media?.audio;
	if (!audioConfig || audioConfig.enabled === false) return;
	const attachments = normalizeMediaAttachments(ctx);
	if (!attachments || attachments.length === 0) return;
	const firstAudio = attachments.find((att) => att && isAudioAttachment(att) && !att.alreadyTranscribed);
	if (!firstAudio) return;
	if (shouldLogVerbose()) logVerbose(`audio-preflight: transcribing attachment ${firstAudio.index} for mention check`);
	try {
		const { transcript } = await runAudioTranscription({
			ctx,
			cfg,
			attachments,
			agentDir: params.agentDir,
			providers: params.providers,
			activeModel: params.activeModel,
			localPathRoots: resolveMediaAttachmentLocalRoots({
				cfg,
				ctx
			})
		});
		if (!transcript) return;
		firstAudio.alreadyTranscribed = true;
		if (shouldLogVerbose()) logVerbose(`audio-preflight: transcribed ${transcript.length} chars from attachment ${firstAudio.index}`);
		return transcript;
	} catch (err) {
		if (shouldLogVerbose()) logVerbose(`audio-preflight: transcription failed: ${String(err)}`);
		return;
	}
}

//#endregion
export { transcribeFirstAudio };