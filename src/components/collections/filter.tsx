"use client";
import InputField from "@/components/ui/input";
import InputSearch from "@/components/ui/inputSearch";
import RadioField from "@/components/ui/RadioField";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { debounce } from "lodash";
import CheckboxField from "@/components/ui/checkboxField";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  const [price, setPrice] = useState({
    min_price: searchParams.get("min_price") || "",
    max_price: searchParams.get("max_price") || "",
  });

  const handleStockChange = (value: string) => {
    const temp = value === "in_stock" ? "true" : "false";

    if (searchParams.get("in_stock") === temp) {
      params.delete("in_stock");
    } else {
      params.set("in_stock", temp);
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleSearch = debounce((value: string) => {
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  }, 500);

  const handlePriceChange = (key: string, value: string) => {
    setPrice((prev) => ({
      ...prev,
      [key]: value,
    }));
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="">
      <div className="border-b  border-gray-200 pb-7">
        <InputSearch onChange={handleSearch} />
      </div>

      <div className="mt-5 border-b  border-gray-200">
        <span className="text-lg font-medium">Giá</span>
        <div className="flex items-center justify-between gap-6 relative">
          <InputField
            onChange={(e) => handlePriceChange("min_price", e.target.value)}
            id="price-min"
            value={price.min_price}
            label="Giá nhỏ"
            type="number"
          />
          <InputField
            onChange={(e) => handlePriceChange("max_price", e.target.value)}
            id="price-max"
            value={price.max_price}
            label="Giá lớn"
            type="number"
          />
        </div>
      </div>

      <div className="mt-5 border-b  border-gray-200">
        <span className="text-lg font-medium">Khả dụng</span>
        <div className="flex flex-col   justify-between    mt-5">
          <CheckboxField
            id="in_stock"
            label="Còn hàng"
            checked={searchParams.get("in_stock") === "true"}
            onChange={(e) => handleStockChange(e.target.id)}
          />

          <CheckboxField
            id="out-stock"
            label="Hết hàng"
            checked={searchParams.get("in_stock") === "false"}
            onChange={(e) => handleStockChange(e.target.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
