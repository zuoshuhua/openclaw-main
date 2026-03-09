import "./accounts-CCsyRzgq.js";
import "./paths-MKyEVmEb.js";
import "./github-copilot-token-D5fdS6xD.js";
import "./config-GHoFNNPc.js";
import { p as shouldLogVerbose, u as logVerbose } from "./subsystem-QV9R1a2-.js";
import "./utils--zJ6K5WT.js";
import "./command-format-D1BnT4u1.js";
import "./agent-scope-Rx3XjZIq.js";
import "./logger-Ber8CW5F.js";
import "./registry-DmSqCQJS.js";
import "./dock-DamC5LaN.js";
import "./message-channel-C0jRZuxZ.js";
import "./sessions-BZDdaFIm.js";
import "./plugins-CGpvW2b6.js";
import "./accounts-umiE56uT.js";
import "./accounts-BL7mfQv6.js";
import "./bindings-DnPvYgC3.js";
import "./paths-Djp0435f.js";
import "./redact-BDBsd4Wt.js";
import "./errors-mtZdgESV.js";
import "./path-alias-guards-BurZu1bF.js";
import "./fs-safe-BJFxj5_x.js";
import "./image-ops-lixKaBrx.js";
import "./ssrf-CNFE2mLw.js";
import "./fetch-guard-TrC02Qcz.js";
import "./local-roots-DQ5uREi7.js";
import "./tool-images-CrVWvj9m.js";
import { f as isAudioAttachment, i as normalizeMediaAttachments, o as resolveMediaAttachmentLocalRoots, t as runAudioTranscription } from "./audio-transcription-runner-JhzAU9I0.js";
import "./skills-DzIezlSX.js";
import "./chrome-sok9EMkr.js";
import "./store-AkR7Xf61.js";
import "./thinking-DSrMKUWv.js";
import "./pi-embedded-helpers-BpoKa-DZ.js";
import "./image-C0AWvekD.js";
import "./pi-model-discovery-B9z9wxRA.js";
import "./api-key-rotation-MbQLg1Mc.js";
import "./proxy-fetch-tlvkx1lP.js";

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