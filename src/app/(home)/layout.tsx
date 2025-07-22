import { getHeader } from "@/apis/common/layout.apis";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Backdrop } from "@/components/ui/backdrop";
import { domain } from "@/constants/routes";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: "EcoFlow Việt Nam - Giải pháp năng lượng di động",
  description:
    "EcoFlow Việt Nam cung cấp các trạm sạc điện, pin năng lượng mặt trời, thiết bị lưu trữ điện năng tiên tiến cho gia đình, du lịch và công nghiệp.",
  alternates: {
    canonical: domain,
  },
  authors: [{ name: "EcoFlow Việt Nam", url: domain }],
  openGraph: {
    title: "EcoFlow Việt Nam - Giải pháp năng lượng di động",
    description:
      "Khám phá các sản phẩm trạm điện EcoFlow chính hãng tại Việt Nam. Hỗ trợ năng lượng cho mọi nhu cầu từ gia đình đến dã ngoại.",
    url: domain,
    images: [
      {
        url: "/images/ecoflow.png",
        width: 1200,
        height: 630,
        alt: "EcoFlow Việt Nam",
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
