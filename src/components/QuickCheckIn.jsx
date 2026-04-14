"use client";

import { Phone, MessageSquare, Video } from "lucide-react";
import { toast } from "sonner";
import { saveTimelineEntry } from "@/lib/timelineStorage";

const QuickCheckIn = ({ friend }) => {
  const handleInteraction = (type) => {
    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

    const newEntry = {
      id: crypto.randomUUID(),
      friendId: friend.id,
      friendName: friend.name,
      type,
      title: `${capitalizedType} with ${friend.name}`,
      date: new Date().toISOString(),
    };

    saveTimelineEntry(newEntry);
    toast.success(`${capitalizedType} with ${friend.name} logged`);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-[#1F5C4A]">Quick Check-In</h2>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <button
          onClick={() => handleInteraction("call")}
          className="rounded-2xl border border-slate-200 p-8 text-center transition hover:bg-slate-50"
        >
          <Phone className="mx-auto text-[#1F5C4A]" size={34} />
          <span className="mt-4 block text-2xl font-medium text-slate-700">
            Call
          </span>
        </button>

        <button
          onClick={() => handleInteraction("text")}
          className="rounded-2xl border border-slate-200 p-8 text-center transition hover:bg-slate-50"
        >
          <MessageSquare className="mx-auto text-[#1F5C4A]" size={34} />
          <span className="mt-4 block text-2xl font-medium text-slate-700">
            Text
          </span>
        </button>

        <button
          onClick={() => handleInteraction("video")}
          className="rounded-2xl border border-slate-200 p-8 text-center transition hover:bg-slate-50"
        >
          <Video className="mx-auto text-[#1F5C4A]" size={34} />
          <span className="mt-4 block text-2xl font-medium text-slate-700">
            Video
          </span>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;
