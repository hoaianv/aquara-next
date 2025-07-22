"use client";

import { urlImage } from "@/constants/routes";
import { bannerKeys } from "@/constants/values.constant";
import { useStateStore } from "@/stores/stateStore";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const TwoBannerHome = () => {
  const { banner } = useStateStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=" my-10   "
    >
      <div className="mx-auto h-full  2xl:max-w-[1680px] sm:px-[15px] 2xl:px-[120px] mt-10 xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {banner[bannerKeys.bannerFooter] &&
            banner[bannerKeys.bannerFooter].advertises.length > 0 &&
            banner[bannerKeys.bannerFooter].advertises.map((item) => (
              <Link href={item.link} target={item.target} key={item.id}>
                <div className=" w-full">
                  <Image
                    loading="lazy"
                    width={item.width}
                    height={item.height}
                    src={item.picture}
                    alt={item.title}
                    className="w-full rounded-xl"
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TwoBannerHome;
