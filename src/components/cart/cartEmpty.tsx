import Link from "next/link";

export default function CartEmpty() {
  return (
    <div className="col-span-6    rounded-lg">
      <div className="h-full bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center px-4">
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
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.7-4L4.3 5.4c-.4-.9-.9-1.4-2.1-1.4H.5c-.2 0-.5.2-.5.5s.3.5.5.5h1.7c.3 0 .6.2.7.4l.7 2.2L6.1 13h9.3c.7 0 1.2-.4 1.4-1.2l3.2-6.9c.2-.5.1-1-.3-1.4s-.9-.4-1.4-.2L16.2 5l-2.4 5H6.2L4.7 2.5c-.1-.2-.2-.4-.4-.5-.3-.3-.7-.3-1.1-.2L.5 4.5c-.3.1-.5.4-.5.7 0 .2.1.4.3.5L4 12h14l-3.2 7H7.7c-.5 0-.9-.3-1.2-.7-.4-.4-.5-.9-.3-1.3l.3-.6z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4">
              Oops!
            </h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Giỏ hàng đang trống!
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Có vẻ như bạn chưa thêm sản phẩm nào vào giỏ hàng. Hãy khám phá
              các sản phẩm tuyệt vời của chúng tôi để lấp đầy giỏ hàng nhé!
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
              Khám phá sản phẩm
            </Link>
          </div>

          <div className="text-sm text-gray-500">
            <p className="font-medium text-emerald-600 mb-1">
              Mua sắm vui vẻ tại cửa hàng của chúng tôi!
            </p>
            <p>Tìm kiếm những món đồ yêu thích của bạn ngay bây giờ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
