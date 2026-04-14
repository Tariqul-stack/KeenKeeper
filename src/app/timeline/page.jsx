"use client";

import { useMemo, useState } from "react";
import { Phone, MessageSquare, Video, ListFilter, Trash2 } from "lucide-react";
import { getTimelineEntries } from "@/lib/timelineStorage";

const TimelinePage = () => {
  const [entries, setEntries] = useState(() => getTimelineEntries());
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEntries = useMemo(() => {
    if (filter === "all") return entries;
    return entries.filter((entry) => entry.type === filter);
  }, [entries, filter]);

  const openClearModal = () => {
    setIsModalOpen(true);
  };

  const handleClearTimeline = () => {
    localStorage.removeItem("keenkeeper-timeline");
    setEntries([]);
    setIsModalOpen(false);
  };

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
    <>
      <main className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-extrabold text-slate-800">Timeline</h1>

            <button
              onClick={openClearModal}
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-600 transition-all duration-200 hover:bg-red-100 hover:shadow-sm"
            >
              <Trash2 size={16} />
              Clear Timeline
            </button>
          </div>

          <div className="mt-6 flex w-fit flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <button
              onClick={() => setFilter("all")}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition-all duration-200 ${
                filter === "all"
                  ? "bg-[#1F5C4A] text-white shadow-sm"
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
                  ? "bg-[#1F5C4A] text-white shadow-sm"
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
                  ? "bg-[#1F5C4A] text-white shadow-sm"
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
                  ? "bg-[#1F5C4A] text-white shadow-sm"
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Trash2 className="text-red-500" size={22} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800">
                  Clear Timeline?
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-500">
                  This will remove all saved interaction history from your
                  timeline. This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                onClick={handleClearTimeline}
                className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
              >
                Yes, Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TimelinePage;
