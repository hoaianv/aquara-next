"use client";

import MenuHeader from "@/components/header/MenuHeader";
import { usePathname } from "next/navigation";

import PromotionBar from "@/components/header/PromotionBar";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import {
  AlignJustify,
  ChevronDown,
  ChevronUp,
  CircleUser,
  Search,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PrivateHeader } from "@/components/header/PrivateHeader";
import { ICategoryNode } from "@/interfaces/models/IProductsCategories.interface";
import { ISearch } from "@/interfaces/common";
import { useStateStore } from "@/stores/stateStore";
import { SearchHeader } from "@/components/header/SearchHeader";

const THEME = {
  scrollThreshold: 200,
};
type HeaderProps = {
  data: ICategoryNode[];
};
export const Header = ({ data }: HeaderProps) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isPrivatePage = pathname.startsWith("/dat-hang");
  const { search, setSearch } = useStateStore();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHidden(latest > previous && latest > THEME.scrollThreshold);
  });

  return isPrivatePage ? (
    <PrivateHeader />
  ) : (
    <div className="relative">
      <motion.header
        className={`w-full relative z-[100]  transition-all duration-300`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1, scale: hidden ? 0.95 : 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <PromotionBar />
      </motion.header>
      <div
        className={` ${
          isHomePage ? "absolute" : "relative"
        } top-full left-0 w-full z-[100]`}
      >
        <div className={`h-[55px] w-full  bg-[#000000A6]`}>
          {search.status ? (
            <SearchHeader />
          ) : (
            <div className="mx-auto h-full  2xl:max-w-[1680px] sm:px-[15px] 2xl:px-[120px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
              <div className="grid grid-cols-6 gap-2 h-full   items-center">
                <div className="xl:col-span-2 col-span-4">
                  <Link href={"/"}>
                    <Image
                      src={"/images/logo.svg"}
                      width={80}
                      height={48}
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className=" col-span-2 xl:col-span-4 h-full">
                  <div className=" flex items-center  xl:justify-between justify-end h-full">
                    <div
                      className={` text-[#fff] ${"xl:block hidden"} group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <span className=" flex items-center h-full gap-1">
                        Sản phẩm
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={"up"}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.15 }}
                          ></motion.div>
                        </AnimatePresence>
                      </span>
                      <div className="hidden absolute top-full left-0 w-full min-h-[200px] bg-white  group-hover:block h-auto     text-white p-2">
                        <div className="mx-auto h-full 2xl:max-w-[920px]     xl:max-w-6xl lg:max-w-4xl md:max-w-lg sm:max-w-md max-w-sm text-white">
                          <div className="grid grid-cols-4 gap-2">
                            {data?.length > 0 &&
                              data.map((item) => (
                                <Link
                                  key={item.catId}
                                  className="py-2  text-[#888888] hover:text-black transition-colors duration-200"
                                  href={`/bo-suu-tap/${item.url}`}
                                >
                                  <div className="flex items-center flex-col gap-1">
                                    <Image
                                      loading="lazy"
                                      src={item.picture}
                                      alt={item.name}
                                      width={120}
                                      height={120}
                                    />
                                    <div className="text-center">
                                      <span className="text-base font-medium line-clamp-1">
                                        {item.name}
                                      </span>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={` text-[#fff]  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link
                        className=" flex items-center h-full"
                        href={`/gioi-thieu-ve-aqara`}
                      >
                        Về Aqara
                      </Link>
                    </div>

                    <div
                      className={`  text-[#fff]  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link
                        className=" flex items-center h-full"
                        href={"/thong-tin-san-pham"}
                      >
                        Thông tin sản phẩm
                      </Link>
                    </div>

                    <div
                      className={` text-[#fff]  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link
                        className=" flex items-center h-full"
                        href={"/tu-van-tu-dong-hoa"}
                      >
                        Tư vấn tự đông hóa
                      </Link>
                    </div>

                    <div
                      className={` text-[#fff]  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link
                        className=" flex items-center h-full"
                        href={"/lien-he"}
                      >
                        Liên hệ
                      </Link>
                    </div>

                    <div
                      className={` text-[#fff]  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link
                        className=" flex items-center h-full"
                        href={"/tin-tuc"}
                      >
                        Tin tức
                      </Link>
                    </div>

                    <div
                      className={` text-[#fff]  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <div
                        className="flex items-center h-full"
                        onClick={() => setSearch({ ...search, status: true })}
                      >
                        <Search size={20} strokeWidth={1.25} />
                      </div>
                    </div>
                    <div
                      className={` text-[#fff]  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link href={"/tai-khoan"}>
                        <div className=" flex items-center h-full">
                          <CircleUser size={20} strokeWidth={1.25} />
                        </div>
                      </Link>
                    </div>

                    <div
                      className={` text-[#fff]  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link href={"/gio-hang"}>
                        <div className=" flex items-center h-full">
                          <ShoppingCart size={20} strokeWidth={1.25} />
                        </div>
                      </Link>
                    </div>
                    <div
                      className={` text-[#fff]   lg:hidden block   group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <div className="   flex   items-center h-full  ">
                        <AlignJustify />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
Header.displayName = "Header";
