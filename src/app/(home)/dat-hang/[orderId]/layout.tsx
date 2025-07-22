import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đặt hàng",
  description: "Chi tiết",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className=" bg-white">{children}</div>;
}
