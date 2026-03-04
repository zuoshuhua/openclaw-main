import "./agent-scope-VZDYA99W.js";
import "./paths-Cvc9EM8Y.js";
import { p as shouldLogVerbose, u as logVerbose } from "./subsystem-WCiH_xcZ.js";
import "./utils-BJodEFvY.js";
import "./workspace-rLr5ow9u.js";
import "./logger-Cwmblq-p.js";
import "./model-selection-CSD_oHtT.js";
import "./env-C4Cs26B1.js";
import "./github-copilot-token-CdvoBR8W.js";
import "./boolean-mcn6kL0s.js";
import "./internal-hooks-Bnltc-GC.js";
import "./registry-kjlAFBra.js";
import "./dock-CNZ1y3yR.js";
import "./plugins-Cv1vepx_.js";
import "./accounts-BXkpgvgU.js";
import "./bindings-X9J6GcH0.js";
import "./accounts-DW9rFHVN.js";
import "./image-ops-BQryS4WJ.js";
import "./pi-model-discovery-CQNslOIt.js";
import "./message-channel-thdrQaRj.js";
import "./pi-embedded-helpers-DkcCCQio.js";
import "./chrome-mUqmbzIg.js";
import "./frontmatter-5U1LYLH9.js";
import "./skills-BptNAl8K.js";
import "./path-alias-guards-Bn6nFGea.js";
import "./redact-DrNUBkR3.js";
import "./errors-B7cCDJ9y.js";
import "./fs-safe-DeGQtXS6.js";
import "./proxy-env-SJiR3xkz.js";
import "./store-D1yhnL4-.js";
import "./sessions-Cs7hZbds.js";
import "./accounts-7aqMfSxt.js";
import "./paths-DxZe79lR.js";
import "./tool-images-CEEzzIih.js";
import "./thinking-FnAYAFD8.js";
import "./image-YJZdVuCK.js";
import { g as isAudioAttachment, i as normalizeMediaAttachments, o as resolveMediaAttachmentLocalRoots, t as runAudioTranscription } from "./audio-transcription-runner-DmZjbwP0.js";
import "./fetch-7Qhh2gpB.js";
import "./fetch-guard-M32a3aVj.js";
import "./api-key-rotation-DAxStOAc.js";
import "./proxy-fetch-nIPs7_SE.js";

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