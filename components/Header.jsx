"use client";
import Link from "next/link";
import { FaChartSimple } from "react-icons/fa6";
import useLogged from "@/hooks/useLogged";
import { useEffect, useMemo } from "react";
import { redirect, useRouter } from "next/navigation";
import { getSession, useSession } from "next-auth/react";

export const Header = () => {
  const [loggedIn, setLoggedIn] = useLogged();
  const router = useRouter();
  const { data } = useSession();

  useMemo(() => {
    setLoggedIn(!!data);
  }, [data]);

  const handleLogIn = async () => {
    router.replace("/api/auth/signin");
  };

  const handleLogout = async () => {
    router.replace("/api/auth/signout");
  };

  return (
    <div className="w-full bg-black h-24 flex justify-between items-center px-8 md:px-20 sticky top-0">
      <Link
        href={"/"}
        className="flex items-center justify-center h-full hover:cursor-pointer"
      >
        <FaChartSimple className="text-gradient mr-2 h-10 w-10" />
        <p className="font-bold text-white md:text-2xl">Spotify Hub</p>
      </Link>
      {loggedIn ? (
        <ul className="flex items-center justify-center space-x-12">
          <p
            className="font-bold text-white hover:cursor-pointer hover:text-secondary duration-150"
            onClick={() => router.push("/home")}
          >
            Home
          </p>
          <p
            className="font-bold text-white hover:cursor-pointer hover:text-secondary duration-150"
            onClick={() => router.push("/profile")}
          >
            Profile
          </p>
          <p
            className="font-bold text-white hover:cursor-pointer hover:text-secondary duration-150"
            onClick={handleLogout}
          >
            Sign Out
          </p>
        </ul>
      ) : (
        <p
          className="font-bold text-white hover:cursor-pointer hover:text-secondary duration-150"
          onClick={handleLogIn}
        >
          Sign In
        </p>
      )}
    </div>
  );
};
