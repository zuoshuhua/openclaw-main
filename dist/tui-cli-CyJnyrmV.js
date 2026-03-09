import { p as theme } from "./globals-d3aR1MYC.js";
import "./paths-BMo6kTge.js";
import { d as defaultRuntime } from "./subsystem-kl-vrkYi.js";
import "./boolean-DtWR5bt3.js";
import "./auth-profiles-B--FziTi.js";
import "./agent-scope-DuFk7JfV.js";
import "./utils-cwpAMi-t.js";
import "./openclaw-root-BFfBQ6FD.js";
import "./logger-BFQv53Hf.js";
import "./exec-t2VHjaVf.js";
import "./github-copilot-token-Byc_YVYE.js";
import "./host-env-security-lcjXF83D.js";
import "./version-DdJhsIqk.js";
import "./env-vars-mSSOl7Rv.js";
import "./registry-ds-_TqV5.js";
import "./manifest-registry-DKS5Msti.js";
import "./dock-B5DXCJNj.js";
import "./frontmatter-BLUo-dxn.js";
import "./skills-6U2lAbL1.js";
import "./path-alias-guards-BLnvB3eQ.js";
import "./message-channel-vD1W0gaU.js";
import "./sessions-Bidf7pNL.js";
import "./plugins-DRA6Gev0.js";
import "./accounts-zRQn433-.js";
import "./accounts-K1IaOhUI.js";
import "./logging-CcxUDNcI.js";
import "./accounts-C35KnEXA.js";
import "./bindings-vxn_WYGq.js";
import "./paths-Bn3zjTqJ.js";
import "./chat-envelope-AUuZAcrC.js";
import "./client-4X2280TF.js";
import "./call-Blb5GVik.js";
import "./pairing-token-DfIpR3Pw.js";
import "./net-CyV_kUTR.js";
import "./tailnet-Cw9YfPbh.js";
import "./image-ops-B1XQ8UAg.js";
import "./pi-embedded-helpers-B4ruwatw.js";
import "./sandbox-BciY2ZnY.js";
import "./tool-catalog-CDe8aNjS.js";
import "./chrome-CyZGpSPN.js";
import "./tailscale-CcmGuDnz.js";
import "./auth-BeAXhE_9.js";
import "./server-context-Ddpp6xy3.js";
import "./paths-8MkNWbbj.js";
import "./redact-kP6dI-RQ.js";
import "./errors-DrflaMHL.js";
import "./fs-safe-kadrhuVr.js";
import "./proxy-env-qXq5Dx9t.js";
import "./store-D0GaA-PU.js";
import "./ports-DuT3O3nk.js";
import "./trash-CzgjR7DR.js";
import "./server-middleware-BEi2vAKC.js";
import "./tool-images-BCnln0pJ.js";
import "./thinking-BxCyPtl0.js";
import "./tool-display-3t3R7qfs.js";
import "./commands-lSVvUQRs.js";
import "./commands-registry-BPs8NQbf.js";
import { t as parseTimeoutMs } from "./parse-timeout-BLJlOyi9.js";
import { t as formatDocsLink } from "./links-BMokj3K3.js";
import { t as runTui } from "./tui-DZXnX7F2.js";

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