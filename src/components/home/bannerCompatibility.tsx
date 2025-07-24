"use client";

import Image from "next/image";

import { useStateStore } from "@/stores/stateStore";
import { bannerKeys } from "@/constants/values.constant";
import Link from "next/link";

const BannerCompatibility = () => {
  const { banner } = useStateStore();

  const currentBanner = banner[bannerKeys.bannerCompatibility];
  if (!currentBanner?.advertises?.length) return null;
  const { advertises } = currentBanner;
  const [firstAd] = advertises;
  return (
    <div className=" bg-white p-1">
      <div className="mx-auto h-full  my-[60px]  2xl:max-w-[1680px] sm:px-[15px] 2xl:px-[120px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
        <div className="text-center ">
          <span className="font-semibold text-5xl">{firstAd.title}</span>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <Link href={firstAd.link} target={firstAd.target}>
            {firstAd.type === "image" ? (
              <Image
                src={firstAd.picture}
                alt={firstAd.title}
                width={firstAd.width}
                height={firstAd.height}
              />
            ) : (
              <video
                className="videoBackgroundFile w-full h-full"
                autoPlay
                muted
                loop
                playsInline
                data-autoplay="true"
              >
                <source src={firstAd.picture} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerCompatibility;
