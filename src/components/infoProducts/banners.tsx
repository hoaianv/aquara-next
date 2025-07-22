"use client";
import { useStateStore } from "@/stores/stateStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";
import { bannerKeys } from "@/constants/values.constant";

const Banners = () => {
  const { banner } = useStateStore();

  return (
    banner[bannerKeys.bannerPageInfoProduct] &&
    banner[bannerKeys.bannerPageInfoProduct]?.advertises?.length > 0 && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="my-5">
          <Swiper slidesPerView={1} className=" ">
            {banner[bannerKeys.bannerPageInfoProduct]?.advertises?.map(
              (item) => (
                <SwiperSlide className="w-full  " key={item.id}>
                  <Image
                    className="rounded-lg"
                    src={item.picture}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </motion.div>
    )
  );
};

export default Banners;
