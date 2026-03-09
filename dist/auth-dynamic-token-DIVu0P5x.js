//#region src/gateway/auth-dynamic-token.ts
/**
* Verify dynamic user token for authenticated users
* Token format: "user-{uuid}:{gatewayToken}"
* 
* In production, this should query the auth database.
* For development, we accept any token that matches the user-* format.
*/
async function verifyDynamicUserToken(token) {
	if (!token || !token.includes(":")) return { valid: false };
	const [agentId, gatewayToken] = token.split(":");
	if (!agentId || !gatewayToken) return { valid: false };
	if (!agentId.startsWith("user-")) return { valid: false };
	if (!/^user-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(agentId)) return { valid: false };
	if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(gatewayToken)) return { valid: false };
	return {
		valid: true,
		agentId
	};
}

//#endregion
export { verifyDynamicUserToken };