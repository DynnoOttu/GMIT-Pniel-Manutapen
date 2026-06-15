"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface DetailModalProps<T> {
  id: string;

  title: string;

  action: (id: string) => Promise<T | null>;

  render: (data: T) => React.ReactNode;
}

export default function DetailModal<T>({
  id,
  title,
  action,
  render,
}: DetailModalProps<T>) {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function load() {
      if (!open || data) return;

      setLoading(true);

      const result = await action(id);

      setData(result);

      setLoading(false);
    }

    load();
  }, [open, id, action, data]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="
    bg-flysha-light-purple
    hover:bg-flysha-light-purple/90
    text-white
    border-0
  "
        >
          Detail
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
    bg-flysha-black
    text-white
    border-flysha-dark-grey
    max-h-[85vh]
    overflow-y-auto
  "
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {loading && <div>Loading...</div>}

        {!loading && data && render(data)}
      </DialogContent>
    </Dialog>
  );
}
