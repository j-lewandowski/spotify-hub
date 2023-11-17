import Link from "next/link";
import PrivateRoute from "@/components/PrivateRoute";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]/route";

const ProfilePage = async () => {
  return <PrivateRoute>{<ProfilePageContent />}</PrivateRoute>;
};

const ProfilePageContent = async () => {
  const session = await getServerSession(OPTIONS);
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
      cache: "no-cache",
    },
  });

  const data = await response.json();

  return (
    <div className="w-full h-full bg-primary flex flex-col items-center pt-12 text-white gap-y-4">
      <div className="overflow-hidden h-64 w-64 rounded-full flex items-center justify-center">
        <img
          alt="profile picture"
          src={
            data.images[1].url ||
            data.images[0].url ||
            "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          }
          className="w-full h-full"
        />
      </div>
      <Link
        href={data.external_urls.spotify}
        className="text-3xl font-semibold underline underline-offset-8 hover:text-secondary hover:cursor-pointer transition-colors duration-150"
      >
        {!data.display_name ? "Logged User" : data.display_name}
      </Link>
      <span className="text-2xl font-normal">{data.email}</span>
      <p className=" text-2xl md:text-5xl font-bold mt-24">
        More features soon...
      </p>
    </div>
  );
};

export default ProfilePage;
