"use client";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") {
    router.replace("/api/auth/signin");
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
