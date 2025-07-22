"use client";

import { useStateStore } from "@/stores/stateStore";
import { bannerKeys } from "@/constants/values.constant";
import { motion } from "framer-motion";
import Image from "next/image";

const BecomePart = () => {
  const { banner } = useStateStore();
  const currentBanner = banner[bannerKeys.bannerBecome];

  // Early return if no adverts
  if (!currentBanner?.advertises?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-10 mx-auto mt-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1680px] sm:px-4 2xl:px-28"
    >
      <div className="mb-4">
        <h2 className=" text-2xl font-semibold">
          Trở thành đối tác của EcoFlow
        </h2>
      </div>
      <div className="flex items-center gap-2 ">
        {currentBanner.advertises.map((item) => (
          <div key={item.id} className="relative  ">
            <Image
              src={item.picture}
              width={item.width}
              height={item.height}
              alt={item.title}
              className=" w-full rounded-lg"
            />
            <div className="absolute top-5 left-4">
              <div className="flex flex-col gap-2">
                <span className="text-white text-xl font-semibold">
                  {item.title}
                </span>
                <span className="text-white text-sm font-normal">
                  {item.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BecomePart;
