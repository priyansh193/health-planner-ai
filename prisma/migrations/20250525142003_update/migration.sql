/*
  Warnings:

  - You are about to drop the `WeeklyMealPlan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `calories` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carbs` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fats` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `friday` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monday` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proteins` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saturday` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sunday` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thursday` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tuesday` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wednesday` to the `DietChart` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DietaryPreference" AS ENUM ('VEGETARIAN', 'NON_VEGETARIAN', 'VEGAN', 'EGGETARIAN');

-- DropForeignKey
ALTER TABLE "WeeklyMealPlan" DROP CONSTRAINT "WeeklyMealPlan_chartId_fkey";

-- AlterTable
ALTER TABLE "DietChart" ADD COLUMN     "calories" INTEGER NOT NULL,
ADD COLUMN     "carbs" INTEGER NOT NULL,
ADD COLUMN     "dietaryPreference" "DietaryPreference" NOT NULL DEFAULT 'VEGETARIAN',
ADD COLUMN     "fats" INTEGER NOT NULL,
ADD COLUMN     "friday" JSONB NOT NULL,
ADD COLUMN     "monday" JSONB NOT NULL,
ADD COLUMN     "proteins" INTEGER NOT NULL,
ADD COLUMN     "saturday" JSONB NOT NULL,
ADD COLUMN     "sunday" JSONB NOT NULL,
ADD COLUMN     "thursday" JSONB NOT NULL,
ADD COLUMN     "tuesday" JSONB NOT NULL,
ADD COLUMN     "wednesday" JSONB NOT NULL;

-- DropTable
DROP TABLE "WeeklyMealPlan";
