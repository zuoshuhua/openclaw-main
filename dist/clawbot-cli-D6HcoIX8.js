import "./paths-BBP4yd-2.js";
import { p as theme } from "./globals-DyWRcjQY.js";
import "./utils-xFiJOAuL.js";
import "./agent-scope-lcHHTjPm.js";
import "./subsystem-BfkFJ4uQ.js";
import "./openclaw-root-DeEQQJyX.js";
import "./logger-DOAKKqsf.js";
import "./exec-C1jYNNci.js";
import "./model-selection-DIQNSl-z.js";
import "./github-copilot-token-b6kJVrW-.js";
import "./boolean-BsqeuxE6.js";
import "./env-o3cHIFWK.js";
import "./host-env-security-DkAVVuaw.js";
import "./env-vars-ausEv-bN.js";
import "./registry-Dih4j9AI.js";
import "./manifest-registry-D__tUCLh.js";
import "./message-channel-iOBej-45.js";
import "./tailnet-BcdXkHG0.js";
import "./ws-C4l4080-.js";
import "./client-CjN0Qr5u.js";
import "./call-DMaAlr_d.js";
import "./pairing-token-DuijwWQW.js";
import "./runtime-config-collectors-BS3H4Eqv.js";
import "./command-secret-targets-CrI2WPW-.js";
import { t as formatDocsLink } from "./links-C_8X69xU.js";
import { n as registerQrCli } from "./qr-cli-Bs2ihUOJ.js";

//#region src/cli/clawbot-cli.ts
function registerClawbotCli(program) {
	registerQrCli(program.command("clawbot").description("Legacy clawbot command aliases").addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/clawbot", "docs.openclaw.ai/cli/clawbot")}\n`));
}

//#endregion
export { registerClawbotCli };