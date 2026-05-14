import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarAuth from "./navbar-auth";

export default function Navbar() {
  return (
    <nav
      id="Navbar"
      className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px]"
    >
      <Link href="/" className="flex items-center shrink-0">
        <Image
          width={90}
          height={50}
          src="https://res.cloudinary.com/deevvbquc/image/upload/v1778745539/4uqNA_EHDpbLlhCtSiKzGVavfVBCxBu6sO_9V9t5Zkx70o3hnBjinORfpadHuulXa1Pl3anf3EZkDgKr6jcEIn4JJs4IE-7qECVIrvulLQT2RlpdvB2mUlAD3ikEOD_LRx-RGqaAVXspy44FyV1iMkRoDCpp80YdvaA3QvHrkVRT2brr-zos9c2l66P6UTLs_qh9yf5.jpg"
          alt="logo"
          className="rounded-full object-cover"
        />
        {/* <h1 className="font-semibold text-1xl ml-2">GMIT Pniel Manutapen</h1> */}
      </Link>
      {/* <ul className="nav-menus flex gap-[30px] items-center w-fit">
        <li>
          <Link href="" className="font-medium">
            Flash Sale h
          </Link>
        </li>
        <li>
          <Link href="" className="font-medium">
            Discover
          </Link>
        </li>
        <li>
          <Link href="" className="font-medium">
            Packages
          </Link>
        </li>
        <li>
          <Link href="" className="font-medium">
            Stories
          </Link>
        </li>
        <li>
          <Link href="" className="font-medium">
            About
          </Link>
        </li>
        <NavbarAuth />
      </ul> */}
    </nav>
  );
}
