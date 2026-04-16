import friends from "@/data/friends.json";
import { BellRing, Archive, Trash2 } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import QuickCheckIn from "@/components/QuickCheckIn";

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;

  const friend = friends.find((item) => item.id === Number(id));

  if (!friend) {
    notFound();
  }

  const getStatusClass = (status) => {
    if (status === "overdue") {
      return "bg-red-500 text-white";
    }
    if (status === "almost due") {
      return "bg-amber-400 text-white";
    }
    return "bg-[#1F5C4A] text-white";
  };

  const formattedStatus =
    friend.status === "almost due"
      ? "Almost Due"
      : friend.status === "on-track"
        ? "On-Track"
        : "Overdue";

  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={96}
              height={96}
              className="mx-auto rounded-full object-cover"
            />

            <h1 className="mt-5 text-3xl font-bold text-slate-800">
              {friend.name}
            </h1>

            <div className="mt-3">
              <span
                className={`rounded-full px-4 py-1.5 text-sm font-semibold ${getStatusClass(
                  friend.status,
                )}`}
              >
                {formattedStatus}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {friend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium uppercase text-[#1F5C4A]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 text-lg italic text-slate-500">{friend.bio}</p>
            <p className="mt-3 text-base text-slate-500">{friend.email}</p>
          </div>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-lg font-medium text-slate-700 transition hover:bg-slate-50">
            <BellRing size={20} />
            Snooze 2 Weeks
          </button>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-lg font-medium text-slate-700 transition hover:bg-slate-50">
            <Archive size={20} />
            Archive
          </button>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-lg font-medium text-red-500 transition hover:bg-red-50">
            <Trash2 size={20} />
            Delete
          </button>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#1F5C4A]">
                {friend.days_since_contact}
              </h3>
              <p className="mt-3 text-lg text-slate-500">Days Since Contact</p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#1F5C4A]">
                {friend.goal}
              </h3>
              <p className="mt-3 text-lg text-slate-500">Goal (Days)</p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-[#1F5C4A]">
                {friend.next_due_date}
              </h3>
              <p className="mt-3 text-lg text-slate-500">Next Due</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#1F5C4A]">
                Relationship Goal
              </h2>
              <button className="rounded-lg border border-slate-200 px-4 py-2 font-medium text-slate-700">
                Edit
              </button>
            </div>

            <p className="mt-5 text-2xl text-slate-500">
              Connect every{" "}
              <span className="font-bold text-slate-800">
                {friend.goal} days
              </span>
            </p>
          </div>

          <QuickCheckIn friend={friend} />
        </div>
      </div>
    </main>
  );
};

export default FriendDetailsPage;
