import React from "react";
import FormChurchService from "../components/form-church-service.tsx";
import { getPengkhotbah } from "../../pengkhotbah/lib/data";

export default async function CreateChurchServicePage() {
  const preachers = await getPengkhotbah();

  return (
    <div>
      <div className="my-5 text-2xl font-bold">Tambah Jadwal Ibadah</div>

      <FormChurchService preachers={preachers} />
    </div>
  );
}
