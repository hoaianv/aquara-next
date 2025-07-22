"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ICategory } from "@/interfaces/models/IProductsCategories.interface";
import { urlImage } from "@/constants/routes";
import "swiper/css";
import "swiper/css/navigation";
interface CategoryProps {
  data: ICategory[];
}

const Brand = ({ data }: CategoryProps) => {
  return (
    <div className="mx-auto h-full  2xl:max-w-[1680px] sm:px-[15px] 2xl:px-[120px]  mt-10 xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        slidesPerView={9}
        breakpoints={{
          0: {
            slidesPerView: 4,
            spaceBetween: 8,
            slidesPerGroup: 2,
          },
          480: {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesPerGroup: 3,
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 12,
            slidesPerGroup: 4,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 14,
            slidesPerGroup: 5,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 16,
            slidesPerGroup: 6,
          },
          1280: {
            slidesPerView: 9,
            spaceBetween: 18,
            slidesPerGroup: 7,
          },
        }}
        modules={[Navigation]}
        className="mySwiper group "
      >
        {data?.length > 0 &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href={"/bo-suu-tap/" + item.url}>
                <div className="     text-center ">
                  <div className="flex w-[150px] h-[70px] justify-center">
                    <Image
                      loading="lazy"
                      src={urlImage + item?.picture}
                      alt={item?.title}
                      width={70}
                      height={70}
                    />
                  </div>
                  <span className="font-medium text-xs line-clamp-1">
                    {item?.title}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        <div className="bg-gray-300/50 rounded-full  text-white hidden group-hover:flex  items-center justify-center  w-12 h-12 prev absolute top-1/2 -translate-y-1/2 left-0 z-20">
          <ArrowLeft />
        </div>

        <div className="bg-gray-300/50 rounded-full  text-white hidden group-hover:flex  items-center justify-center w-12 h-12 next absolute top-1/2 -translate-y-1/2 right-0 z-20">
          <ArrowRight />
        </div>
      </Swiper>
    </div>
  );
};

export default Brand;
