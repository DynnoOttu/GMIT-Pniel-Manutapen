"use server";

import prisma from "../../../../../../lib/prisma";

export async function getPengkhotbah() {
  try {
    const pengkhotbah = await prisma.preacher.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        fullName: "asc",
      },
    });

    return pengkhotbah;
  } catch (error) {
    return [];
  }
}
