import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFoundBlogs() {
  return (
    <div className="min-h-screen   flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8">
          <div className="relative w-32 h-20 mx-auto mb-6">
            <div className="w-28 h-16 border-4 border-purple-500 rounded-lg bg-gradient-to-r from-purple-100 to-indigo-100 relative overflow-hidden">
              <div className="absolute inset-2 grid grid-cols-2 gap-1">
                <div className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded opacity-40"></div>
                <div className="bg-gradient-to-r from-indigo-400 to-purple-400 rounded opacity-60"></div>
                <div className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded opacity-50"></div>
                <div className="bg-gradient-to-r from-indigo-400 to-purple-400 rounded opacity-30"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-xs text-white font-bold">?</span>
            </div>
            <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-gray-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Danh mục tin tức không tồn tại
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Danh mục tin tức bạn đang tìm kiếm không tồn tại hoặc đã được thay
            đổi. Hãy khám phá các danh mục tin tức hiện có để tìm những chủ đề
            và nội dung thú vị phù hợp với sở thích của bạn.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Xem tất cả danh mục
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300"
          >
            <Home size={18} />
            Trang chủ
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          <p className="font-medium text-purple-600 mb-1">
            Danh mục tin tức - Khám phá theo chủ đề
          </p>
          <p>Tìm kiếm nội dung phù hợp với sở thích của bạn</p>
        </div>
      </div>
    </div>
  );
}
