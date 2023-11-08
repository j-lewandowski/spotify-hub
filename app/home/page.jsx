import PrivateRoute from "@/components/PrivateRoute";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import Platform from "@/components/Platform";
import { getServerSession } from "next-auth";
import GenrePiechart from "@/components/GenrePiechart";

const HomePage = () => {
  return <PrivateRoute>{<HomePageContent />}</PrivateRoute>;
};

const HomePageContent = async () => {
  const session = await getServerSession(OPTIONS);

  const fetchTop = async (type) => {
    // type == 'tracks' or 'artists'
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/me/top/${type}`,
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            cache: "no-cache",
          },
        }
      );
      const resData = await response.json();

      return resData.items;
    } catch (error) {
      console.log(error);
    }
  };

  const topArtists = await fetchTop("artists");
  const topTracks = await fetchTop("tracks");

  return (
    <div className="w-full flex-1 flex flex-col items-center bg-primary">
      <div className="w-full h-full grid grid-cols-2 grid-rows-5 gap-4 p-4">
        <Platform type="artists" data={topArtists.slice(0, 3) || []} />
        <Platform type="tracks" data={topTracks.slice(0, 3) || []} />
        <div className="h-full w-full col-span-2 row-span-3 bg-neutral-800 hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-secondary duration-150">
          <div className="p-4 w-full h-full">
            <GenrePiechart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
