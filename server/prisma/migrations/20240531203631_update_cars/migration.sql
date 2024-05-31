/*
  Warnings:

  - Added the required column `price` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "transmission" TEXT NOT NULL,
    "photo" TEXT NOT NULL
);
INSERT INTO "new_cars" ("brand", "id", "mileage", "model", "name", "photo", "transmission", "year") SELECT "brand", "id", "mileage", "model", "name", "photo", "transmission", "year" FROM "cars";
DROP TABLE "cars";
ALTER TABLE "new_cars" RENAME TO "cars";
PRAGMA foreign_key_check("cars");
PRAGMA foreign_keys=ON;
