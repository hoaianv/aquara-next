"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import AdCard from "@/components/cards/AdCard";
import { INewProduct } from "@/interfaces/models/IProduct.interface";
interface NewProductProps {
  data: INewProduct[];
}

const NewProduct = ({ data }: NewProductProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=" mt-10"
    >
      <div className="mx-auto h-full  2xl:max-w-[1680px] sm:px-[15px] 2xl:px-[120px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
        <h2 className="text-3xl font-medium  text-[#03060B]">New Products</h2>
      </div>
      <div className="mt-5">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          slidesPerView={"auto"}
          spaceBetween={20}
          modules={[Navigation]}
          className="mySwiper group "
        >
          {data?.length > 0 &&
            data.map((item) => (
              <SwiperSlide className="!w-[380px] h-[480px] " key={item.id}>
                <AdCard item={item} />
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
    </motion.div>
  );
};

export default NewProduct;
