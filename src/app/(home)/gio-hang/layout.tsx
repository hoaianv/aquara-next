import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giỏ hàng",
  description: "Chi tiết",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
