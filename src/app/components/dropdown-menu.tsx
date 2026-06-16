"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Droplets, BookOpen, Heart } from "lucide-react";

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-medium flex items-center gap-1 hover:text-[#5B3DF5] transition-colors"
      >
        Pendaftaran
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-[#ECE8FF] py-2 z-50">
          <Link
            href="/pendaftaran/baptisan"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-[#121212] hover:bg-[#F7F7FB] hover:text-[#5B3DF5] transition-colors"
          >
            <Droplets size={16} className="text-[#5B3DF5]" />
            Baptisan
          </Link>
          <Link
            href="/pendaftaran/katekisasi"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-[#121212] hover:bg-[#F7F7FB] hover:text-[#5B3DF5] transition-colors"
          >
            <BookOpen size={16} className="text-[#5B3DF5]" />
            Katekisasi Baptisan
          </Link>
          <Link
            href="/pendaftaran/pernikahan"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-[#121212] hover:bg-[#F7F7FB] hover:text-[#5B3DF5] transition-colors"
          >
            <Heart size={16} className="text-[#5B3DF5]" />
            Pernikahan
          </Link>
        </div>
      )}
    </li>
  );
}
