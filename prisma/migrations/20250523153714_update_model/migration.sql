/*
  Warnings:

  - You are about to drop the column `RecommendedDailyStepsByAgeGroup` on the `CountryInsight` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CountryInsight" DROP COLUMN "RecommendedDailyStepsByAgeGroup",
ADD COLUMN     "stepsRecommendationByAgeGroup" JSONB[];
