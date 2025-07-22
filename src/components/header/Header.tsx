"use client";

import MainHeader from "@/components/header/MainHeader";
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
  const [isHovered, setIsHovered] = useState<ICategoryNode | null>(null);
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
        <MainHeader />
      </motion.header>
      <div
        className={` ${
          isHomePage ? "absolute" : "relative"
        } top-full left-0 w-full z-[100]`}
      >
        <div
          className={`h-[55px] w-full ${
            !isHomePage || isHovered ? "bg-white" : ""
          }`}
        >
          {search.status ? (
            <SearchHeader />
          ) : (
            <div className="mx-auto h-full  2xl:max-w-[1680px] sm:px-[15px] 2xl:px-[120px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
              <div className="grid grid-cols-6 gap-2 h-full   items-center">
                <div className="xl:col-span-2 col-span-4">
                  <Link href={"/"}>
                    <Image
                      src={
                        isHomePage
                          ? isHovered
                            ? "/images/logo-black.png"
                            : "/images/logo.png"
                          : "/images/logo-black.png"
                      }
                      width={172}
                      height={15}
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className=" col-span-2 xl:col-span-4 h-full">
                  <div className=" flex items-center  xl:justify-between justify-end h-full">
                    {data.map((link) => (
                      <div
                        key={link.catId}
                        onMouseEnter={() => setIsHovered(link)}
                        onMouseLeave={() => setIsHovered(null)}
                        className={`h-full  gap-1 items-center  ${
                          !isHomePage || isHovered
                            ? "text-[#444]"
                            : "text-[#fff]"
                        } ${"xl:flex hidden"} group h-full text-sm font-semibold cursor-pointer transition-colors duration-200`}
                      >
                        {link.name}

                        <AnimatePresence mode="wait">
                          <motion.div
                            key={
                              isHovered?.catId === link?.catId ? "up" : "down"
                            }
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.15 }}
                          >
                            {isHovered?.catId === link?.catId ? (
                              <ChevronUp size={18} strokeWidth={1} />
                            ) : (
                              <ChevronDown size={18} strokeWidth={1} />
                            )}
                          </motion.div>
                        </AnimatePresence>

                        {Array.isArray(link?.children) &&
                          link.children.length > 0 &&
                          isHovered?.catId === link.catId && (
                            <MenuHeader
                              data={isHovered}
                              setIsHovered={setIsHovered}
                            />
                          )}
                      </div>
                    ))}

                    <div
                      className={` ${
                        !isHomePage || isHovered ? "text-[#444]" : "text-[#fff]"
                      }  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link
                        className=" flex items-center h-full"
                        href={`/gioi-thieu-ve-ecoflow`}
                      >
                        Về Ecoflow
                      </Link>
                    </div>

                    <div
                      className={` ${
                        !isHomePage || isHovered ? "text-[#444]" : "text-[#fff]"
                      }  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link
                        className=" flex items-center h-full"
                        href={"/thong-tin-san-pham"}
                      >
                        Thông tin sản phẩm
                      </Link>
                    </div>

                    <div
                      className={` ${
                        !isHomePage || isHovered ? "text-[#444]" : "text-[#fff]"
                      }  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link
                        className=" flex items-center h-full"
                        href={"/bao-hanh"}
                      >
                        Bảo hành
                      </Link>
                    </div>

                    <div
                      className={` ${
                        !isHomePage || isHovered ? "text-[#444]" : "text-[#fff]"
                      }  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link
                        className=" flex items-center h-full"
                        href={"/lien-he"}
                      >
                        Liên hệ
                      </Link>
                    </div>

                    <div
                      className={` ${
                        !isHomePage || isHovered ? "text-[#444]" : "text-[#fff]"
                      }  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link
                        className=" flex items-center h-full"
                        href={"/tin-tuc"}
                      >
                        Tin tức
                      </Link>
                    </div>

                    <div
                      className={` ${
                        !isHomePage || isHovered ? "text-[#444]" : "text-[#fff]"
                      }  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <div
                        className="flex items-center h-full"
                        onClick={() => setSearch({ ...search, status: true })}
                      >
                        <Search size={20} strokeWidth={1.25} />
                      </div>
                    </div>
                    <div
                      className={` ${
                        !isHomePage || isHovered ? "text-[#444]" : "text-[#fff]"
                      }  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link href={"/tai-khoan"}>
                        <div className=" flex items-center h-full">
                          <CircleUser size={20} strokeWidth={1.25} />
                        </div>
                      </Link>
                    </div>

                    <div
                      className={` ${
                        !isHomePage || isHovered ? "text-[#444]" : "text-[#fff]"
                      }  ${"xl:block hidden"}  group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
                    >
                      <Link href={"/gio-hang"}>
                        <div className=" flex items-center h-full">
                          <ShoppingCart size={20} strokeWidth={1.25} />
                        </div>
                      </Link>
                    </div>
                    <div
                      className={` ${
                        isHovered ? "text-[#444]" : "text-[#fff]"
                      }   lg:hidden block   group h-full text-sm font-semibold cursor-pointer transition-colors duration-200 `}
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
