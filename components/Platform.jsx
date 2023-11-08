import { FaTrophy } from "react-icons/fa";

const Platform = ({ type, data }) => {
  const [first, second, third] = data;

  return (
    <div className="w-full bg-neutral-800 flex flex-col row-span-2 gap-y-2 items-center justify-center p-4 rounded-lg text-white hover:cursor-pointer hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-secondary duration-150">
      <div className="w-full h-full flex items-end justify-around">
        <div className="bg-secondary w-16 column ease-in-out duration-700 max-h-[40%] rounded-t-lg relative c2">
          <div className=" absolute flex flex-col items-center justify-center text-center w-full -top-32 col-name c2">
            <span className="text-lg font-semibold whitespace-nowrap">
              {second.name}
            </span>
            <FaTrophy className="h-16 w-auto text-[#c0c0c0]" />
          </div>
        </div>
        <div className="bg-secondary w-16 column ease-in-out duration-700 max-h-[50%] rounded-t-lg relative c1">
          <div className=" absolute flex flex-col items-center justify-center text-center w-full -top-32 col-name c1">
            <span className="text-lg font-semibold whitespace-nowrap">
              {first.name}
            </span>
            <FaTrophy className="h-16 w-auto text-[#d4af37]" />
          </div>
        </div>
        <div className="bg-secondary w-16 column ease-in-out duration-700 max-h-[30%] rounded-t-lg relative c3">
          <div className=" absolute flex flex-col items-center justify-center text-center w-full -top-32 col-name c3">
            <span className="text-lg font-semibold whitespace-nowrap">
              {third.name}
            </span>
            <FaTrophy className="h-16 w-auto text-[#cd7f32]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
