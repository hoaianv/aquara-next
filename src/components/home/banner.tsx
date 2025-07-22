"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useStateStore } from "@/stores/stateStore";
import { bannerKeys } from "@/constants/values.constant";
import Link from "next/link";
const Banner = () => {
  const { banner } = useStateStore();

  return (
    banner[bannerKeys.bannerMainHome] &&
    banner[bannerKeys.bannerMainHome].advertises.length > 0 && (
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {banner[bannerKeys.bannerMainHome].advertises.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={item.link} target={item.target}>
              <div className="relative w-full  h-[350px]   lg:h-[650px]">
                <Image
                  src={item.picture}
                  alt={item.title}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};

export default Banner;
