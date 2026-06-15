"use server";

import prisma from "../../../../../../lib/prisma";

export async function getChurchServices() {
  try {
    return await prisma.churchService.findMany({
      orderBy: {
        serviceDate: "desc",
      },

      select: {
        id: true,

        title: true,

        category: true,

        theme: true,

        serviceDate: true,

        preacher: {
          select: {
            fullName: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function getChurchServiceDetail(id: string) {
  try {
    const service = await prisma.churchService.findUnique({
      where: {
        id,
      },

      include: {
        preacher: {
          select: {
            id: true,
            fullName: true,
            position: true,
          },
        },
      },
    });

    return service;
  } catch (error) {
    console.log(error);

    return null;
  }
}
