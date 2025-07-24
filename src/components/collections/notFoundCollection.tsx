import Link from "next/link";

export default function NotFoundCollection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8">
          <div className="relative w-32 h-20 mx-auto mb-6">
            <div className="w-28 h-16 border-4 border-emerald-500 rounded-lg bg-gradient-to-r from-emerald-100 to-blue-100 relative overflow-hidden">
              <div className="absolute inset-2 grid grid-cols-2 gap-1">
                <div className="bg-gradient-to-r from-emerald-400 to-blue-400 rounded opacity-40"></div>
                <div className="bg-gradient-to-r from-blue-400 to-emerald-400 rounded opacity-60"></div>
                <div className="bg-gradient-to-r from-emerald-400 to-blue-400 rounded opacity-50"></div>
                <div className="bg-gradient-to-r from-blue-400 to-emerald-400 rounded opacity-30"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Thay đổi icon sang biểu tượng liên quan đến nhà thông minh hoặc bộ sưu tập trống */}
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" // Icon tủ đồ/kệ trống
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
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Danh mục không tồn tại
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Danh mục sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã được thay
            đổi. Hãy khám phá các danh mục sản phẩm Aqara hiện có để tìm giải
            pháp nhà thông minh phù hợp với nhu cầu của bạn.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
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
            Xem tất cả sản phẩm
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300"
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
          <p className="font-medium text-emerald-600 mb-1">
            Aqara - Ngôi nhà thông minh, cuộc sống tiện nghi
          </p>
          <p>Khám phá giải pháp nhà thông minh toàn diện</p>
        </div>
      </div>
    </div>
  );
}
