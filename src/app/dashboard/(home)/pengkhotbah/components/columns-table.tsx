"use client";

import { Button } from "@/components/ui/button";
import { getUrlFile } from "@/lib/supabase";
import type { Preacher } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeletePreacher from "./delete-airplane";

export const columns: ColumnDef<Preacher>[] = [
  {
    accessorKey: "photoUrl",
    header: "Photo",
    cell: ({ row }) => {
      const preacher = row.original;
      return (
        <Image
          src={
            preacher.photoUrl
              ? getUrlFile(preacher.photoUrl)
              : "/images/avatar-placeholder.png"
          }
          alt={preacher.fullName}
          width={80}
          height={80}
          className="rounded-md object-cover"
        />
      );
    },
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "nickname",
    header: "Nickname",
    cell: ({ row }) => row.original.nickname || "-",
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => row.original.position || "-",
  },
  {
    accessorKey: "churchOrigin",
    header: "Church Origin",
    cell: ({ row }) => row.original.churchOrigin || "-",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ row }) => row.original.phoneNumber || "-",
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => (row.original.isActive ? "Active" : "Inactive"),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const preacher = row.original;

      return (
        <div className="inline-flex items-center gap-5">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/dashboard/pengkhotbah/edit/${preacher.id}`}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>

          <DeletePreacher id={preacher.id} />
        </div>
      );
    },
  },
];
