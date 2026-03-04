import { t as buildOutboundMediaLoadOptions } from "./load-options-B6pCGvwD.js";
import { a as loadWebMedia } from "./ir-Nb9UyO90.js";
import { a as saveMediaBuffer } from "./store-CueAm6QV.js";

//#region src/media/outbound-attachment.ts
async function resolveOutboundAttachmentFromUrl(mediaUrl, maxBytes, options) {
	const media = await loadWebMedia(mediaUrl, buildOutboundMediaLoadOptions({
		maxBytes,
		mediaLocalRoots: options?.localRoots
	}));
	const saved = await saveMediaBuffer(media.buffer, media.contentType ?? void 0, "outbound", maxBytes);
	return {
		path: saved.path,
		contentType: saved.contentType
	};
}

//#endregion
export { resolveOutboundAttachmentFromUrl as t };