"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, useSession } from "next-auth/react";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import Navbutton from "@/components/Navbutton";
import { FaArrowLeft } from "react-icons/fa6";
import RankingListItem from "@/components/RankingListItem";
import Selector from "@/components/Selector";
import Spinner from "../loading";

// @TODO
// Fix range and type selector styles

const Rankings = ({ searchParams }) => {
  const [type, setType] = useState(searchParams.type || "tracks");
  const [range, setRange] = useState(searchParams.range || "medium");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const { accessToken } = await getSession(OPTIONS);

    const response = await fetch(
      `https://api.spotify.com/v1/me/top/${type}?time_range=${range}&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    setData(data.items);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const rangeName = {
    short_term: "Last 30 days",
    medium_term: "Last 3 months",
    long_term: "All time",
  };

  return (
    <div className="w-full bg-primary min-h-full px-2 md:px-16 flex flex-col pt-16">
      <div className="w-full flex items-center justify-between text-white pt-4">
        <Navbutton icon={<FaArrowLeft className="h-4 md:h-6 w-auto" />} />
        <p className="font-bold text-lg md:text-3xl flex-1 text-center">
          {type[0].toUpperCase() + type.slice(1)} ranking | {rangeName[range]}
        </p>
        <div className="flex flex-col">
          <Selector
            fieldNames={["Last 30 days", "Last 3 months", "All time"]}
            fieldValues={["short_term", "medium_term", "long_term"]}
            type={"Range"}
            currState={range}
            onChange={setRange}
          />
          <Selector
            fieldNames={["Artists", "Tracks"]}
            fieldValues={["artists", "tracks"]}
            type={"Type"}
            currState={type}
            onChange={setType}
          />
        </div>
      </div>
      <ul className="w-full flex flex-col items-center justify-center mt-12 gap-y-2 md:gap-y-6">
        {data.map((item, i) => (
          <RankingListItem
            key={item.id}
            data={item}
            index={i + 1}
            type={type}
          />
        ))}
      </ul>
    </div>
  );
};

export default Rankings;
