"use client";

import { urlImage } from "@/constants/routes";
import { ICategoryNode } from "@/interfaces/models/IProductsCategories.interface";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo, useCallback } from "react";

interface MenuHeaderProps {
  data: ICategoryNode | null;
  setIsHovered: React.Dispatch<React.SetStateAction<ICategoryNode | null>>;
}
const MenuHeader = ({ data, setIsHovered }: MenuHeaderProps) => {
  const handleSetData = useCallback(
    (id: number) => {
      if (!data?.children) return;

      const updatedData = {
        ...data,
        children: data.children.map((parent) => {
          if (!parent.active || !parent.children) return parent;

          return {
            ...parent,
            children: parent.children.map((item) => ({
              ...item,
              active: item.catId === id,
            })),
          };
        }),
      };

      setIsHovered(updatedData);
    },
    [data, setIsHovered]
  );

  const setActiveMenuItem = useCallback(
    (id: number) => {
      if (!data?.children) return;
      debugger;
      setIsHovered({
        ...data,
        children: data.children.map((item) => ({
          ...item,
          active: item.catId === id,
          children: item.children?.map((child, index) => ({
            ...child,
            active: item.catId === id && index === 0,
          })),
        })),
      });
    },
    [data, setIsHovered]
  );

  return (
    <div
      className="absolute top-full left-0 w-full min-h-[200px] bg-white
               opacity-0 translate-y-[-10px] transition-all duration-200 ease-out
               pointer-events-none
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto z-30"
    >
      <div className="mx-auto h-full  2xl:max-w-[1680px] sm:px-[15px] 2xl:px-[120px]  xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm text-white ">
        <div className="grid grid-cols-10 gap-2     ">
          <div className="col-span-2">
            {(data?.children?.length ?? 0) > 0 &&
              data?.children?.map((item) => (
                <div key={item.catId}>
                  <div
                    onClick={() => setActiveMenuItem(item?.catId)}
                    className="text-[#444] flex gap-1 p-2 justify-between"
                  >
                    <span>{item.name}</span>
                    {item?.active ? (
                      <ChevronUp size={18} strokeWidth={1} />
                    ) : (
                      <ChevronDown size={18} strokeWidth={1} />
                    )}
                  </div>
                  <div className="">
                    {item.active && (
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          item.active
                            ? "max-h-[1000px] opacity-100 translate-y-0"
                            : "max-h-0 opacity-0 -translate-y-2"
                        }`}
                      >
                        {item?.children?.length &&
                          item?.children.map((child) => (
                            <div
                              onMouseEnter={() => handleSetData(child?.catId)}
                              key={child.catId}
                              className={`py-3 px-5 ${
                                child?.active ? "bg-[#f4f4f4]" : ""
                              }`}
                            >
                              <Link
                                href={`/bo-suu-tap/${child.url}`}
                                className="text-[#444] font-normal"
                              >
                                {child.name}
                              </Link>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="col-span-8">
            <div className="col-span-8">
              {(() => {
                const activeParent = data?.children?.find(
                  (item) => item.active
                );
                const activeChild = activeParent?.children?.find(
                  (item) => item.active
                );

                if (
                  !activeChild ||
                  !activeChild.products ||
                  activeChild.products.length === 0
                ) {
                  return null;
                }

                return (
                  <div className="mb-6 p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#444] font-normal">
                        {activeChild.name}
                      </span>
                      <span className="text-[#444] font-normal cursor-pointer hover:underline">
                        Xem tất cả
                      </span>
                    </div>
                    <div className="grid grid-cols-6 gap-2">
                      {(activeChild.products ?? []).map((child) => (
                        <div
                          key={child.id}
                          className="p-3 bg-[#f4f4f4] hover:bg-[#ebebeb] rounded-md"
                        >
                          <Link href={`/san-pham/${child.url}`}>
                            <div className="flex items-center justify-center">
                              <Image
                                src={child?.picture}
                                width={120}
                                height={120}
                                alt={child.name ?? ""}
                              />
                            </div>
                            <div className="flex flex-col text-center">
                              <span className="font-semibold text-[#000000]">
                                {child.name}
                              </span>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
MenuHeader.displayName = "MenuHeader";

export default memo(MenuHeader);
