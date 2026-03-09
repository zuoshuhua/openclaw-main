// UI Configuration
export const config = {
  // Gateway configuration
  gatewayUrl: import.meta.env.VITE_GATEWAY_URL || "ws://localhost:18790",
  
  // Auth service configuration
  authServiceUrl: import.meta.env.VITE_AUTH_SERVICE_URL || "http://localhost:3002",
  
  // App configuration
  appName: "OpenClaw",
  version: "1.0.0",
};
