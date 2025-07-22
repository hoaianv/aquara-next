"use client";

import ProductCard from "@/components/cards/ProductCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { CircleChevronRight } from "lucide-react";
import { ICategoryProducts } from "@/interfaces/models/IProduct.interface";
import { urlImage } from "@/constants/routes";
import Link from "next/link";

interface CategoryProductProps {
  data: ICategoryProducts[];
}

const ProductSeries = ({ data }: CategoryProductProps) => {
  return (
    data?.length > 0 &&
    data.map(
      (item, idx) =>
        item.products.length > 0 && (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto h-full 2xl:max-w-[1680px] sm:px-[15px] 2xl:px-[120px] mt-10 xl:max-w-6xl lg:max-w-4xl md:max-w-lg sm:max-w-md max-w-sm">
              <div className="mt-10">
                <div className="mb-4">
                  <span className="text-2xl font-semibold"> {item.title}</span>
                </div>

                {item.banner && (
                  <div className="relative overflow-hidden rounded-md group cursor-pointer">
                    <Image
                      loading="lazy"
                      src={urlImage + item.banner}
                      alt={item.title}
                      width={1680}
                      height={480}
                      className="w-full rounded-md transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:brightness-105"
                      style={{ objectFit: "contain" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                  </div>
                )}

                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                  {item?.products?.length > 0 &&
                    item?.products.map((i, productIdx) => (
                      <ProductCard key={productIdx} item={i} />
                    ))}

                  <div className="flex flex-col justify-between gap-3">
                    <div className="bg-white  p-4 rounded-md h-[300px]">
                      <div className="">
                        <Link
                          href={"/bo-suu-tap/" + item.url}
                          className="flex justify-between items-center gap-2"
                        >
                          <span className="text-base font-medium">
                            {item.title}
                          </span>

                          <CircleChevronRight
                            strokeWidth={1}
                            className="text-[#0A0A0A] shrink-0"
                          />
                        </Link>
                      </div>
                      <div className="flex items-center justify-center mt-5">
                        <Link
                          href={"/bo-suu-tap/" + item.url}
                          className="flex justify-between items-center gap-2"
                        >
                          <Image
                            width={230}
                            height={230}
                            src={urlImage + item.picture}
                            alt={item.title}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="bg-[#e0f3ff] rounded-md h-fit p-4 flex justify-between items-center gap-2">
                      <Link
                        href={"/bo-suu-tap/" + item.url}
                        className="flex justify-between  text-[#0A0A0A] items-center gap-2 text-sm"
                      >
                        <span>Xem tất cả {item.title}</span>
                        <CircleChevronRight
                          strokeWidth={1}
                          className="text-[#0A0A0A] shrink-0"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )
    )
  );
};

export default ProductSeries;
