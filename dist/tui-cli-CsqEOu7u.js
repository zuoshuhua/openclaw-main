import { p as theme } from "./globals-d3aR1MYC.js";
import "./paths-BMo6kTge.js";
import { d as defaultRuntime } from "./subsystem-kl-vrkYi.js";
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
import "./client-CjiWjavb.js";
import "./call-aBcStjgI.js";
import "./pairing-token-DfIpR3Pw.js";
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
import "./tool-display-3t3R7qfs.js";
import "./commands-C_Iej0yw.js";
import "./commands-registry-BNOPLLIG.js";
import { t as parseTimeoutMs } from "./parse-timeout-BLJlOyi9.js";
import { t as formatDocsLink } from "./links-BMokj3K3.js";
import { t as runTui } from "./tui-BMzMjMhF.js";

//#region src/cli/tui-cli.ts
function registerTuiCli(program) {
	program.command("tui").description("Open a terminal UI connected to the Gateway").option("--url <url>", "Gateway WebSocket URL (defaults to gateway.remote.url when configured)").option("--token <token>", "Gateway token (if required)").option("--password <password>", "Gateway password (if required)").option("--session <key>", "Session key (default: \"main\", or \"global\" when scope is global)").option("--deliver", "Deliver assistant replies", false).option("--thinking <level>", "Thinking level override").option("--message <text>", "Send an initial message after connecting").option("--timeout-ms <ms>", "Agent timeout in ms (defaults to agents.defaults.timeoutSeconds)").option("--history-limit <n>", "History entries to load", "200").addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/tui", "docs.openclaw.ai/cli/tui")}\n`).action(async (opts) => {
		try {
			const timeoutMs = parseTimeoutMs(opts.timeoutMs);
			if (opts.timeoutMs !== void 0 && timeoutMs === void 0) defaultRuntime.error(`warning: invalid --timeout-ms "${String(opts.timeoutMs)}"; ignoring`);
			const historyLimit = Number.parseInt(String(opts.historyLimit ?? "200"), 10);
			await runTui({
				url: opts.url,
				token: opts.token,
				password: opts.password,
				session: opts.session,
				deliver: Boolean(opts.deliver),
				thinking: opts.thinking,
				message: opts.message,
				timeoutMs,
				historyLimit: Number.isNaN(historyLimit) ? void 0 : historyLimit
			});
		} catch (err) {
			defaultRuntime.error(String(err));
			defaultRuntime.exit(1);
		}
	});
}

//#endregion
export { registerTuiCli };