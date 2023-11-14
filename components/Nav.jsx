"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import useLogged from "@/hooks/useLogged";
import Hamburger from "./Hamburger";
import { useSession } from "next-auth/react";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useLogged();
  const [windowWidth, setWindowWith] = useState();
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWith(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth < 640 ? (
    <Hamburger>
      {loggedIn ? (
        <ul className="flex flex-col items-center justify-center space-y-12 pt-16">
          <p
            className="font-bold text-white hover:cursor-pointer hover:text-secondary duration-150 text-2xl"
            onClick={() => {
              router.replace("/home");
            }}
          >
            Home
          </p>
          <p
            className="font-bold text-white hover:cursor-pointer hover:text-secondary duration-150 text-2xl"
            onClick={() => router.replace("/profile")}
          >
            Profile
          </p>
          <p
            className="font-bold text-rose-500 hover:cursor-pointer hover:text-secondary duration-150 text-2xl"
            onClick={handleLogout}
          >
            Sign Out
          </p>
        </ul>
      ) : (
        <p
          className="font-bold text-white hover:cursor-pointer hover:text-secondary duration-150 text-2xl w-full text-center pt-16"
          onClick={handleLogIn}
        >
          Sign In
        </p>
      )}
    </Hamburger>
  ) : loggedIn ? (
    <ul className="flex items-center justify-center space-x-12">
      <p
        className="font-bold text-white hover:cursor-pointer hover:text-secondary duration-150"
        onClick={() => router.replace("/home")}
      >
        Home
      </p>
      <p
        className="font-bold text-white hover:cursor-pointer hover:text-secondary duration-150"
        onClick={() => router.replace("/profile")}
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
  );
};

export default Nav;
