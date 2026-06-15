"use client";

import React from "react";
import { useFormState } from "react-dom";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SubmitButtonForm from "../../components/submit-form-button";

import { saveChurchService } from "../lib/actions";
import { Preacher } from "@prisma/client";

const initialState = {
  errorTitle: null,
  errorDesc: [],
};

interface FormChurchServiceProps {
  preachers: Preacher[];
}

export default function FormChurchService({
  preachers,
}: FormChurchServiceProps) {
  const [state, formAction] = useFormState(saveChurchService, initialState);

  return (
    <form
      action={formAction}
      encType="multipart/form-data"
      className="space-y-6"
    >
      {state.errorTitle && (
        <div className="rounded-lg bg-red-500 p-4 text-white">
          <div className="font-bold">{state.errorTitle}</div>

          <ul className="list-disc list-inside">
            {state.errorDesc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Judul Ibadah</Label>
            <Input name="title" />
          </div>

          <div className="space-y-2">
            <Label>Kategori</Label>

            <select
              name="category"
              className="w-full border rounded-md h-10 px-3"
            >
              <option value="MAIN_SERVICE">Main Service</option>

              <option value="YOUTH_SERVICE">Youth Service</option>

              <option value="PRAYER_MEETING">Prayer Meeting</option>

              <option value="SPECIAL_SERVICE">Special Service</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label>Tanggal Ibadah</Label>
            <Input type="date" name="serviceDate" />
          </div>

          <div className="space-y-2">
            <Label>Jam Mulai</Label>
            <Input type="datetime-local" name="startTime" />
          </div>

          <div className="space-y-2">
            <Label>Jam Selesai</Label>
            <Input type="datetime-local" name="endTime" />
          </div>

          <div className="space-y-2">
            <Label>Tema</Label>
            <Input name="theme" />
          </div>

          <div className="space-y-2">
            <Label>Pengkhotbah</Label>

            <select
              name="preacherId"
              className="h-10 w-full rounded-md border px-3"
              required
            >
              <option value="">Pilih Pengkhotbah</option>

              {preachers.map((preacher) => (
                <option key={preacher.id} value={preacher.id}>
                  {preacher.fullName}
                  {preacher.position ? ` - ${preacher.position}` : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Live Youtube URL</Label>
            <Input
              name="liveYoutubeUrl"
              placeholder="https://youtube.com/..."
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea name="description" />
          </div>

          <div className="space-y-2">
            <Label>Additional Notes</Label>
            <Textarea name="additionalNotes" />
          </div>

          <div className="space-y-2">
            <Label>Bulletin Title</Label>
            <Input name="bulletinTitle" />
          </div>

          <div className="space-y-2">
            <Label>Bulletin PDF</Label>

            <Input type="file" name="bulletinFile" accept=".pdf" />
          </div>

          <div className="space-y-2">
            <Label>Liturgy Title</Label>
            <Input name="liturgyTitle" />
          </div>

          <div className="space-y-2">
            <Label>Liturgy PDF</Label>

            <Input type="file" name="liturgyFile" accept=".pdf" />
          </div>
        </div>
      </div>

      <SubmitButtonForm />
    </form>
  );
}
