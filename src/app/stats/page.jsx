"use client";

import { useState } from "react";
import InteractionPieChart from "@/components/InteractionPieChart";
import { getTimelineEntries } from "@/lib/timelineStorage";

const StatsPage = () => {
  const [entries] = useState(() => getTimelineEntries());

  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-extrabold text-slate-800">
          Friendship Analytics
        </h1>

        <div className="mt-8">
          <InteractionPieChart entries={entries} />
        </div>
      </div>
    </main>
  );
};

export default StatsPage;
