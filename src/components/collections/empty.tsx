import Link from "next/link";

export default function Empty() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6">
          <div className="relative w-20 h-20 mx-auto">
            <div className="w-16 h-16 border-3 border-emerald-400 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50 relative">
              <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-4 bg-emerald-400 rounded-r"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-emerald-300 to-blue-300 rounded opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                </svg>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Chưa có sản phẩm nào
        </h3>
        <p className="text-gray-500 mb-6">
          Hiện tại chưa có sản phẩm nào trong danh mục này. Hãy khám phá các
          giải pháp năng lượng sạch khác của EcoFlow.
        </p>
        <Link href={"/"}>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
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
            Trang chủ
          </button>
        </Link>
      </div>
    </div>
  );
}
