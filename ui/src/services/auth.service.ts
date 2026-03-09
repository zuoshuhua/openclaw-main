import { config } from "../config.js";

export interface User {
  id: string;
  email: string;
  name: string | null;
  emailVerified: boolean;
  agentId: string;
  gatewayToken: string;
  gatewayUrl: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  error?: string;
}

const AUTH_TOKEN_KEY = "openclaw_auth_token";
const USER_KEY = "openclaw_user";

class AuthService {
  private baseUrl = config.authServiceUrl || "http://localhost:3002";

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      if (result.success && result.token && result.user) {
        this.setToken(result.token);
        this.setUser(result.user);
        return result;
      }

      return { success: false, error: result.error || "Login failed" };
    } catch (error) {
      return { success: false, error: "Network error" };
    }
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success && result.token && result.user) {
        this.setToken(result.token);
        this.setUser(result.user);
        return result;
      }

      return { success: false, error: result.error || "Registration failed" };
    } catch (error) {
      return { success: false, error: "Network error" };
    }
  }

  async getCurrentUser(): Promise<AuthResponse> {
    const token = this.getToken();
    if (!token) {
      return { success: false, error: "Not authenticated" };
    }

    try {
      const response = await fetch(`${this.baseUrl}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const result = await response.json();

      if (result.success && result.user) {
        this.setUser(result.user);
        return result;
      }

      return { success: false, error: result.error || "Failed to get user" };
    } catch (error) {
      return { success: false, error: "Network error" };
    }
  }

  async forgotPassword(email: string): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      return { success: false, error: "Network error" };
    }
  }

  logout(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  setUser(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): User | null {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) {
      try {
        return JSON.parse(userJson);
      } catch {
        return null;
      }
    }
    return null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getGatewayToken(): string | null {
    const user = this.getUser();
    return user?.gatewayToken || null;
  }
}

export const authService = new AuthService();
