/**
 * Verify dynamic user token for authenticated users
 * Token format: "user-{uuid}:{gatewayToken}"
 * 
 * In production, this should query the auth database.
 * For development, we accept any token that matches the user-* format.
 */
export async function verifyDynamicUserToken(token: string): Promise<{ valid: boolean; agentId?: string }> {
  if (!token || !token.includes(":")) {
    return { valid: false };
  }

  const [agentId, gatewayToken] = token.split(":");

  if (!agentId || !gatewayToken) {
    return { valid: false };
  }

  // Check if it's a user agent
  if (!agentId.startsWith("user-")) {
    return { valid: false };
  }

  // For development: accept any valid UUID format token
  // In production, this should verify against the auth database
  const uuidRegex = /^user-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(agentId)) {
    return { valid: false };
  }

  // For development, we accept any gatewayToken that is a valid UUID
  const tokenRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!tokenRegex.test(gatewayToken)) {
    return { valid: false };
  }

  return { valid: true, agentId };
}
