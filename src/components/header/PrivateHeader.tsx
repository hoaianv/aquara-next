import { Lock, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const PrivateHeader = () => {
  return (
    <div className="bg-white p-5 border-b border-[#dedede]">
      <div className="mx-auto h-full 2xl:max-w-[1160px] sm:px-[15px] 2xl:px-[120px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
        <div className=" flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={"/images/logo-black.png"}
              width={172}
              height={15}
              alt="logo private"
            />
          </Link>
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center gap-1">
              <div className="w-6 h-6 bg-[#9D9D9D] text-white flex items-center justify-center rounded-md">
                <Lock size={20} strokeWidth={1.25} />
              </div>
              <span className="text-xs text-[#9D9D9D]">Bảo mật</span>
            </div>

            <Link href={"/gio-hang"}>
              <div className=" w-6 h-6 text-[#2790e1] flex items-center justify-center rounded-md">
                <ShoppingBasket size={25} strokeWidth={1.25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
PrivateHeader.displayName = "PrivateHeader";
