"use client";

import Image from "next/image";
import Link from "next/link";
import { IAdvertise } from "@/interfaces/models/IAdvertise.interface";

interface AdvertiseProps {
  item: IAdvertise;
}

const ItemAdvertise = ({ item }: AdvertiseProps) => {
  if (!item) return null;
  return (
    <div className="relative ">
      <Link href={item.link} target={item.target}>
        {item.type === "image" ? (
          <Image
            src={item.picture}
            alt={item.title}
            width={item.width}
            height={item.height}
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
            <source src={item.picture} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Link>
      <div className="absolute text-center top-1/3 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center  ">
        <span className="text-5xl font-extrabold text-white">{item.title}</span>
        <span className="text-white font-medium my-5">{item.description}</span>
      </div>
    </div>
  );
};

export default ItemAdvertise;
