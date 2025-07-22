"use client";
import React from "react";

import { IReviewProduct } from "@/interfaces/models/IReviewProduct.interface";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductReviewProps {
  item: IReviewProduct;
}

export default function CardProductReview({ item }: ProductReviewProps) {
  return (
    <div className="   bg-white rounded-lg  w-full h-[400px] border  relative">
      <Image
        loading="lazy"
        src={item.reviewImages[0]}
        alt={item.productName}
        width={270}
        height={400}
        className="object-cover w-full h-full rounded-lg "
      />

      <div className="w-[100px] rounded-lg h-[130px] bg-white absolute top-3 right-3 flex flex-col items-center justify-center">
        <div className="w-[100px] h-[100px] shrink-0">
          <Image
            src={item.picture}
            alt={item.productName}
            width={100}
            height={100}
            loading="lazy"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="text-center ">
          <Link
            href={`/san-pham/${item.productUrl}`}
            className=" w-full h-full text-[11px] text-[#2673ff] flex items-center gap-1 "
          >
            Mua tương tự
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-3 left-2 ">
        {[...Array(item?.star)].map((_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>
    </div>
  );
}
