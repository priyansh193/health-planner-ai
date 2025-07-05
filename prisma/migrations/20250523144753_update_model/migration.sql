-- CreateTable
CREATE TABLE "CountryInsight" (
    "country" TEXT NOT NULL,
    "ageGroup" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "averageLifeExpectancy" DOUBLE PRECISION NOT NULL,
    "aqi" INTEGER NOT NULL,
    "aqiCategory" TEXT NOT NULL,
    "stepsRecommendationByAgeGroup" JSONB[],
    "nutritionNeeds" TEXT[],
    "lifestyleRecommendations" TEXT[],
    "healthTrends" TEXT[],

    CONSTRAINT "CountryInsight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CountryInsight_country_ageGroup_key" ON "CountryInsight"("country", "ageGroup");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_country_ageGroup_fkey" FOREIGN KEY ("country", "ageGroup") REFERENCES "CountryInsight"("country", "ageGroup") ON DELETE SET NULL ON UPDATE CASCADE;
