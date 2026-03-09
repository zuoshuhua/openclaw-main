import { p as theme } from "./globals-d3aR1MYC.js";
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
import "./message-channel-vD1W0gaU.js";
import "./client-CjiWjavb.js";
import "./call-aBcStjgI.js";
import "./pairing-token-DfIpR3Pw.js";
import "./net-BmTXmf0b.js";
import "./tailnet-Dsa9Cpd2.js";
import "./runtime-config-collectors-DnOw8uVL.js";
import "./command-secret-targets-DVM9nwGB.js";
import { t as formatDocsLink } from "./links-BMokj3K3.js";
import { n as registerQrCli } from "./qr-cli-Doeg3jgD.js";

//#region src/cli/clawbot-cli.ts
function registerClawbotCli(program) {
	registerQrCli(program.command("clawbot").description("Legacy clawbot command aliases").addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/clawbot", "docs.openclaw.ai/cli/clawbot")}\n`));
}

//#endregion
export { registerClawbotCli };