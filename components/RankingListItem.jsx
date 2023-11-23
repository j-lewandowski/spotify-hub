import Link from "next/link";
import { TbAward } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
const RankingListItem = ({ data, index, type }) => {
  const numStyles =
    index === 1
      ? "text-[#d4af37]"
      : index === 2
      ? "text-[#c0c0c0]"
      : "text-[#cd7f32]";

  return (
    <div className="w-full p-4 bg-neutral-800 rounded-lg flex items-center justify-between px-6 md:px-8 space-x-2 md:space-x-0">
      <Link href={data.external_urls.spotify} className="w-fit h-fit">
        <img
          src={data.images ? data.images[0].url : data.album.images[0].url}
          className="w-16 md:w-32 h-auto rounded-lg hover:scale-110 duration-150 hover:cursor-pointer"
          alt="ranking image"
        />
      </Link>
      <Link
        href={data.external_urls.spotify}
        className="text-white font-semibold text-md md:text-3xl flex-1  text-center hover:text-secondary hover:cursor-pointer transition-colors duration-150"
      >
        {data.name}
      </Link>
      <p
        className={twMerge(
          `font-semibold text-md md:text-3xl relative flex items-center w-fit`,
          index <= 3 ? numStyles : "text-white"
        )}
      >
        <TbAward className="h-12 w-12"></TbAward>
        <div className=" ml-3">{index}</div>{" "}
      </p>
    </div>
  );
};

export default RankingListItem;
