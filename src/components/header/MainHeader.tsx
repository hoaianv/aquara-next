import { url } from "@/constants/routes";
import { Globe } from "lucide-react";

const MainHeader = () => (
  <div className="h-[40px] bg-[#F5F7FA]  w-full hidden xl:block  ">
    <div className="mx-auto h-full  2xl:max-w-[1680px] px-[120px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
      <div className="grid grid-cols-3 gap-2 text-xs text-[#222222] h-full items-center">
        <div className="col-span-2 flex  gap-5">
          <span className=" ">{url}</span> |
          <span>
            GIẢM GIÁ SỐC & Ưu đãi lên đến 16% | Dòng STREAM - Hệ thống năng
            lượng mặt trời Plug & Play
          </span>
        </div>
        <div className="flex  justify-end gap-1 ">
          <Globe size={18} strokeWidth={1.5} /> Việt Nam (Tiếng Việt / VNĐ)
        </div>
      </div>
    </div>
  </div>
);

export default MainHeader;
