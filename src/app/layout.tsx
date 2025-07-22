import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { getMe } from "@/apis/common/auth.apis";
import { AuthInitializer } from "@/stores/AuthInitializer";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getAll } from "@/apis/models/cart.apis";
import { CartInitializer } from "@/stores/CartInitializer";
import { BannerInitializer } from "@/stores/BannerInitializer";
import { getAllBanner } from "@/apis/models/advertise.apis";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description:
    "Trang bạn đang tìm kiếm không tồn tại. Vui lòng kiểm tra lại URL hoặc quay lại trang chủ để tiếp tục khám phá các sản phẩm và giải pháp năng lượng của EcoFlow.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const meResponse = await getMe();

  const cart = await getAll();
  const banner = await getAllBanner();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <ProgressBar />
        <AuthInitializer
          user={
            meResponse?.error_code === 200 ? meResponse?.data ?? null : null
          }
        />
        <BannerInitializer
          data={banner?.error_code === 200 ? banner?.data ?? null : null}
        />

        <CartInitializer
          data={cart?.error_code === 200 ? cart?.data ?? null : null}
        />

        {children}
      </body>
    </html>
  );
}
