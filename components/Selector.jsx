"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

export default function Selector({ filter, setFilter, fields, type, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.currentTarget.id;
    if (type === "type") {
      router.push(`/rankings?type=${value}&range=${filter.range.value}`);
      setFilter((prev) => ({ ...prev, type: fields[value] }));
    } else {
      router.push(`/rankings?type=${filter.type.value}&range=${value}`);
      setFilter((prev) => ({ ...prev, range: fields[value] }));
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-between font-normal text-lg rounded-lg tracking-wider border-4 border-transparent active:border-secondary duration-300 active:text-white">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-neutral-800 p-4 w-48 flex items-center justify-between rounded-lg"
      >
        {label}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="absolute w-full flex flex-col items-center top-[110%] z-10 bg-neutral-600 rounded-lg p-4 text-white">
          {Object.keys(fields).map((key) => (
            <ul
              key={fields[key].name}
              id={key}
              onClick={handleChange}
              className={twMerge(
                "w-full flex justify-between cursor-pointer hover:bg-neutral-500 rounded-r-lg border-l-transparent hover:border-l-secondary border-l-4 p-2",
                key === filter[type].value && "text-secondary"
              )}
            >
              <span>{fields[key].name}</span>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
