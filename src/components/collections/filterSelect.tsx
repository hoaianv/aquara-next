"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
interface Option {
  value: string;
  label: string;
  isDefault?: boolean;
}

const FilterSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  const options: Option[] = [
    { value: "", label: "Bỏ lọc" },
    { value: "asc", label: "Giá tăng dần", isDefault: true },
    { value: "desc", label: "Giá giảm dần" },
  ];

  const handleOptionClick = (option: Option) => {
    if (option.value) {
      params.set("sort_price", option.value);
    } else {
      params.delete("sort_price");
    }
    router.replace(`?${params.toString()}`, { scroll: false });
    setIsOpen(false);

    // setSelectedOption(option.label);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-full"
      >
        <span className="text-gray-700 text-sm font-medium text-nowrap">
          Bộ lọc:{" "}
          {options.find((opt) => opt.value === searchParams.get("sort_price"))
            ?.label || "Chưa có"}
        </span>
        <ChevronDown
          className={`ml-2 h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 py-1">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50  ${
                searchParams.get("sort_price") === option.value
                  ? "bg-blue-50 text-blue-600"
                  : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSelect;
