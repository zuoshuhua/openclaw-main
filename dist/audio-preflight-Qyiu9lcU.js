import { a as logVerbose, c as shouldLogVerbose } from "./globals-d3aR1MYC.js";
import "./paths-BMo6kTge.js";
import "./subsystem-kl-vrkYi.js";
import "./boolean-DtWR5bt3.js";
import "./auth-profiles-dV37hbSg.js";
import "./agent-scope-yztLp4kQ.js";
import "./utils-cwpAMi-t.js";
import "./openclaw-root-BU3lu8pM.js";
import "./logger-BFQv53Hf.js";
import "./exec-t2VHjaVf.js";
import "./github-copilot-token-Byc_YVYE.js";
import "./host-env-security-lcjXF83D.js";
import "./version-DdJhsIqk.js";
import "./env-vars-mSSOl7Rv.js";
import "./registry-ds-_TqV5.js";
import "./manifest-registry-CkLy3eEP.js";
import "./dock-BIwi_bj4.js";
import "./pi-model-discovery-CniChlp4.js";
import "./frontmatter-BLUo-dxn.js";
import "./skills-C9yzI3LM.js";
import "./path-alias-guards-5rac999j.js";
import "./message-channel-vD1W0gaU.js";
import "./sessions-BAetP_vl.js";
import "./plugins-BDk6Lp_X.js";
import "./accounts-_8mQCB3n.js";
import "./accounts-BpW6qFmr.js";
import "./logging-CcxUDNcI.js";
import "./accounts-Bi_ya7C5.js";
import "./bindings-Cr1nwayG.js";
import "./paths-Bn3zjTqJ.js";
import "./chat-envelope-AUuZAcrC.js";
import "./net-BmTXmf0b.js";
import "./tailnet-Dsa9Cpd2.js";
import "./image-ops-BLjDVVhu.js";
import "./pi-embedded-helpers-BElZzF1A.js";
import "./sandbox-Dly3sBp1.js";
import "./tool-catalog-CDe8aNjS.js";
import "./chrome-BE6KbV1d.js";
import "./tailscale-CcmGuDnz.js";
import "./auth-ClhS6huc.js";
import "./server-context-vMqcj7Iq.js";
import "./paths-CHj8eCrR.js";
import "./redact-kP6dI-RQ.js";
import "./errors-DrflaMHL.js";
import "./fs-safe-DxvmGl5B.js";
import "./proxy-env-poePaOZd.js";
import "./store-CGWZXqcp.js";
import "./ports-CppKoV-B.js";
import "./trash-CzgjR7DR.js";
import "./server-middleware-sjOqkmR3.js";
import "./tool-images-Dnomug8x.js";
import "./thinking-BxCyPtl0.js";
import "./models-config-B9pGMzxu.js";
import "./model-catalog-BEIwykPz.js";
import "./fetch-WgDu00Tx.js";
import { _ as isAudioAttachment, i as normalizeMediaAttachments, o as resolveMediaAttachmentLocalRoots, t as runAudioTranscription } from "./audio-transcription-runner-5gijXTpE.js";
import "./fetch-guard-DSR_EhOf.js";
import "./image-B5YM--k9.js";
import "./tool-display-3t3R7qfs.js";
import "./api-key-rotation-BxQayfvQ.js";
import "./proxy-fetch-D397Vi7A.js";

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