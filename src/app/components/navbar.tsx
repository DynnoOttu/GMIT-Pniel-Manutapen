"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DropdownMenu } from "./dropdown-menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="Navbar"
      className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px] relative"
    >
      <Link href="/" className="flex items-center shrink-0">
        <Image
          width={90}
          height={50}
          src="https://res.cloudinary.com/deevvbquc/image/upload/v1778745539/4uqNA_EHDpbLlhCtSiKzGVavfVBCxBu6sO_9V9t5Zkx70o3hnBjinORfpadHuulXa1Pl3anf3EZkDgKr6jcEIn4JJs4IE-7qECVIrvulLQT2RlpdvB2mUlAD3ikEOD_LRx-RGqaAVXspy44FyV1iMkRoDCpp80YdvaA3QvHrkVRT2brr-zos9c2l66P6UTLs_qh9yf5.jpg"
          alt="logo"
          className="rounded-full object-cover"
        />
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex gap-[30px] items-center">
        <DropdownMenu />
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-2xl border border-[#ECE8FF] px-6 py-5 z-50">
          <ul className="flex flex-col gap-2">
            <DropdownMenu onClose={() => setMobileOpen(false)} />
          </ul>
        </div>
      )}
    </nav>
  );
}
