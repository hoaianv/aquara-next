"use client";

import { find } from "@/apis/models/product.apis";
import InputSearch from "@/components/ui/inputSearch";
import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import { ISearchProduct } from "@/interfaces/common";
import { urlImage } from "@/constants/routes";
import Image from "next/image";
import { formatCurrency } from "@/until";
import Link from "next/link";
import { X } from "lucide-react";
import { useStateStore } from "@/stores/stateStore";
import { motion } from "framer-motion";
export const SearchHeader = () => {
  const [value, setValue] = useState<ISearchProduct[]>([]);
  const { search, setSearch } = useStateStore();

  const [loading, setLoading] = useState(false);

  const performSearch = useCallback(async (value: string) => {
    if (!value.trim()) {
      setValue([]);
      return;
    }

    try {
      setLoading(true);
      const { data, status, error_code } = await find(value);

      if (error_code === 200 && status) {
        setValue(data);
      } else {
        setValue([]);
      }
    } catch (error) {
      console.error("Search error:", error);
      setValue([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedSearch = useCallback(debounce(performSearch, 500), [
    performSearch,
  ]);

  const handleSearch = (value: string) => {
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <motion.div
      className={`w-[600px] absolute top-0 left-1/2 transform -translate-x-1/2`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <InputSearch className="bg-[#ededed]" onChange={handleSearch} />

      <div className="absolute top-full p-3 bg-white w-full shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Tìm kiếm sản phẩm EcoFlow
            </h3>
          </div>
          {loading ? (
            <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <X
              onClick={() => setSearch({ ...search, status: false })}
              size={20}
              strokeWidth={2}
            />
          )}
        </div>

        {value.length > 0 ? (
          <div className="mb-3">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Kết quả tìm kiếm:
            </h4>
            <div className="space-y-2 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-emerald-500     scrollbar-track-gray-200 hover:scrollbar-thumb-emerald-500">
              {value.map((item) => (
                <Link
                  onClick={() => setSearch({ ...search, status: false })}
                  key={item.id}
                  href={`/san-pham/${item.url}`}
                >
                  <div className="flex gap-3 items-center">
                    <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                      <Image
                        src={urlImage + item.picture}
                        width={70}
                        height={70}
                        alt={item.name}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs ">
                        {formatCurrency(item.priceBase)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-4 mb-3">
            <p className="text-gray-700 leading-relaxed">
              Bạn muốn tìm sản phẩm gì liên quan đến thương hiệu{" "}
              <span className="font-semibold text-emerald-600">EcoFlow</span>?
            </p>
          </div>
        )}

        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            <span className="font-medium text-emerald-600">EcoFlow</span> - Năng
            lượng sạch, Tương lai xanh
          </p>
        </div>
      </div>
    </motion.div>
  );
};

SearchHeader.displayName = "SearchHeader";
