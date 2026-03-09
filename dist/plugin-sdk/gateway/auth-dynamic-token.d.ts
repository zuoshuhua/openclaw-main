/**
 * Verify dynamic user token for authenticated users
 * Token format: "user-{uuid}:{gatewayToken}"
 *
 * In production, this should query the auth database.
 * For development, we accept any token that matches the user-* format.
 */
export declare function verifyDynamicUserToken(token: string): Promise<{
    valid: boolean;
    agentId?: string;
}>;
