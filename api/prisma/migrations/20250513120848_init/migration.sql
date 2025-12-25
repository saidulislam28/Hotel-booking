-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "sub_title" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
