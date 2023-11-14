"use client";

import { useRouter } from "next/navigation";

const Navbutton = ({ icon }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="p-2 md:p-4 bg-secondary rounded-full text-black hover:scale-110 duration-150"
    >
      <span>{icon}</span>
    </button>
  );
};

export default Navbutton;
