import { CONST_VALUES } from "@/constants/values.constant";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(CONST_VALUES.TOKEN)?.value;

  // 1. Nếu đang ở trang đăng nhập
  if (pathname.startsWith("/dang-nhap")) {
    // Nếu đã có token (đã đăng nhập), chuyển hướng đến trang tài khoản
    if (token) {
      return NextResponse.redirect(new URL("/tai-khoan", request.url));
    }
    // Nếu chưa có token, cho phép truy cập trang đăng nhập
    return NextResponse.next();
  }

  // 2. Các route yêu cầu xác thực
  const protectedRoutes = ["/tai-khoan", "/gio-hang", "/dat-hang"];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Nếu chưa có token (chưa đăng nhập), chuyển hướng đến trang đăng nhập
    if (!token) {
      return NextResponse.redirect(new URL("/dang-nhap", request.url));
    }
    // Nếu đã có token, cho phép truy cập
    return NextResponse.next();
  }

  // 3. Các route còn lại → không can thiệp
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dang-nhap",
    "/tai-khoan/:path*",
    "/gio-hang/:path*",
    "/dat-hang/:path*",
  ],
};
