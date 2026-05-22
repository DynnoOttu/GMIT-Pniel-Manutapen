"use client";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { type FC } from "react";
import { useFormState } from "react-dom";
import type { Preacher } from "@prisma/client";
import { savePreacher, updatePreacher } from "../lib/actions";
import SubmitButtonForm from "../../components/submit-form-button";
import { Textarea } from "@/components/ui/textarea";

interface FormPreacherProps {
  type?: "ADD" | "EDIT";
  defaultValues?: Preacher | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const FormPreacher: FC<FormPreacherProps> = ({
  type = "ADD",
  defaultValues,
}) => {
  const updatePreacherAction = (_state: ActionResult, formData: FormData) =>
    updatePreacher(null, defaultValues?.id!, formData);

  const [state, formAction] = useFormState(
    type === "ADD" ? savePreacher : updatePreacherAction,
    initialFormState,
  );

  return (
    <form action={formAction} className="w-full space-y-6">
      {state.errorTitle && (
        <div className="my-7 rounded-lg bg-red-500 p-4 text-white">
          <div className="mb-4 font-bold">{state.errorTitle}</div>

          <ul className="list-inside list-disc">
            {state.errorDesc?.map((value, index) => (
              <li key={index + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nama Lengkap</Label>

            <Input
              placeholder="Nama lengkap..."
              name="fullName"
              id="fullName"
              defaultValue={defaultValues?.fullName || ""}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nickname">Nama Panggilan</Label>

            <Input
              placeholder="Nama panggilan..."
              name="nickname"
              id="nickname"
              defaultValue={defaultValues?.nickname || ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Jabatan / Posisi</Label>

            <Input
              placeholder="Pendeta, Evangelis..."
              name="position"
              id="position"
              defaultValue={defaultValues?.position || ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="churchOrigin">Asal Gereja</Label>

            <Input
              placeholder="Asal gereja..."
              name="churchOrigin"
              id="churchOrigin"
              defaultValue={defaultValues?.churchOrigin || ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Nomor HP</Label>

            <Input
              placeholder="08xxxx"
              name="phoneNumber"
              id="phoneNumber"
              defaultValue={defaultValues?.phoneNumber || ""}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>

            <Input
              type="email"
              placeholder="Email..."
              name="email"
              id="email"
              defaultValue={defaultValues?.email || ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Alamat</Label>

            <Textarea
              placeholder="Alamat..."
              name="address"
              id="address"
              defaultValue={defaultValues?.address || ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="biography">Biografi</Label>

            <Textarea
              placeholder="Biografi singkat..."
              name="biography"
              id="biography"
              defaultValue={defaultValues?.biography || ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photo">Upload Foto</Label>

            <Input
              type="file"
              name="photoUrl"
              id="photo"
              accept="image/*"
              required={type === "ADD"}
            />
          </div>
        </div>
      </div>

      <SubmitButtonForm />
    </form>
  );
};

export default FormPreacher;
