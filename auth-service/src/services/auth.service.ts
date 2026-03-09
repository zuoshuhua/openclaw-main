import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "../db/index.js";
import { config } from "../config.js";

export interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: {
    id: string;
    email: string;
    name: string | null;
    emailVerified: boolean;
    agentId: string;
    gatewayToken: string;
    gatewayUrl: string;
  };
  error?: string;
}

export interface TokenPayload {
  userId: string;
  email: string;
  agentId: string;
}

export class AuthService {
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email },
      });

      if (existingUser) {
        return { success: false, error: "User already exists" };
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Generate unique IDs
      const agentId = `user-${uuidv4()}`;
      const gatewayToken = uuidv4();

      // Create user
      const user = await prisma.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          name: data.name || null,
          agentId,
          gatewayToken,
          gatewayUrl: config.defaultGatewayUrl,
        },
      });

      // Generate JWT
      const token = this.generateToken({
        userId: user.id,
        email: user.email,
        agentId: user.agentId,
      });

      return {
        success: true,
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          emailVerified: user.emailVerified,
          agentId: user.agentId,
          gatewayToken: user.gatewayToken,
          gatewayUrl: user.gatewayUrl,
        },
      };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error: "Registration failed" };
    }
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      // Find user
      const user = await prisma.user.findUnique({
        where: { email: credentials.email },
      });

      if (!user) {
        return { success: false, error: "Invalid credentials" };
      }

      // Verify password
      const isValid = await bcrypt.compare(credentials.password, user.password);

      if (!isValid) {
        return { success: false, error: "Invalid credentials" };
      }

      // Generate JWT
      const token = this.generateToken({
        userId: user.id,
        email: user.email,
        agentId: user.agentId,
      });

      return {
        success: true,
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          emailVerified: user.emailVerified,
          agentId: user.agentId,
          gatewayToken: user.gatewayToken,
          gatewayUrl: user.gatewayUrl,
        },
      };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "Login failed" };
    }
  }

  async getCurrentUser(userId: string): Promise<AuthResponse> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return { success: false, error: "User not found" };
      }

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          emailVerified: user.emailVerified,
          agentId: user.agentId,
          gatewayToken: user.gatewayToken,
          gatewayUrl: user.gatewayUrl,
        },
      };
    } catch (error) {
      console.error("Get user error:", error);
      return { success: false, error: "Failed to get user" };
    }
  }

  async forgotPassword(email: string): Promise<{ success: boolean; error?: string }> {
    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        // Don't reveal if user exists
        return { success: true };
      }

      // TODO: Send password reset email
      console.log(`Password reset requested for: ${email}`);

      return { success: true };
    } catch (error) {
      console.error("Forgot password error:", error);
      return { success: false, error: "Failed to process request" };
    }
  }

  async resetPassword(token: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
    try {
      // TODO: Verify reset token and update password
      console.log(`Password reset with token: ${token}`);
      return { success: true };
    } catch (error) {
      console.error("Reset password error:", error);
      return { success: false, error: "Failed to reset password" };
    }
  }

  generateToken(payload: TokenPayload): string {
    return jwt.sign(payload, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn,
    });
  }

  verifyToken(token: string): TokenPayload | null {
    try {
      return jwt.verify(token, config.jwtSecret) as TokenPayload;
    } catch {
      return null;
    }
  }
}

export const authService = new AuthService();
