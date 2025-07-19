/*
  Warnings:

  - You are about to drop the column `emphasis` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `emphasis` on the `technologies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "emphasis",
ADD COLUMN     "priority_order" INTEGER;

-- AlterTable
ALTER TABLE "technologies" DROP COLUMN "emphasis",
ADD COLUMN     "priority_order" INTEGER;
