"use client";
import Empty from "@/components/infoProducts/empty";
import Pagination from "@/components/ui/pagination";
import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { brand } from "@/constants/routes";
import { IPagination } from "@/interfaces/common";
import { IDocument } from "@/interfaces/models/IDocument.interface";
import {
  Database,
  Download,
  FileText,
  Image as ImageIcon,
  Sheet,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

interface DocumentsProps {
  data: IDocument[];
  meta: IPagination;
}

const Documents = ({ data, meta }: DocumentsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleDownload = async (id: number, name: string) => {
    try {
      const response = await fetch(
        `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.DOCUMENT}/${CONST_APIS_COMMON.DOWNLOAD}/${id}/${brand}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = name;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber) {
      params.set("page", `${pageNumber}`);
    } else {
      params.delete("page");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="p-6 bg-white rounded-lg my-3">
        <div className="flex items-center gap-2 border-b border-[#ebe9e9] pb-3">
          <Database strokeWidth={1.25} />
          <span className="text-2xl font-normal">Thông tin sản phẩm</span>
        </div>
        <div className="">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div
                className="grid grid-cols-10 py-3 border-b border-[#ededed] "
                key={item.id}
              >
                <div className="col-span-1 flex items-center justify-center text-black">
                  {item.type === "image" ? (
                    <ImageIcon size={32} strokeWidth={1.25} />
                  ) : item.type === "excel" ? (
                    <Sheet size={32} strokeWidth={1.25} />
                  ) : (
                    <FileText size={32} strokeWidth={1.25} />
                  )}
                </div>
                <div className="col-span-7 flex flex-col">
                  <span className="text-lg font-light h-[45px]  leading-tight">
                    {item.title}
                  </span>
                  <span className="text-sm text-[#757575]">
                    {item.createAt}
                  </span>
                </div>
                <div className="col-span-2 flex items-center justify-center">
                  <div
                    onClick={() => handleDownload(item.id, item.fileName)}
                    className="w-[120px] border border-[#2673ff] text-[#2673ff] gap-1 text-sm rounded-3xl p-3 h-[32px] flex items-center justify-center"
                  >
                    <Download strokeWidth={1.25} />
                    Tải xuống
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Empty />
          )}
        </div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={meta.currentPage}
          total={meta.total}
          itemsPerPage={10}
        />
      </div>
    </motion.div>
  );
};

export default Documents;
