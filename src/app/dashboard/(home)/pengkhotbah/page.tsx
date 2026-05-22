import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import { getPengkhotbah } from "./lib/data";
import { columns } from "./components/columns-table";

export const metadata: Metadata = {
  title: "Dashboard | Airplanes",
};

export default async function PengkhotbahPage() {
  const pengkhotbah = await getPengkhotbah();

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Pengkhotbah</div>
        <Button asChild>
          <Link href={"/dashboard/pengkhotbah/create"}>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Data
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={pengkhotbah} />
    </>
  );
}
