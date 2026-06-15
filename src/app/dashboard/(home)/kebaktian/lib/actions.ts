"use server";

import prisma from "../../../../../../lib/prisma";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { churchServiceSchema, validatePdf } from "./validation";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { uploadPdf } from "@/lib/claudinary";

export async function saveChurchService(
  prevState: unknown,
  formData: FormData,
): Promise<ActionResult> {
  const values = churchServiceSchema.safeParse({
    title: formData.get("title"),

    category: formData.get("category"),

    serviceDate: formData.get("serviceDate"),

    startTime: formData.get("startTime"),

    endTime: formData.get("endTime"),

    theme: formData.get("theme"),

    preacherId: formData.get("preacherId"),

    worshipLeader: formData.get("worshipLeader"),

    description: formData.get("description"),

    additionalNotes: formData.get("additionalNotes"),

    liveYoutubeUrl: formData.get("liveYoutubeUrl"),

    bulletinTitle: formData.get("bulletinTitle"),

    liturgyTitle: formData.get("liturgyTitle"),

    isPublished: true,
  });

  if (!values.success) {
    console.log("Error create", values.error);
    return {
      errorTitle: "Validation Error",

      errorDesc: values.error.issues.map((item) => item.message),
    };
  }

  try {
    const bulletinFile = formData.get("bulletinFile");

    const liturgyFile = formData.get("liturgyFile");

    const bulletinError = validatePdf(bulletinFile);

    if (bulletinError) {
      return {
        errorTitle: "Validation Error",

        errorDesc: [`Bulletin: ${bulletinError}`],
      };
    }

    const liturgyError = validatePdf(liturgyFile);

    if (liturgyError) {
      return {
        errorTitle: "Validation Error",

        errorDesc: [`Liturgy: ${liturgyError}`],
      };
    }

    let bulletinUrl: string | null = null;

    let liturgyUrl: string | null = null;

    if (bulletinFile instanceof File && bulletinFile.size > 0) {
      bulletinUrl = await uploadPdf(bulletinFile, "church-service/bulletins");
    }

    if (liturgyFile instanceof File && liturgyFile.size > 0) {
      liturgyUrl = await uploadPdf(liturgyFile, "church-service/liturgies");
    }

    await prisma.churchService.create({
      data: {
        title: values.data.title,

        category: values.data.category,

        serviceDate: new Date(values.data.serviceDate),

        startTime: new Date(values.data.startTime),

        endTime: new Date(values.data.endTime),

        theme: values.data.theme,

        preacherId: values.data.preacherId,

        worshipLeader: values.data.worshipLeader || null,

        description: values.data.description || null,

        additionalNotes: values.data.additionalNotes || null,

        liveYoutubeUrl: values.data.liveYoutubeUrl || null,

        bulletinTitle: values.data.bulletinTitle || null,

        bulletinUrl,

        liturgyTitle: values.data.liturgyTitle || null,

        liturgyUrl,

        isPublished: values.data.isPublished,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      errorTitle: "Database Error",

      errorDesc: ["Terjadi masalah saat menyimpan data"],
    };
  }

  revalidatePath("/dashboard/kebaktian");

  redirect("/dashboard/kebaktian");
}
