import { getHeader } from "@/apis/common/layout.apis";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Backdrop } from "@/components/ui/backdrop";
import { domain } from "@/constants/routes";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: "Aqara Việt Nam - Giải pháp nhà thông minh toàn diện",
  description:
    "Aqara Việt Nam cung cấp các thiết bị nhà thông minh, cảm biến, khóa cửa, công tắc và giải pháp tự động hóa tiên tiến cho ngôi nhà của bạn.",
  alternates: {
    canonical: domain,
  },
  authors: [{ name: "Aqara Việt Nam", url: domain }],
  openGraph: {
    title: "Aqara Việt Nam - Giải pháp nhà thông minh toàn diện",
    description:
      "Khám phá các sản phẩm và giải pháp nhà thông minh Aqara chính hãng tại Việt Nam. Biến ngôi nhà bạn thành không gian sống tiện nghi và hiện đại.",
    url: domain,
    images: [
      {
        url: "/images/aqara.png", // Đã đổi tên ảnh thành aqara.png
        width: 1200,
        height: 630,
        alt: "Aqara Việt Nam",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getHeader();

  return (
    <div className="bg-[#f8f8f8]">
      <Header data={data} />
      <Backdrop />
      {children}

      <Footer />
    </div>
  );
}
