import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Chi tiết",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
