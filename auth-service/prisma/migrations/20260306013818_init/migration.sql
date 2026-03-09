-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "agentId" TEXT NOT NULL,
    "gatewayToken" TEXT NOT NULL,
    "gatewayUrl" TEXT NOT NULL DEFAULT 'ws://localhost:3001',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_agentId_key" ON "users"("agentId");

-- CreateIndex
CREATE UNIQUE INDEX "users_gatewayToken_key" ON "users"("gatewayToken");
