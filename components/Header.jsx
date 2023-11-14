"use client";
import Link from "next/link";
import { FaChartSimple } from "react-icons/fa6";
import useLogged from "@/hooks/useLogged";
import { useEffect, useMemo, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { getSession, useSession } from "next-auth/react";
import Hamburger from "./Hamburger";
import Nav from "./Nav";

export const Header = () => {
  return (
    <div className="w-full bg-black h-24 flex justify-between items-center px-8 md:px-20 top-0 fixed z-50">
      <Link
        href={"/"}
        className="flex items-center justify-center h-full hover:cursor-pointer"
      >
        <FaChartSimple className="text-gradient mr-2 h-10 w-10" />
        <p className="font-bold text-white md:text-2xl">Spotify Hub</p>
      </Link>
      <Nav />
    </div>
  );
};
