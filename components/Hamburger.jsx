"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaXmark } from "react-icons/fa6";
const Hamburger = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        <div className="bg-secondary w-8 h-1 rounded-lg -translate-y-2" />
        <div className="bg-secondary w-8 h-1 rounded-lg" />
        <div className="bg-secondary w-8 h-1 rounded-lg translate-y-2" />
      </div>
      <div
        className={twMerge(
          `absolute w-screen h-screen bg-primary left-[100%] duration-200 top-0 p-8 text-white z-100`,
          isOpen ? "left-0" : "left-[100%]"
        )}
        onClick={() => setIsOpen(false)}
      >
        <FaXmark className="w-10 h-10" onClick={() => setIsOpen(false)} />
        {children}
      </div>
    </>
  );
};

export default Hamburger;
