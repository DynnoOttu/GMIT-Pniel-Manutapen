"use server";

import prisma from "../../../../../../lib/prisma";

export async function getPengkhotbah() {
  try {
    const pengkhotbah = await prisma.preacher.findMany();

    return pengkhotbah;
  } catch (error) {
    return [];
  }
}
