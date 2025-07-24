import { Database, FileText, Home } from "lucide-react";
import Link from "next/link";

export default function Empty() {
  return (
    <div className="p-6 bg-white rounded-lg my-3">
      <div className="flex flex-col items-center justify-center py-8">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-6">
            <div className="relative w-20 h-20 mx-auto">
              <div className="w-16 h-16 border-3 border-emerald-400 rounded-xl bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative flex items-center justify-center shadow-lg">
                <div className="absolute inset-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-lg opacity-40"></div>
                <FileText
                  size={28}
                  className="text-emerald-600 relative z-10"
                  strokeWidth={1.25}
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-3">
            Tài liệu đang được cập nhật
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Chúng tôi đang hoàn thiện tài liệu kỹ thuật cho sản phẩm này.
            <br />
            Khám phá catalog để tìm hiểu thêm về giải pháp nhà thông minh của
            Aqara.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={"/"}>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                <Home strokeWidth={1.25} size={18} />
                Trang chủ
              </button>
            </Link>

            <Link href={"/lien-he"}>
              <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Liên hệ hỗ trợ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
