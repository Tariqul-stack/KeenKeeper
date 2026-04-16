const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-[#1F5C4A]" />
      <p className="text-slate-500 text-sm">Loading friend details...</p>
    </div>
  );
};

export default Loading;
