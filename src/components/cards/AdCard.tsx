"use client";

import "swiper/css";
import "swiper/css/navigation";
import Button from "@/components/ui/button";
import { INewProduct } from "@/interfaces/models/IProduct.interface";
import { useRouter } from "next/navigation";

interface AdCardProps {
  item: INewProduct;
}

const AdCard: React.FC<AdCardProps> = ({ item }) => {
  const router = useRouter();

  return (
    <div
      style={{ backgroundImage: `url(${item.picture})` }}
      className={` w-[380px] h-[480px] bg-cover bg-center rounded-xl px-5 py-7`}
    >
      <div className="h-[106px]">
        <div className="flex flex-col  h-full ">
          <span className="text-[#fa4500] mb-2 text-[14px] font-medium">
            {item?.title}
          </span>
          <span className="mb-1 text-xl font-medium line-clamp-2">
            {item?.name}
          </span>

          <span className="text-[14px] font-medium">{item?.description}</span>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <Button
          text={"Mua ngay"}
          onClick={() => router.push(`/san-pham/${item.url}`)}
          variant={"black"}
        />
      </div>
    </div>
  );
};

export default AdCard;
