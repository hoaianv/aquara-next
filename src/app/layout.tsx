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
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description:
    "Trang bạn đang tìm kiếm không tồn tại. Vui lòng kiểm tra lại URL hoặc quay lại trang chủ để tiếp tục khám phá các sản phẩm và giải pháp nhà thông minh của Aqara.",
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WLP6LX79');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLP6LX79"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
