-- CreateTable
CREATE TABLE "Teams" (
    "tid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "abr" TEXT NOT NULL,
    "logo_url" TEXT NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("tid")
);

-- CreateTable
CREATE TABLE "Players" (
    "pid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "birthplace" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "bat" TEXT NOT NULL,
    "bowl" TEXT NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("pid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teams_name_key" ON "Teams"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Teams_abr_key" ON "Teams"("abr");

-- CreateIndex
CREATE UNIQUE INDEX "Teams_logo_url_key" ON "Teams"("logo_url");

-- AddForeignKey
ALTER TABLE "Players" ADD CONSTRAINT "Players_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Teams"("tid") ON DELETE RESTRICT ON UPDATE CASCADE;
