export const dynamic = "force-dynamic";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Plug,
  Settings,
  Shield,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getFooter } from "@/apis/common/layout.apis";
import { urlImage } from "@/constants/routes";
const ICON_MAP: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  MapPin,
  Phone,
  Mail,
  Plug,
  Settings,
  Shield,
};
const Footer = async () => {
  const { data, error_code, status } = await getFooter();

  return (
    status &&
    error_code == 200 && (
      <div>
        <div className="flex justify-center py-8 bg-[#F2F4F4]">
          <div className="relative w-[480px]  ">
            <div className="text-center mb-4">
              <span className="text-[#555656] text-2xl font-bold">
                Aqara – Luôn có điều mới chờ bạn!
              </span>
            </div>
            <div
              className={`relative flex items-center bg-white rounded-xl border-2 transition-colors duration-200 ${"border-gray-200"}`}
            >
              <input
                type="email"
                placeholder="Địa chỉ email của bạn"
                className="flex-1 px-6 py-1 bg-transparent rounded-xl focus:outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="  flex items-center justify-center  bg-[#5765f2] hover:bg-[#5562f5] w-[200px] rounded-r-xl h-full  py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2">
                <span className="text-white text-lg font-medium"> Gửi</span>
              </button>
            </div>
          </div>
        </div>
        <footer className="  bg-gradient-to-br pt-10 from-emerald-50 via-white to-blue-50 border-t border-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center flex-col  gap-4">
                  <Image
                    src={"/images/logo-black.svg"}
                    width={200}
                    height={100}
                    alt="logo"
                  />

                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                    {data.brand?.[0]?.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {data.brand?.[0]?.value}
                </p>
                <div className="flex space-x-4">
                  {data.social?.map((item) => (
                    <Link key={item.id} href={item?.url ?? "#"} target="_blank">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full flex items-center justify-center hover:from-emerald-200 hover:to-blue-200 transition-all duration-300 cursor-pointer">
                        <Image
                          src={urlImage + item?.icon}
                          alt={item.title}
                          width={30}
                          height={30}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Chính sách
                </h4>
                <ul className="space-y-3 text-sm">
                  {data.blogsPolicy.map((item) => (
                    <li
                      key={item.id}
                      className=" text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors"
                    >
                      <Link
                        className="flex items-center space-x-2"
                        href={"/chinh-sach/" + item.slug}
                      >
                        <div className="shrink-0 w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
                        <span className="line-clamp-1">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Hỗ Trợ
                </h4>
                <ul className="space-y-3 text-sm">
                  {data.links?.map((item) => (
                    <li
                      key={item.id}
                      className="text-gray-600 hover:text-emerald-600 cursor-pointer transition-colors"
                    >
                      <Link href={item?.url ?? "#"}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Liên Hệ
                </h4>
                <div className="space-y-3 text-sm">
                  {data.contact?.map((item) => {
                    const IconComponent = ICON_MAP[item.icon ?? ""];
                    return (
                      <div
                        key={item.id}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        {IconComponent ? (
                          <IconComponent className="h-4 w-4 text-emerald-600 shrink-0" />
                        ) : null}
                        <span>{item.value}</span>
                      </div>
                    );
                  })}
                </div>

                <div
                  className="overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: data.map ?? "" }}
                />
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-emerald-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.features?.map((item) => {
                  const Icon = ICON_MAP[item.icon ?? ""]; // Lấy component icon từ string
                  return (
                    <div className="text-center group" key={item.id}>
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-200 group-hover:to-blue-200 transition-all duration-300">
                        {Icon && <Icon className="h-8 w-8 text-emerald-600" />}
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h5>
                      <p className="text-gray-600 text-sm">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-100 bg-white/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                  <p className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 text-sm mb-1">
                    Aqara - Ngôi nhà thông minh, cuộc sống tiện nghi
                  </p>
                  <p className="text-gray-500 text-xs">
                    © 2025 Aqara. Tất cả quyền được bảo lưu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  );
};

export default Footer;
