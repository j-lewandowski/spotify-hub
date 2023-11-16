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

const ranges = {
  short_term: {
    name: "Last 30 days",
    value: "short_term",
  },
  medium_term: {
    name: "Last 3 months",
    value: "medium_term",
  },
  long_term: {
    name: "All time",
    value: "long_term",
  },
};

const types = {
  artists: {
    name: "Artists",
    value: "artists",
  },
  tracks: {
    name: "Tracks",
    value: "tracks",
  },
};

const Rankings = ({ searchParams }) => {
  const [filter, setFilter] = useState({
    type: types[searchParams.type] || types["artists"],
    range: ranges[searchParams.range] || ranges["short_term"],
  });

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const { accessToken } = await getSession(OPTIONS);

    const response = await fetch(
      `https://api.spotify.com/v1/me/top/${filter.type.value}?time_range=${filter.range.value}&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    );
    const data = await response.json();
    setData(data.items);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-full bg-primary min-h-full px-2 md:px-16 flex flex-col pt-16">
      <Navbutton icon={<FaArrowLeft className="h-4 md:h-6 w-auto" />} />

      <div className="w-full flex items-center justify-between text-white pt-4">
        <p className="font-bold text-lg md:text-3xl flex-1 text-center w-full">
          {filter.type.name} ranking | {filter.range.name}
        </p>
      </div>
      <div className="flex w-full items-center justify-center mt-6">
        <Selector
          fields={ranges}
          filter={filter}
          label="Range"
          type="range"
          setFilter={setFilter}
        />
        <Selector
          fields={types}
          filter={filter}
          label="Type"
          type="type"
          setFilter={setFilter}
        />
      </div>
      {!data || data.length === 0 ? (
        <div className="w-full h-full bg-neutral-800 rounded-lg flex flex-1 flex-col items-center justify-center mt-12 mb-8">
          <span className="text-3xl font-bold text-white">
            No data found...
          </span>
          <span className="text-2xl font-semibold text-white">
            Too little data :(
          </span>
        </div>
      ) : (
        <ul className="w-full flex flex-col items-center justify-center mt-12 gap-y-2 md:gap-y-6">
          {data.map((item, i) => (
            <RankingListItem
              key={item.id}
              data={item}
              index={i + 1}
              type={filter.type.value}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Rankings;
