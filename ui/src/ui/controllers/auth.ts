import { authService, type LoginCredentials, type RegisterData } from "../../services/auth.service.js";
import type { OpenClawApp } from "../app.js";
import { connectGateway } from "../app-gateway.js";

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: {
    id: string;
    email: string;
    name: string | null;
    agentId: string;
    gatewayToken: string;
    gatewayUrl: string;
  } | null;
  authError: string | null;
  authLoading: boolean;
  authView: "login" | "register" | "forgot-password";
}

export async function handleLogin(
  state: OpenClawApp,
  credentials: LoginCredentials,
): Promise<boolean> {
  state.authLoading = true;
  state.authError = null;

  try {
    // If already authenticated, logout first to clean up previous session
    if (state.isAuthenticated || state.currentUser) {
      handleLogout(state);
    }

    const result = await authService.login(credentials);

    if (result.success && result.user && result.token) {
      state.isAuthenticated = true;
      state.currentUser = result.user;
      await connectWithAuth(state, result.user, result.token);
      return true;
    } else {
      state.authError = result.error || "登录失败";
      return false;
    }
  } catch (error) {
    state.authError = "网络错误";
    return false;
  } finally {
    state.authLoading = false;
  }
}

export async function handleRegister(
  state: OpenClawApp,
  data: RegisterData,
): Promise<boolean> {
  state.authLoading = true;
  state.authError = null;

  try {
    const result = await authService.register(data);

    if (result.success && result.user && result.token) {
      state.isAuthenticated = true;
      state.currentUser = result.user;
      await connectWithAuth(state, result.user, result.token);
      return true;
    } else {
      state.authError = result.error || "注册失败";
      return false;
    }
  } catch (error) {
    state.authError = "网络错误";
    return false;
  } finally {
    state.authLoading = false;
  }
}

export async function handleForgotPassword(
  state: OpenClawApp,
  email: string,
): Promise<boolean> {
  state.authLoading = true;
  state.authError = null;

  try {
    const result = await authService.forgotPassword(email);

    if (result.success) {
      state.authError = "如果该邮箱存在，重置链接已发送。";
      return true;
    } else {
      state.authError = result.error || "发送重置邮件失败";
      return false;
    }
  } catch (error) {
    state.authError = "网络错误";
    return false;
  } finally {
    state.authLoading = false;
  }
}

export function handleLogout(state: OpenClawApp): void {
  authService.logout();
  state.isAuthenticated = false;
  state.currentUser = null;
  state.authView = "login";
  // Disconnect from gateway
  if (state.client) {
    state.client.close();
    state.client = null;
  }
  state.connected = false;
  // Clear session from URL
  const url = new URL(window.location.href);
  url.searchParams.delete("session");
  window.history.replaceState({}, "", url.toString());
}

async function connectWithAuth(
  state: OpenClawApp,
  user: AuthState["currentUser"],
  token: string,
): Promise<void> {
  if (!user) return;

  // Wait a moment for previous connection to fully close
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Construct auth token for gateway
  const authToken = `${user.agentId}:${user.gatewayToken}`;
  // Construct session key
  const sessionKey = `agent:${user.agentId.toLowerCase()}:main`;

  // Apply settings
  state.applySettings({
    ...state.settings,
    token: authToken,
    sessionKey,
    lastActiveSessionKey: sessionKey,
  });

  // Update URL
  const url = new URL(window.location.href);
  url.searchParams.set("session", sessionKey);
  window.history.replaceState({}, "", url.toString());

  // Connect to gateway
  try {
    connectGateway(state);
  } catch (error) {
    console.error("Failed to connect to gateway:", error);
    // If connection fails, try without token (for dev mode with auth: none)
    state.applySettings({
      ...state.settings,
      token: "",
      sessionKey,
      lastActiveSessionKey: sessionKey,
    });
    connectGateway(state);
  }
}

export async function tryRestoreSession(state: OpenClawApp): Promise<boolean> {
  if (!authService.isAuthenticated()) {
    return false;
  }

  try {
    const result = await authService.getCurrentUser();

    if (result.success && result.user) {
      state.isAuthenticated = true;
      state.currentUser = result.user;

      // Token for gateway auth
      const authToken = `${result.user.agentId}:${result.user.gatewayToken}`;
      // sessionKey for session identification
      const sessionKey = `agent:${result.user.agentId.toLowerCase()}:main`;

      state.applySettings({
        ...state.settings,
        token: authToken,
        sessionKey,
        lastActiveSessionKey: sessionKey,
      });

      const url = new URL(window.location.href);
      url.searchParams.set("session", sessionKey);
      window.history.replaceState({}, "", url.toString());

      connectGateway(state);
      return true;
    }

    return false;
  } catch {
    return false;
  }
}
