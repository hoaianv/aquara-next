"use client";
import { urlImage } from "@/constants/routes";
import { bannerKeys } from "@/constants/values.constant";
import { useStateStore } from "@/stores/stateStore";
import Image from "next/image";
import Link from "next/link";

const PromotionBar = () => {
  const { banner } = useStateStore();

  return (
    banner[bannerKeys.bannerHeaderHome] &&
    banner[bannerKeys.bannerHeaderHome].quantity === 1 &&
    banner[bannerKeys.bannerHeaderHome].advertises.length === 1 && (
      <div className="relative h-[50px] w-full">
        <Link
          href={banner[bannerKeys.bannerHeaderHome].advertises[0].link}
          target={banner[bannerKeys.bannerHeaderHome].advertises[0].target}
        >
          <Image
            style={{
              width: "100%",
            }}
            priority
            src={banner[bannerKeys.bannerHeaderHome].advertises[0].picture}
            alt={banner[bannerKeys.bannerHeaderHome].advertises[0].title}
            fill
            quality={100}
            className="object-cover "
          />
        </Link>
      </div>
    )
  );
};

export default PromotionBar;
