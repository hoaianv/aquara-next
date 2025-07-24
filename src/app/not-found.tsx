"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8">
          <div className="relative w-32 h-20 mx-auto mb-6">
            <div className="w-28 h-16 border-4 border-emerald-500 rounded-lg bg-gradient-to-r from-emerald-100 to-blue-100 relative">
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-6 bg-emerald-500 rounded-r"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />{" "}
                </svg>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Thiết bị không tìm thấy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị ngắt kết nối. Hãy
            quay về trung tâm điều khiển chính để khám phá các giải pháp nhà
            thông minh của Aqara.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Về trang chủ
          </Link>

          <Link
            href="/products"
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Sản phẩm Aqara
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
