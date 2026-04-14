import { Plus } from "lucide-react";

const summaryData = [
  { id: 1, value: "12", label: "Total Friends" },
  { id: 2, value: "3", label: "On Track" },
  { id: 3, value: "6", label: "Need Attention" },
  { id: 4, value: "12", label: "Interactions This Month" },
];

const Banner = () => {
  return (
    <section className="px-4 pt-16 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-slate-800 sm:text-5xl lg:text-5xl">
            Friends to keep close in your life
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1F5C4A] px-6 py-4 text-lg font-semibold text-white transition hover:opacity-90">
            <Plus size={22} />
            <span>Add a Friend</span>
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {summaryData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-100 bg-white px-6 py-10 text-center shadow-sm"
            >
              <h3 className="text-4xl font-bold text-[#1F5C4A]">
                {item.value}
              </h3>
              <p className="mt-3 text-lg text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-b border-slate-200"></div>
      </div>
    </section>
  );
};

export default Banner;
