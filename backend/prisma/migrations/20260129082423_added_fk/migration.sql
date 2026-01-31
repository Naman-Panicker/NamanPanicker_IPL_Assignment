/*
  Warnings:

  - Added the required column `team_id` to the `Players` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Players" DROP CONSTRAINT "Players_pid_fkey";

-- AlterTable
ALTER TABLE "Players" ADD COLUMN     "team_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("tid") ON DELETE RESTRICT ON UPDATE CASCADE;
