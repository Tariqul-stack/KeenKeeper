"use client";

import { useMemo, useState } from "react";
import { Phone, MessageSquare, Video, ListFilter } from "lucide-react";
import { getTimelineEntries } from "@/lib/timelineStorage";

const TimelinePage = () => {
  const [entries] = useState(() => getTimelineEntries());
  const [filter, setFilter] = useState("all");

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

        <div className="mt-6 flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm w-fit">
          <button
            onClick={() => setFilter("all")}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition-all duration-200 ${
              filter === "all"
                ? "bg-[#1F5C4A] text-white shadow-[0_8px_24px_rgba(31,92,74,0.18)]"
                : "bg-transparent text-slate-600 hover:bg-slate-100"
            }`}
          >
            <ListFilter size={18} />
            All
          </button>

          <button
            onClick={() => setFilter("call")}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition-all duration-200 ${
              filter === "call"
                ? "bg-[#1F5C4A] text-white shadow-[0_8px_24px_rgba(31,92,74,0.18)]"
                : "bg-transparent text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Phone size={18} />
            Call
          </button>

          <button
            onClick={() => setFilter("text")}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition-all duration-200 ${
              filter === "text"
                ? "bg-[#1F5C4A] text-white shadow-[0_8px_24px_rgba(31,92,74,0.18)]"
                : "bg-transparent text-slate-600 hover:bg-slate-100"
            }`}
          >
            <MessageSquare size={18} />
            Text
          </button>

          <button
            onClick={() => setFilter("video")}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition-all duration-200 ${
              filter === "video"
                ? "bg-[#1F5C4A] text-white shadow-[0_8px_24px_rgba(31,92,74,0.18)]"
                : "bg-transparent text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Video size={18} />
            Video
          </button>
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
