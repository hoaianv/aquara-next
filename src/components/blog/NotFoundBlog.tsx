import Link from "next/link";

export default function NotFoundBlog() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8">
          <div className="relative w-32 h-20 mx-auto mb-6">
            <div className="w-28 h-16 border-4 border-amber-500 rounded-lg bg-gradient-to-r from-amber-100 to-rose-100 relative overflow-hidden">
              <div className="absolute inset-2 grid grid-cols-2 gap-1">
                <div className="bg-gradient-to-r from-amber-400 to-rose-400 rounded opacity-40"></div>
                <div className="bg-gradient-to-r from-rose-400 to-amber-400 rounded opacity-60"></div>
                <div className="bg-gradient-to-r from-amber-400 to-rose-400 rounded opacity-50"></div>
                <div className="bg-gradient-to-r from-rose-400 to-amber-400 rounded opacity-30"></div>
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bài viết không tồn tại
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. Hãy khám
            phá các bài viết mới nhất trên blog để tìm những nội dung thú vị và
            hữu ích khác.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-rose-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-rose-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            Xem tất cả bài viết
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Về trang chủ
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          <p className="font-medium text-amber-600 mb-1">
            Blog - Chia sẻ kiến thức, Kết nối cộng đồng
          </p>
          <p>Khám phá những câu chuyện và kiến thức bổ ích</p>
        </div>
      </div>
    </div>
  );
}
