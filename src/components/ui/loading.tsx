const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-xl mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 3L4 14h7v7l9-11h-7V3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-emerald-600">EcoFlow</h1>
        </div>

        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-700">Ecoflow</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">Đang tải...</p>
      </div>
    </div>
  );
};

export default Loading;
