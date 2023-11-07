import PrivateRoute from "@/components/PrivateRoute";
import { getServerSession } from "next-auth";
import { OPTIONS } from "../api/auth/[...nextauth]/route";

const HomePage = async () => {
  return <PrivateRoute>{<HomePageContent />}</PrivateRoute>;
};

const HomePageContent = async () => {
  const session = await getServerSession(OPTIONS);

  const fetchTop = async (type) => {
    // type == 'tracks' or 'artists'
    const response = await fetch(`https://api.spotify.com/v1/me/top/${type}`, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        cache: "no-cache",
      },
    });
    const data = await response.json();
    return await data.items;
  };

  const topArtists = await fetchTop("artists");
  const topTracks = await fetchTop("tracks");

  return (
    <div className="w-full flex-1 flex flex-col items-center bg-primary">
      <div className="w-full h-full grid grid-cols-2 grid-rows-5 gap-4 p-4">
        {/* <div className="w-full bg-neutral-800 flex flex-col row-span-2 gap-y-2 items-center justify-center px-4 rounded-lg text-white hover:cursor-pointer hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-secondary duration-150">
          {topArtists.slice(0, 5).map((artist, i) => (
            <div key={artist.name} className="w-full text-3xl">
              <span>{i + 1} - </span>
              <span className="">{artist.name}</span>
            </div>
          ))}
        </div> */}
        <div className="w-full bg-neutral-800 flex flex-col row-span-2 gap-y-2 items-center justify-center px-4 rounded-lg text-white hover:cursor-pointer hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-secondary duration-150">
          <div className="w-12 bg-secondary min-h-0 max-h-[50%] duration-150 animate-slideUp delay-400"></div>
          <div className="w-12 bg-secondary min-h-0 max-h-[70%] duration-150 animate-slideUp delay-600"></div>
          <div className="w-12 bg-secondary min-h-0 max-h-[30%] duration-150 animate-slideUp delay-200"></div>
        </div>
        <div className="w-full bg-neutral-800 flex flex-col row-span-2   gap-y-2 items-center justify-center px-4 rounded-lg text-white hover:cursor-pointer hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-secondary duration-150">
          {topTracks.slice(0, 5).map((track, i) => (
            <div key={track.name} className="w-full text-3xl">
              <span>{i + 1} - </span>
              <span className="">{track.name}</span>
            </div>
          ))}
        </div>
        <div className="h-full w-full col-span-2 row-span-3 bg-neutral-800 hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-secondary duration-150"></div>
      </div>
    </div>
  );
};

export default HomePage;
