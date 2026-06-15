/*
  Warnings:

  - You are about to drop the column `passport` on the `User` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Airplane` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Flight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlightSeat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN');

-- CreateEnum
CREATE TYPE "ServiceCategory" AS ENUM ('MAIN_SERVICE', 'YOUTH_SERVICE', 'WOMEN_SERVICE', 'MEN_SERVICE', 'PRAYER_MEETING', 'CELL_GROUP', 'OTHER');

-- CreateEnum
CREATE TYPE "AnnouncementCategory" AS ENUM ('GENERAL', 'EVENT', 'MINISTRY', 'URGENT');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_planeId_fkey";

-- DropForeignKey
ALTER TABLE "FlightSeat" DROP CONSTRAINT "FlightSeat_flightId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_flightId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_seatId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passport",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'ADMIN';

-- DropTable
DROP TABLE "Airplane";

-- DropTable
DROP TABLE "Flight";

-- DropTable
DROP TABLE "FlightSeat";

-- DropTable
DROP TABLE "Ticket";

-- DropEnum
DROP TYPE "RoleUser";

-- DropEnum
DROP TYPE "StatusTicket";

-- DropEnum
DROP TYPE "TypeSeat";

-- CreateTable
CREATE TABLE "ChurchProfile" (
    "id" TEXT NOT NULL,
    "churchName" TEXT NOT NULL,
    "shortDescription" TEXT,
    "vision" TEXT NOT NULL,
    "mission" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "background" TEXT,
    "address" TEXT NOT NULL,
    "googleMapsLink" TEXT,
    "phoneNumber" TEXT,
    "whatsappNumber" TEXT,
    "email" TEXT,
    "instagramUrl" TEXT,
    "youtubeUrl" TEXT,
    "facebookUrl" TEXT,
    "websiteUrl" TEXT,
    "logoUrl" TEXT,
    "bannerUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChurchProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "churchProfileId" TEXT NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preacher" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "nickname" TEXT,
    "photoUrl" TEXT,
    "gender" "Gender",
    "birthDate" TIMESTAMP(3),
    "phoneNumber" TEXT,
    "email" TEXT,
    "address" TEXT,
    "churchOrigin" TEXT,
    "position" TEXT,
    "biography" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Preacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChurchService" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" "ServiceCategory" NOT NULL DEFAULT 'MAIN_SERVICE',
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "theme" TEXT NOT NULL,
    "preacherId" TEXT NOT NULL,
    "worshipLeader" TEXT,
    "description" TEXT,
    "additionalNotes" TEXT,
    "liveYoutubeUrl" TEXT,
    "bulletinTitle" TEXT,
    "bulletinUrl" TEXT,
    "liturgyTitle" TEXT,
    "liturgyUrl" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "ChurchService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Devotional" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "bibleVerse" TEXT,
    "content" TEXT NOT NULL,
    "youtubeUrl" TEXT,
    "thumbnailUrl" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Devotional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" "AnnouncementCategory" NOT NULL DEFAULT 'GENERAL',
    "thumbnailUrl" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnailUrl" TEXT,
    "location" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "registrationLink" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CongregationMember" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "placeOfBirth" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "phoneNumber" TEXT,
    "email" TEXT,
    "address" TEXT,
    "occupation" TEXT,
    "photoUrl" TEXT,
    "baptismStatus" BOOLEAN NOT NULL DEFAULT false,
    "membershipStatus" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CongregationMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Devotional_slug_key" ON "Devotional"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Announcement_slug_key" ON "Announcement"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_churchProfileId_fkey" FOREIGN KEY ("churchProfileId") REFERENCES "ChurchProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChurchService" ADD CONSTRAINT "ChurchService_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChurchService" ADD CONSTRAINT "ChurchService_preacherId_fkey" FOREIGN KEY ("preacherId") REFERENCES "Preacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Devotional" ADD CONSTRAINT "Devotional_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
