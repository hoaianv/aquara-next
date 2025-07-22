import MenuAccount from "@/components/account/menuAccount";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Chi tiết",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="mx-auto py-[30px]  h-full    2xl:max-w-[1280px]  sm:px-[15px] xl:px-[80px] xl:max-w-6xl lg:max-w-4xl md:max-w-lg  sm:max-w-md max-w-sm">
        <div className="grid grid-cols-10 gap-2">
          <MenuAccount />
          {children}
        </div>
      </div>{" "}
    </div>
  );
}
