import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Chi tiết",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="pb-5">{children}</div>;
}
