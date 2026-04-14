"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#7C3AED", "#1F5C4A", "#35A867"];

const InteractionPieChart = ({ entries }) => {
  const callCount = entries.filter((entry) => entry.type === "call").length;
  const textCount = entries.filter((entry) => entry.type === "text").length;
  const videoCount = entries.filter((entry) => entry.type === "video").length;

  const chartData = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  const totalInteractions = callCount + textCount + videoCount;

  if (totalInteractions === 0) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#1F5C4A]">
          By Interaction Type
        </h2>
        <div className="mt-8 flex h-[300px] items-center justify-center rounded-2xl border border-dashed border-slate-200 text-lg text-slate-500">
          No interaction data available yet.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#1F5C4A]">
        By Interaction Type
      </h2>

      <div className="mt-8 h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={120}
              paddingAngle={6}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InteractionPieChart;
