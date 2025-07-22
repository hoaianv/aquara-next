"use client";

import { motion } from "framer-motion";
import { IReviewProduct } from "@/interfaces/models/IReviewProduct.interface";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import CardProductReview from "@/components/productReviews/cardProductReview";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
interface ProductReviewsProps {
  data: IReviewProduct[];
}

const ProductReviews = ({ data }: ProductReviewsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=" my-10"
    >
      <div className="mx-auto h-full  2xl:max-w-[1680px] sm:px-[15px] 2xl:px-[120px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
        <div className="mb-3">
          <span className=" text-2xl font-semibold">
            Khách hàng nói về chúng tôi
          </span>
        </div>
        <div className="">
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 8,
                slidesPerGroup: 1,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
                slidesPerGroup: 2,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 16,
                slidesPerGroup: 3,
              },
            }}
            modules={[Navigation]}
            className="mySwiper group "
          >
            {data?.length > 0 &&
              data.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardProductReview item={item} />
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
      </div>
    </motion.div>
  );
};

export default ProductReviews;
