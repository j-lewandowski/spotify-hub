import Link from "next/link";
import { FaTrophy } from "react-icons/fa";

const Platform = ({ type, data, title }) => {
  const [first, second, third] = data;

  return (
    <Link
      href={`/rankings?type=${type}&range=medium_term`}
      className="flex flex-col items-start justify-center h-full w-full gap-y-2 md:row-span-2 row-span-1 "
    >
      <p className="text-white text-sm md:text-xl font-bold">{title}</p>
      <div className="w-full h-full bg-neutral-800 flex flex-col  items-center justify-center p-4 rounded-lg text-white hover:cursor-pointer hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-secondary duration-150">
        <div className="w-full h-full flex items-end justify-around">
          <div className="bg-secondary w-4 md:w-16 column ease-in-out duration-700 max-h-[40%] rounded-t-lg relative c2">
            <div className=" absolute flex flex-col items-center justify-center text-center w-full -top-10 md:-top-24 col-name c2">
              <span className="text-sm md:text-lg font-semibold whitespace-nowrap w-fit">
                {second.name}
              </span>
              <FaTrophy className="h-4 md:h-16 w-auto text-[#c0c0c0]" />
            </div>
          </div>
          <div className="bg-secondary w-4 md:w-16 column ease-in-out duration-700 max-h-[50%] rounded-t-lg relative c1">
            <div className=" absolute flex flex-col items-center justify-center text-center w-full -top-10 md:-top-24 col-name c1">
              <span className="text-sm md:text-lg font-semibold whitespace-nowrap w-fit">
                {first.name}
              </span>
              <FaTrophy className="h-4 md:h-16 w-auto text-[#d4af37]" />
            </div>
          </div>
          <div className="bg-secondary w-4 md:w-16 column ease-in-out duration-700 max-h-[30%] rounded-t-lg relative c3">
            <div className=" absolute flex flex-col items-center justify-center text-center w-full -top-10 md:-top-24 col-name c3">
              <span className="text-sm md:text-lg font-semibold whitespace-nowrap w-fit">
                {third.name}
              </span>
              <FaTrophy className="h-4 md:h-16 w-auto text-[#cd7f32]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Platform;
