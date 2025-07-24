"use client";

import Image from "next/image";

import { useStateStore } from "@/stores/stateStore";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface AdvertiseProps {
  keyName: string;
}

const Advertise = ({ keyName }: AdvertiseProps) => {
  const router = useRouter();
  const { banner } = useStateStore();

  const currentBanner = banner[keyName];
  if (!currentBanner?.advertises?.length) return null;
  const { advertises } = currentBanner;
  const [firstAd] = advertises;
  return (
    <div className="relative ">
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
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center  ">
        <span className="text-5xl font-extrabold text-white">
          {firstAd.title}
        </span>
        <span className="text-white font-medium my-5">
          {firstAd.description}
        </span>
        <Button
          propClassName={"text-white "}
          variant="transparent"
          onClick={() => router.push(`${firstAd.link}`)}
          text="Learn More"
        />
      </div>
    </div>
  );
};

export default Advertise;
