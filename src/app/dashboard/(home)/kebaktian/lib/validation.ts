import { z } from "zod";

export const churchServiceSchema = z.object({
  title: z.string().min(3, {
    message: "Judul minimal 3 karakter",
  }),

  category: z.enum([
    "MAIN_SERVICE",
    "YOUTH_SERVICE",
    "PRAYER_MEETING",
    "SPECIAL_SERVICE",
  ]),

  serviceDate: z.string(),

  startTime: z.string(),

  endTime: z.string(),

  theme: z.string().min(3, {
    message: "Tema minimal 3 karakter",
  }),

  preacherId: z.string().min(1, {
    message: "Pengkhotbah wajib dipilih",
  }),

  worshipLeader: z
    .string()
    .nullable()
    .optional()
    .transform((v) => v || undefined),

  description: z.string().optional(),

  additionalNotes: z.string().optional(),

  liveYoutubeUrl: z.string().url().optional().or(z.literal("")),

  bulletinTitle: z.string().optional(),

  bulletinUrl: z.any().optional(),

  liturgyTitle: z.string().optional(),

  liturgyUrl: z.any().optional(),

  isPublished: z.boolean().optional(),
});

export function validatePdf(file: FormDataEntryValue | null) {
  if (!file) {
    return null;
  }

  if (!(file instanceof File)) {
    return "File tidak valid";
  }

  if (file.size === 0) {
    return null;
  }

  if (file.type !== "application/pdf") {
    return "File harus berupa PDF";
  }

  const maxSize = 10 * 1024 * 1024; // 10MB

  if (file.size > maxSize) {
    return "Ukuran file maksimal 10MB";
  }

  return null;
}
