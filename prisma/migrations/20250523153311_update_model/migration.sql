/*
  Warnings:

  - You are about to drop the column `lifestyleRecommendations` on the `CountryInsight` table. All the data in the column will be lost.
  - You are about to drop the column `stepsRecommendationByAgeGroup` on the `CountryInsight` table. All the data in the column will be lost.
  - The `RecommendedDailyStepsByAgeGroup` column on the `CountryInsight` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `RecommendedDailySleepByAgeGroup` to the `CountryInsight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CountryInsight" DROP COLUMN "lifestyleRecommendations",
DROP COLUMN "stepsRecommendationByAgeGroup",
ADD COLUMN     "RecommendedDailySleepByAgeGroup" INTEGER NOT NULL,
ADD COLUMN     "healthTips" TEXT[],
DROP COLUMN "RecommendedDailyStepsByAgeGroup",
ADD COLUMN     "RecommendedDailyStepsByAgeGroup" JSONB[];
