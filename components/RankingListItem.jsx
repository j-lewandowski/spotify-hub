import Link from "next/link";
const RankingListItem = ({ data, index, type }) => {
  return (
    <div className="w-full p-4 bg-neutral-800 rounded-lg flex items-center justify-between px-2 md:px-8 space-x-2 md:space-x-0">
      <Link href={data.external_urls.spotify} className="w-fit h-fit">
        <img
          src={
            type === "artists" ? data.images[0].url : data.album.images[0].url
          }
          className="w-16 md:w-32 h-auto rounded-lg hover:scale-110 duration-150 hover:cursor-pointer"
          alt="ranking image"
        />
      </Link>
      <Link
        href={data.external_urls.spotify}
        className="text-white font-semibold text-md md:text-3xl flex-1 text-center hover:text-secondary hover:cursor-pointer transition-colors duration-150"
      >
        {data.name}
      </Link>
      <p className="text-white font-semibold text-md md:text-3xl">{index}</p>
    </div>
  );
};

export default RankingListItem;
