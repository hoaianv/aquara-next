import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8">
          <div className="relative w-32 h-20 mx-auto mb-6">
            <div className="w-28 h-16 border-4 border-dashed border-gray-400 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 relative opacity-60">
              <div className="absolute inset-3 bg-gray-300 rounded opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-0.5 bg-red-500 rotate-45"></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full"></div>
            </div>

            <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center animate-pulse">
              <svg
                className="w-2 h-2 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-gray-400 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-red-500 mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sản phẩm không tồn tại
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sản phẩm bạn đang tìm kiếm không tồn tại, đã hết hàng hoặc có thể đã
            được thay thế bởi phiên bản mới. Hãy khám phá các sản phẩm EcoFlow
            khác để tìm giải pháp năng lượng phù hợp nhất cho bạn.
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Tìm sản phẩm khác
          </Link>

          <Link
            href="/lien-he"
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Hỗ trợ khách hàng
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          <p className="font-medium text-emerald-600 mb-1">
            EcoFlow - Năng lượng sạch, Tương lai xanh
          </p>
          <p>Luôn có giải pháp năng lượng phù hợp cho bạn</p>
        </div>
      </div>
    </div>
  );
}
