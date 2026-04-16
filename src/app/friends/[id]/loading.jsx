const Loading = () => {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8 animate-pulse">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
        {/* LEFT SIDE */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
            {/* Profile Image */}
            <div className="mx-auto h-24 w-24 rounded-full bg-slate-200" />

            {/* Name */}
            <div className="mx-auto mt-5 h-6 w-40 rounded bg-slate-200" />

            {/* Status */}
            <div className="mx-auto mt-3 h-5 w-24 rounded-full bg-slate-200" />

            {/* Tags */}
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-5 w-16 rounded-full bg-slate-400" />
              <div className="h-5 w-16 rounded-full bg-slate-400" />
              <div className="h-5 w-16 rounded-full bg-slate-400" />
            </div>

            {/* Bio */}
            <div className="mt-5 space-y-2">
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-5/6 rounded bg-slate-200" />
            </div>

            {/* Email */}
            <div className="mx-auto mt-3 h-4 w-48 rounded bg-slate-200" />
          </div>

          {/* Buttons */}
          <div className="h-14 w-full rounded-xl border border-slate-200 bg-white" />
          <div className="h-14 w-full rounded-xl border border-slate-200 bg-white" />
          <div className="h-14 w-full rounded-xl border border-slate-200 bg-white" />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 lg:col-span-2">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="h-32 rounded-2xl border border-slate-100 bg-white" />
            <div className="h-32 rounded-2xl border border-slate-100 bg-white" />
            <div className="h-32 rounded-2xl border border-slate-100 bg-white" />
          </div>

          {/* Relationship Goal */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="h-6 w-48 rounded bg-slate-200" />
              <div className="h-8 w-16 rounded bg-slate-200" />
            </div>

            <div className="mt-5 h-6 w-64 rounded bg-slate-200" />
          </div>

          {/* QuickCheckIn Skeleton */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 space-y-4">
            <div className="h-6 w-40 rounded bg-slate-200" />
            <div className="h-12 w-full rounded-xl bg-slate-200" />
            <div className="h-12 w-full rounded-xl bg-slate-200" />
            <div className="h-12 w-full rounded-xl bg-slate-200" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
