/*
  Warnings:

  - Added the required column `RecommendedDailyStepsByAgeGroup` to the `CountryInsight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CountryInsight" ADD COLUMN     "RecommendedDailyStepsByAgeGroup" INTEGER NOT NULL;
