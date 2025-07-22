import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thông tin sản phẩm",
  description: "Chi tiết",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
