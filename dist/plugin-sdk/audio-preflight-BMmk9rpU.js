import "./accounts-BJ3FD8iq.js";
import "./paths-MKyEVmEb.js";
import "./github-copilot-token-D5fdS6xD.js";
import "./config-BmhsqdYr.js";
import { p as shouldLogVerbose, u as logVerbose } from "./subsystem-D6oMbtUD.js";
import "./utils-Dvmyx0m4.js";
import "./command-format-CJB6Ncs3.js";
import "./agent-scope-9Jx8TNbO.js";
import "./logger-DI7sEWlb.js";
import "./registry-BVz0kWJu.js";
import "./dock-DIbHCqsW.js";
import "./message-channel-BYv7z0XM.js";
import "./sessions-Dj-UlljP.js";
import "./plugins-DBRUuA3Q.js";
import "./accounts-YnESSY0E.js";
import "./accounts-sq2YsyrI.js";
import "./bindings-B-sCo6Ng.js";
import "./paths-Djp0435f.js";
import "./redact-cljBs_oX.js";
import "./errors-aZpciL43.js";
import "./path-alias-guards-BjeQ193W.js";
import "./fs-safe-PgLsCe8k.js";
import "./image-ops-D__KhkKk.js";
import "./ssrf-Vn2lDwyW.js";
import "./fetch-guard-DLYDvtEU.js";
import "./local-roots-DjU9gGw0.js";
import "./tool-images-CV8lcMiQ.js";
import { f as isAudioAttachment, i as normalizeMediaAttachments, o as resolveMediaAttachmentLocalRoots, t as runAudioTranscription } from "./audio-transcription-runner-rKpSBUrP.js";
import "./skills-D2oHAPJ2.js";
import "./chrome-D3SFhRAQ.js";
import "./store-CueAm6QV.js";
import "./thinking-DSrMKUWv.js";
import "./pi-embedded-helpers-CT50RtnR.js";
import "./image-BFV6ZAPg.js";
import "./pi-model-discovery-B-X7Bj1y.js";
import "./api-key-rotation-BKvUhY2a.js";
import "./proxy-fetch-BvsXW6tN.js";

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