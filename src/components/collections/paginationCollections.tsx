"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import Pagination from "@/components/ui/pagination";
import { IPagination } from "@/interfaces/common";

interface PaginationCollectionsProps {
  meta: IPagination;
}

const PaginationCollections = ({ meta }: PaginationCollectionsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber) {
      params.set("page", `${pageNumber}`);
    } else {
      params.delete("page");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mx-auto h-full  2xl:max-w-[1280px] sm:px-[15px] xl:px-[80px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
      <div className="flex justify-end">
        <Pagination
          onPageChange={handlePageChange}
          currentPage={meta.currentPage}
          total={meta.total}
          itemsPerPage={10}
        />
      </div>
    </div>
  );
};

export default PaginationCollections;
