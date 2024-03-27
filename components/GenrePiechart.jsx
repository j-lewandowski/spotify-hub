"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GenrePiechart = ({ data }) => {
  const chartContainer = useRef(null);

  const genresCount = {};
  console.log(data);

  // Przejdź przez wszystkie obiekty i zlicz wystąpienia gatunków
  data.forEach((obj) => {
    obj.genres.forEach((genre) => {
      if (genresCount[genre]) {
        genresCount[genre]++;
      } else {
        genresCount[genre] = 1;
      }
    });
  });

  const uniqueGenres = Object.keys(genresCount).map((genre) => ({
    genre,
    count: genresCount[genre],
  }));

  console.log(uniqueGenres);

  useEffect(() => {
    const chartData = {
      labels: uniqueGenres.map((gen) => gen.genre),
      datasets: [
        {
          label: "Popularity",
          data: uniqueGenres.map((gen) => gen.count),
          backgroundColor: uniqueGenres.map(
            (gen) => "#" + Math.floor(Math.random() * 16777215).toString(16)
          ),
          hoverOffset: 4,
        },
      ],
    };

    const chartConfig = {
      type: "pie",
      data: chartData,
    };

    const ctx = chartContainer.current.getContext("2d");
    const myChart = new Chart(ctx, chartConfig);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-white gap-y-6">
      {/* <p className="text-2xl md:text-5xl font-bold">Tu będzie wykres</p>
      <p className="text-xl md:text-3xl font-semibold">Coming soon...</p> */}
      <canvas ref={chartContainer} />
    </div>
  );
};

export default GenrePiechart;
