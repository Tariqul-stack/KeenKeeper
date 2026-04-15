import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      {/* Badge */}
      <span className="inline-block text-xs font-medium tracking-widest uppercase text-pink-700 bg-pink-50 px-4 py-1.5 rounded-full mb-8">
        Error
      </span>

      {/* 404 number */}
      <div className="flex items-center gap-1 text-[96px] font-medium leading-none tracking-tighter text-gray-900 mb-2">
        <span>4</span>
        <span className="w-22 h-22 rounded-full border-[3px] border-gray-200 bg-gray-100 flex items-center justify-center text-[72px]">
          0
        </span>
        <span>4</span>
      </div>

      {/* Dots */}
      <div className="flex gap-2 my-5">
        <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
      </div>

      {/* Text */}
      <h1 className="text-2xl font-medium text-gray-900 mb-3">
        Page not found
      </h1>
      <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-8">
        The page you're looking for doesn't exist or has been moved to a
        different location.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Go home
        </Link>
        <Link
          href="javascript:history.back()"
          className="px-6 py-2.5 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
