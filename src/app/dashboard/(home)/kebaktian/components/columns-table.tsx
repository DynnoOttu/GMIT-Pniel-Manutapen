"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { getChurchServiceDetail } from "../lib/data";
import DetailModal from "@/app/components/detail-modal";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "title",

    header: "Title",
  },

  {
    accessorKey: "preacher.fullName",

    header: "Pengkhotbah",
  },

  {
    accessorKey: "serviceDate",
    header: "Tanggal Ibadah",
    cell: ({ row }) => {
      const date = new Date(row.getValue("serviceDate"));
      return date.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
  },

  {
    accessorKey: "category",

    header: "Category",
  },

  {
    id: "detail",

    header: "Action",

    cell: ({ row }) => (
      <div className="inline-flex items-center gap-5">
        <Button variant="secondary" size="sm" asChild>
          <Link href="#">
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Link>
        </Button>
        <DetailModal
          id={row.original.id}
          title="Detail Ibadah"
          action={getChurchServiceDetail}
          render={(service) => (
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <Item label="Judul" value={service.title} />

              <Item label="Kategori" value={service.category} />

              <Item
                label="Tanggal Ibadah"
                value={new Date(service.serviceDate).toLocaleDateString(
                  "id-ID",
                  {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  },
                )}
              />
              <Item
                label="Jam Mulai"
                value={new Date(service.startTime).toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              />
              <Item
                label="Jam Selesai"
                value={new Date(service.endTime).toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              />
              <Item label="Tema" value={service.theme} />

              <Item label="Pengkhotbah" value={service.preacher?.fullName} />

              <Item
                label="Jabatan Pengkhotbah"
                value={service.preacher?.position}
              />

              <Item label="Worship Leader" value={service.worshipLeader} />

              <Item label="Deskripsi" value={service.description} />

              <Item label="Catatan Tambahan" value={service.additionalNotes} />

              <Item
                label="Youtube Live"
                value={
                  service.liveYoutubeUrl ? (
                    <a
                      href={service.liveYoutubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                underline
                text-flysha-light-purple
              "
                    >
                      Buka Live Stream
                    </a>
                  ) : (
                    "-"
                  )
                }
              />

              <div className="space-y-2">
                <div className="font-semibold">Warta Jemaat</div>

                <Item label="Judul" value={service.bulletinTitle} />

                <Item
                  label="PDF"
                  value={
                    service.bulletinUrl ? (
                      <a
                        href={service.bulletinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                  underline
                  text-flysha-light-purple
                "
                      >
                        Lihat PDF
                      </a>
                    ) : (
                      "-"
                    )
                  }
                />
              </div>

              <div className="space-y-2">
                <div className="font-semibold">Liturgi</div>

                <Item label="Judul" value={service.liturgyTitle} />

                <Item
                  label="PDF"
                  value={
                    service.liturgyUrl ? (
                      <a
                        href={service.liturgyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                  underline
                  text-flysha-light-purple
                "
                      >
                        Lihat PDF
                      </a>
                    ) : (
                      "-"
                    )
                  }
                />
              </div>
            </div>
          )}
        />
      </div>
    ),
  },
];

function Item({
  label,
  value,
}: {
  label: string;

  value?: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-flysha-grey">{label}</div>

      <div className="mt-1">{value || "-"}</div>
    </div>
  );
}
