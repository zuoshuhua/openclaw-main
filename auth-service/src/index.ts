import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDatabase, disconnectDatabase } from "./db/index.js";
import authRoutes from "./routes/auth.routes.js";
import { config } from "./config.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Routes
app.use("/api/auth", authRoutes);

// Error handling
app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
async function startServer() {
  // Connect to database
  await connectDatabase();

  // Start HTTP server
  app.listen(config.port, () => {
    console.log(`Auth service running on port ${config.port}`);
    console.log(`Environment: ${config.nodeEnv}`);
  });
}

// Graceful shutdown
async function shutdown() {
  console.log("Shutting down...");
  await disconnectDatabase();
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

// Start
startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

export default app;
