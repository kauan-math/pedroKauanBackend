-- CreateTable
CREATE TABLE "Personagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "tecnicaAmaldicoada" TEXT NOT NULL,
    "grau" TEXT NOT NULL,
    "clan" TEXT NOT NULL,
    "dominio" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
