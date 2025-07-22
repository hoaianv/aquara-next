"use client";
import { find } from "@/apis/models/warranty.apis";
import { IWarrantyData } from "@/interfaces/models/warranty.interface";
import React, { useState, useTransition } from "react";
import { toast } from "sonner";

export default function Warranty() {
  const [loading, startTransition] = useTransition();
  const [data, setData] = useState<IWarrantyData | null>(null);
  const [value, setValue] = useState("");

  const handleFindWarranty = (key: string) => {
    startTransition(async () => {
      const { status, error_code, data, message } = await find(key);
      const isSuccess = status && error_code === 200;

      setData(isSuccess ? data : null);

      toast.success("Tìm kiếm bảo hành", {
        description: message,
        position: "top-center",
      });
    });
  };

  return (
    <div className=" py-[70px] bg-gradient-to-br from-emerald-50 via-white to-blue-50   px-4">
      <div className="text-center   max-w-[1120px] mx-auto">
        <div className="mb-8">
          <div className="relative w-32 h-20 mx-auto mb-6">
            <div className="w-28 h-16 border-4 border-emerald-500 rounded-lg bg-gradient-to-r from-emerald-100 to-blue-100 relative">
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-6 bg-emerald-500 rounded-r"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10.5V11.5H13.5V10.5C13.5,8.7 12.8,8.2 12,8.2Z" />
                </svg>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4">
            Tra cứu bảo hành
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nhập số serial của sản phẩm EcoFlow để kiểm tra thông tin bảo hành
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <div className="relative flex-1 max-w-md">
              <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Nhập số serial (ví dụ: ECO001234)"
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-800 placeholder-gray-500"
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <button
              onClick={() => handleFindWarranty(value)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Tra cứu
            </button>
          </div>
        </div>

        <div className={`mb-6 ${loading ? "" : "hidden"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            Đang tra cứu thông tin...
          </div>
        </div>

        <div className="hidden mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 font-medium">
            Không tìm thấy thông tin bảo hành cho số serial này
          </p>
        </div>
        {data && (
          <div className="  mb-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Thông tin bảo hành
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Số Serial</p>
                <p className="font-semibold text-gray-800">
                  {data.serialNumber}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Tên sản phẩm</p>
                <p className="font-semibold text-gray-800">
                  {data.productName}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Ngày bắt đầu</p>
                <p className="font-semibold text-gray-800">{data.startDate}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Hạn bảo hành</p>
                <p className="font-semibold text-gray-800">
                  {data.expirationDate}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Trạng thái</p>
                <p className="font-semibold text-green-600">{data.type}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Còn {data.daysRemaining} ngày
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-sm text-gray-500">
          <p className="font-medium text-emerald-600 mb-1">
            EcoFlow - Năng lượng sạch, Tương lai xanh
          </p>
          <p>Dịch vụ bảo hành chuyên nghiệp, hỗ trợ tận tâm</p>
        </div>
      </div>
    </div>
  );
}
