/*
  Warnings:

  - You are about to alter the column `address` on the `Place` table. The data in that column could be lost. The data in that column will be cast from `String` to `Json`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Place" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" JSONB NOT NULL,
    "type" TEXT NOT NULL,
    "rating" REAL NOT NULL
);
INSERT INTO "new_Place" ("address", "description", "id", "name", "rating", "type") SELECT "address", "description", "id", "name", "rating", "type" FROM "Place";
DROP TABLE "Place";
ALTER TABLE "new_Place" RENAME TO "Place";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
