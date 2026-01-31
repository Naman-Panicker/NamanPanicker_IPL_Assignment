-- CreateTable
CREATE TABLE "Stats" (
    "team_id" INTEGER NOT NULL,
    "highScore" INTEGER NOT NULL,
    "highMargin_inRuns" INTEGER NOT NULL,
    "highMargin_inWk" INTEGER NOT NULL,
    "lowScore" INTEGER NOT NULL,
    "lowMargin_inRuns" INTEGER NOT NULL,
    "lowMargin_inWk" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL,
    "runs50" INTEGER NOT NULL,
    "runs100" INTEGER NOT NULL,
    "totalRuns" INTEGER NOT NULL,
    "totalWks" INTEGER NOT NULL,
    "extras" INTEGER NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("team_id")
);

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("tid") ON DELETE RESTRICT ON UPDATE CASCADE;
