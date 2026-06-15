"use server";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { preacherFormSchema } from "./validation";
import { redirect } from "next/navigation";
import { deleteFile, uploadFile } from "@/lib/supabase";
import prisma from "../../../../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function getPreacherById(id: string) {
  try {
    const data = await prisma.preacher.findFirst({
      where: {
        id,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function savePreacher(
  prevState: unknown,
  formData: FormData,
): Promise<ActionResult> {
  const values = preacherFormSchema.safeParse({
    fullName: formData.get("fullName"),
    nickname: formData.get("nickname"),
    position: formData.get("position"),
    churchOrigin: formData.get("churchOrigin"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    address: formData.get("address"),
    biography: formData.get("biography"),
    photoUrl: formData.get("photoUrl"),
  });

  console.log("Values", values);

  if (!values.success) {
    return {
      errorTitle: "Error Validation",
      errorDesc: values.error.issues.map((issue) => issue.message),
    };
  }

  let uploadedPhoto = "";

  const photoFile = values.data.photoUrl as File;

  if (photoFile && photoFile.size > 0) {
    const uploadedFile = await uploadFile(photoFile);

    if (uploadedFile instanceof Error) {
      return {
        errorTitle: "Failed to upload file",
        errorDesc: ["Terjadi masalah pada upload file"],
      };
    }

    uploadedPhoto = uploadedFile as string;
  }

  try {
    await prisma.preacher.create({
      data: {
        fullName: values.data.fullName,
        nickname: values.data.nickname || null,
        position: values.data.position || null,
        churchOrigin: values.data.churchOrigin || null,
        phoneNumber: values.data.phoneNumber || null,
        email: values.data.email || null,
        address: values.data.address || null,
        biography: values.data.biography || null,
        photoUrl: uploadedPhoto || null,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      errorTitle: "Failed to insert data",
      errorDesc: ["Terjadi masalah pada database"],
    };
  }

  revalidatePath("/dashboard/pengkhotbah");
  redirect("/dashboard/pengkhotbah");
}

export async function updatePreacher(
  prevState: unknown,
  id: string,
  formData: FormData,
): Promise<ActionResult> {
  const photo = formData.get("photoUrl") as File;

  let preacherSchemaUpdate;

  if (photo.size === 0) {
    preacherSchemaUpdate = preacherFormSchema.omit({
      photoUrl: true,
    });
  } else {
    preacherSchemaUpdate = preacherFormSchema;
  }

  const values = preacherSchemaUpdate.safeParse({
    fullName: formData.get("fullName"),
    nickname: formData.get("nickname"),
    position: formData.get("position"),
    churchOrigin: formData.get("churchOrigin"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    address: formData.get("address"),
    biography: formData.get("biography"),
    photoUrl: formData.get("photo"),
  });

  if (!values.success) {
    return {
      errorTitle: "Error Validation",
      errorDesc: values.error.issues.map((issue) => issue.message),
    };
  }

  let filename: string | null = null;

  try {
    const currentPreacher = await prisma.preacher.findFirst({
      where: { id },
      select: {
        photoUrl: true,
      },
    });

    filename = currentPreacher?.photoUrl || null;

    if (photo.size > 0) {
      const uploadedFile = await uploadFile(photo);

      if (uploadedFile instanceof Error) {
        return {
          errorTitle: "Failed to upload file",
          errorDesc: ["Terjadi masalah pada upload file"],
        };
      }

      if (currentPreacher?.photoUrl) {
        await deleteFile(currentPreacher.photoUrl);
      }

      filename = uploadedFile as string;
    }

    await prisma.preacher.update({
      where: {
        id,
      },
      data: {
        fullName: values.data.fullName,
        nickname: values.data.nickname || null,
        position: values.data.position || null,
        churchOrigin: values.data.churchOrigin || null,
        phoneNumber: values.data.phoneNumber || null,
        email: values.data.email || null,
        address: values.data.address || null,
        biography: values.data.biography || null,
        photoUrl: filename,
      },
    });
  } catch (error) {
    return {
      errorTitle: "Failed to update data",
      errorDesc: ["Terjadi masalah pada database"],
    };
  }

  revalidatePath("/dashboard/pengkhotbah");
  redirect("/dashboard/pengkhotbah");
}

export async function deletePreacher(
  id: string,
): Promise<ActionResult | undefined> {
  const data = await prisma.preacher.findFirst({
    where: { id },
  });

  if (!data) {
    return {
      errorTitle: "Data not found",
      errorDesc: [],
    };
  }

  if (data.photoUrl) {
    const deletedFile = await deleteFile(data.photoUrl);

    if (deletedFile instanceof Error) {
      return {
        errorTitle: "Failed to delete file",
        errorDesc: ["Terjadi masalah saat menghapus file"],
      };
    }
  }

  try {
    await prisma.preacher.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);

    return {
      errorTitle: "Failed to delete data",
      errorDesc: ["Terjadi masalah pada database"],
    };
  }

  revalidatePath("/dashboard/pengkhotbah");
}
