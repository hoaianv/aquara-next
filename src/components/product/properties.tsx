"use client";

import { useState } from "react";
import Modal from "@/components/ui/modal";
import { IItemProperty } from "@/interfaces/models/IProperties.interface";
import { Cog } from "lucide-react";
import Button from "@/components/ui/button";

export default function Properties({ data }: { data: IItemProperty[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#f8f8f8] p-3">
        {data?.slice(0, 6).map((item) => (
          <div key={item.id} className="line-clamp-1 my-1">
            <h3 className="text-sm font-semibold text-gray-800 inline">
              {item.title} :
            </h3>{" "}
            <span className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </span>
          </div>
        ))}

        {data?.length > 6 && (
          <div
            className="text-blue-500 cursor-pointer text-sm mt-2 text-center"
            onClick={() => setIsOpen(true)}
          >
            <span>Xem thêm</span>
          </div>
        )}
      </div>

      <Modal
        size="lg"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Thông số kỹ thuật"
      >
        <div className="grid grid-cols-2 gap-2 max-h-[600px] overflow-y-auto custom-scrollbar">
          {data?.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-gradient-to-r mr-1 ${
                index % 2 === 0
                  ? "from-gray-50 to-blue-50 hover:from-blue-50 hover:to-blue-100"
                  : "from-gray-50 to-purple-50 hover:from-purple-50 hover:to-purple-100"
              } rounded-lg p-4 transition-all duration-200 hover:shadow-md border border-gray-100`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 p-2 rounded-lg ${
                    index % 2 === 0
                      ? "bg-blue-100 text-blue-600"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  <Cog />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div
                className={`absolute inset-0 border-2 border-transparent group-hover:border-${
                  index % 2 === 0 ? "blue" : "purple"
                }-200 rounded-lg transition-colors duration-200 pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <Button
            onClick={() => setIsOpen(false)}
            text={"Đóng"}
            variant={"blue"}
            propClassName={"w-full"}
          />
        </div>
      </Modal>
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #a3a3a3 transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #a3a3a3;
          border-radius: 9999px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #737373;
        }
      `}</style>
    </>
  );
}
