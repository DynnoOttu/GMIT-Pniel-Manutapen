"use client";

import { useEffect, useState } from "react";

export default function PengumumanModal({ pengumuman }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Muncul setelah 300ms saat halaman dibuka
    const timer = setTimeout(() => setIsOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const icons = ["🙏", "🎵", "❤️", "📖", "✝️"];

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(18,18,18,0.75)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="bg-white rounded-[28px] w-full max-w-[500px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Top accent bar */}
        <div className="h-2 bg-[#5B3DF5]" />

        {/* Header */}
        <div className="bg-[#F7F7FB] px-7 py-5 flex items-center justify-between border-b border-[#ECE8FF]">
          <div>
            <p className="text-xs text-[#5B3DF5] font-bold tracking-widest uppercase">
              📢 Pengumuman Jemaat
            </p>
            <h2 className="font-bold text-xl text-[#121212] mt-1">
              Informasi Terkini
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ECE8FF] hover:bg-[#DDD8FF] text-[#5B3DF5] font-bold text-lg transition-colors"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        {/* Announcement List */}
        <div className="px-7 py-6 flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
          {pengumuman.map((item, index) => (
            <div
              key={item.id}
              className="flex gap-4 bg-[#F7F7FB] border border-[#ECE8FF] rounded-2xl p-4"
            >
              <div className="w-10 h-10 min-w-[40px] flex items-center justify-center rounded-xl bg-[#EEE9FF] text-lg">
                {icons[index % icons.length]}
              </div>
              <div>
                <p className="font-semibold text-[#121212] text-sm">
                  {item.title}
                </p>
                <p className="text-gray-500 text-sm mt-1 leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer button */}
        <div className="px-7 pb-7">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#5B3DF5] hover:bg-[#4B30D4] transition-colors text-white py-4 rounded-2xl font-semibold text-sm"
          >
            Tutup Pengumuman
          </button>
        </div>
      </div>
    </div>
  );
}
