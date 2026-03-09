import "dotenv/config";

export const config = {
  port: parseInt(process.env.PORT || "3002"),
  nodeEnv: process.env.NODE_ENV || "development",
  databaseUrl: process.env.DATABASE_URL || "file:./data/auth.db",
  jwtSecret: process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  defaultGatewayUrl: process.env.DEFAULT_GATEWAY_URL || "ws://localhost:18790",
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  fromEmail: process.env.FROM_EMAIL || "noreply@openclaw.local",
};
