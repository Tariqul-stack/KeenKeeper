"use client";

import { useEffect, useMemo, useState } from "react";
import { Phone, MessageSquare, Video } from "lucide-react";
import { getTimelineEntries } from "@/lib/timelineStorage";

const TimelinePage = () => {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedEntries = getTimelineEntries();
    setEntries(storedEntries);
  }, []);

  const filteredEntries = useMemo(() => {
    if (filter === "all") return entries;
    return entries.filter((entry) => entry.type === filter);
  }, [entries, filter]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getIcon = (type) => {
    if (type === "call") {
      return <Phone className="text-[#1F5C4A]" size={28} />;
    }
    if (type === "text") {
      return <MessageSquare className="text-[#1F5C4A]" size={28} />;
    }
    return <Video className="text-[#1F5C4A]" size={28} />;
  };

  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-extrabold text-slate-800">Timeline</h1>

        <div className="mt-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full max-w-xs rounded-xl border border-slate-200 bg-white px-4 py-3 text-lg text-slate-600 outline-none"
          >
            <option value="all">All Interactions</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="mt-8 space-y-4">
          {filteredEntries.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-lg text-slate-500 shadow-sm">
              No timeline entries found.
            </div>
          ) : (
            filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm"
              >
                <div>{getIcon(entry.type)}</div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#1F5C4A]">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-lg text-slate-500">
                    {formatDate(entry.date)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default TimelinePage;
