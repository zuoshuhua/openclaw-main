import { Router, type Request, type Response } from "express";
import { z } from "zod";
import { authService } from "../services/auth.service.js";

const router = Router();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

const resetPasswordSchema = z.object({
  token: z.string(),
  password: z.string().min(6),
});

// Register
router.post("/register", async (req: Request, res: Response) => {
  try {
    const data = registerSchema.parse(req.body);
    const result = await authService.register(data);

    if (result.success) {
      res.status(201).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: "Invalid input data" });
    } else {
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  }
});

// Login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const data = loginSchema.parse(req.body);
    const result = await authService.login(data);

    if (result.success) {
      res.json(result);
    } else {
      res.status(401).json(result);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: "Invalid input data" });
    } else {
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  }
});

// Get current user
router.get("/me", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      res.status(401).json({ success: false, error: "No token provided" });
      return;
    }

    const token = authHeader.substring(7);
    const payload = authService.verifyToken(token);

    if (!payload) {
      res.status(401).json({ success: false, error: "Invalid token" });
      return;
    }

    const result = await authService.getCurrentUser(payload.userId);

    if (result.success) {
      res.json(result);
    } else {
      res.status(401).json(result);
    }
  } catch {
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Forgot password
router.post("/forgot-password", async (req: Request, res: Response) => {
  try {
    const data = forgotPasswordSchema.parse(req.body);
    const result = await authService.forgotPassword(data.email);

    if (result.success) {
      res.json({ success: true, message: "If the email exists, a reset link has been sent." });
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: "Invalid email" });
    } else {
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  }
});

// Reset password
router.post("/reset-password", async (req: Request, res: Response) => {
  try {
    const data = resetPasswordSchema.parse(req.body);
    const result = await authService.resetPassword(data.token, data.password);

    if (result.success) {
      res.json({ success: true, message: "Password reset successfully" });
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: "Invalid input data" });
    } else {
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  }
});

export default router;
