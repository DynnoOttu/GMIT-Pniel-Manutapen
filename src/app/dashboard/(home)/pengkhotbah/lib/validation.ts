import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const MAX_FILE_SIZE = 2000000; // 2 MB

export const preacherFormSchema = z.object({
  fullName: z
    .string({
      required_error: "Nama lengkap tidak boleh kosong",
    })
    .min(3, {
      message: "Nama lengkap minimal 3 karakter",
    }),

  nickname: z.string().optional(),

  position: z.string().optional(),

  churchOrigin: z.string().optional(),

  phoneNumber: z
    .string()
    .optional()
    .refine((value) => !value || /^(\+62|08)[0-9]{8,13}$/.test(value), {
      message: "Format nomor HP tidak valid",
    }),

  email: z
    .string()
    .optional()
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: "Format email tidak valid",
    }),

  address: z.string().optional(),

  biography: z
    .string()
    .optional()
    .refine((value) => !value || value.length >= 10, {
      message: "Biografi minimal 10 karakter",
    }),

  photoUrl: z
    .any()
    .refine(
      (file) => {
        if (!file || file.size === 0) return true;

        return ACCEPTED_IMAGE_TYPES.includes(file.type);
      },
      {
        message: "Foto harus berekstensi jpg, jpeg, atau png",
      },
    )
    .refine(
      (file) => {
        if (!file || file.size === 0) return true;

        return file.size <= MAX_FILE_SIZE;
      },
      {
        message: "Ukuran foto maksimal 2MB",
      },
    ),
});
