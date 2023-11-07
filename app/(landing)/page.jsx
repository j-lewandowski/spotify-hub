import { FaChartColumn, FaRankingStar, FaSpotify } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-full flex-1 bg-primary flex flex-col items-center md:justify-center justify-start pt-32 md:pt-0">
      <div className="text-white flex flex-col items-center justify-center gap-y-4 px-4">
        <p className="md:text-7xl text-2xl font-extrabold">
          Stats for <span className="text-gradient">Spotify</span>
        </p>
        <p className="md:text-2xl text-sm font-semibold">
          Check your rankings and statistics!
        </p>
      </div>

      <div className="flex flex-row items-center justify-center gap-x-4 mt-16">
        <div className="h-20 w-20 md:h-36 md:w-36 bg-white rounded-full text-black flex items-center justify-center">
          <FaChartColumn className="md:h-16 h-12 w-auto" />
        </div>
        <div className="h-20 w-20 md:h-36 md:w-36 bg-white rounded-full text-black flex items-center justify-center ">
          <FaSpotify className="md:h-16 h-12 w-auto text-gradient" />
        </div>
        <div className="h-20 w-20 md:h-36 md:w-36 bg-white rounded-full text-black flex items-center justify-center ">
          <FaRankingStar className="md:h-16 h-12 w-auto" />
        </div>
      </div>
    </div>
  );
}
