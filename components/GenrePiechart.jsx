import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const GenrePiechart = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-white gap-y-6">
      <p className="text-5xl font-bold">Tu będzie wykres</p>
      <p className="text-3xl font-semibold">Coming soon...</p>
    </div>
  );
};

export default GenrePiechart;
