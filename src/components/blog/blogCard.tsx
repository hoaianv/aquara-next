"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IBlogCard } from "@/interfaces/models/IBlog.interface";

interface BlogProps {
  blog: IBlogCard;
}

export default function BlogCard({ blog }: BlogProps) {
  return (
    <div className="w-full">
      <Link href={`/tin-tuc/${blog.slug}`} passHref>
        <div className="overflow-hidden rounded-xl">
          <Image
            loading="lazy"
            src={blog.picture || "/placeholder.jpg"}
            width={450}
            height={250}
            alt={blog.title}
            className="w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <h3 className="text-lg font-medium line-clamp-2 text-gray-800">
            {blog.title}
          </h3>
          {blog.categoryName && (
            <span className="inline-block p-1 w-fit  bg-[#E3E6ED] text-[#595959] text-xs rounded-sm">
              {blog.categoryName}
            </span>
          )}
          <span className="text-xs text-[#888888] ">{blog.updatedAt}</span>
        </div>
      </Link>
    </div>
  );
}
