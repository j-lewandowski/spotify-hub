import { FaSpotify } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-primary">
      <FaSpotify className="animate-pulse text-secondary h-64 w-auto" />
      <span className="text-white mt-8 text-5xl font-semibold">Loading...</span>
    </div>
  );
};

export default Spinner;
