"use client";

import { useStateStore } from "@/stores/stateStore";
import { bannerKeys } from "@/constants/values.constant";
import { motion } from "framer-motion";
import Image from "next/image";

const ReasonBuy = () => {
  const { banner } = useStateStore();
  const currentBanner = banner[bannerKeys.bannerReason];

  // Early return if no adverts
  if (!currentBanner?.advertises?.length) return null;

  const { advertises } = currentBanner;
  const [
    firstAd,
    secondAd,
    thirdAd,
    fourthAd,
    fifthAd,
    sixthAd,
    seventhAd,
    eighthAd,
  ] = advertises;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-10 mx-auto mt-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1680px] sm:px-4 2xl:px-28"
    >
      <h2 className=" text-2xl font-semibold">
        Những lý do không thể bỏ qua khi mua sắm tại cửa hàng chính thức EcoFlow
      </h2>

      <div className="grid grid-cols-10 mt-6 gap-2">
        <div className="col-span-2">
          <div className="bg-white rounded-md p-3 h-full w-full relative group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
            <div className="absolute top-3 left-0 w-full text-center z-20">
              <span className="w-full text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                {firstAd.title}
              </span>
            </div>
            <Image
              src={firstAd.picture}
              alt={firstAd.title}
              width={firstAd.width}
              height={firstAd.height}
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-md z-10"></div>
          </div>
        </div>

        <div className="col-span-6">
          <div className="flex flex-col gap-2 h-full">
            <div className="h-full">
              <div className="grid grid-cols-11 gap-2 h-full">
                <div className="col-span-4">
                  <div className="relative h-full bg-white rounded-md p-3 group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                    <div className="w-full text-center absolute left-0 top-3 z-20">
                      <span className="w-full text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        {secondAd.title}
                      </span>
                    </div>
                    <Image
                      src={secondAd.picture}
                      alt={secondAd.title}
                      width={secondAd.width}
                      height={secondAd.height}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-md z-10"></div>
                  </div>
                </div>

                <div className="col-span-4">
                  <div className="relative bg-white rounded-md p-3 flex justify-center items-center h-full group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                    <div className="w-full text-center absolute left-0 top-3 z-20">
                      <span className="w-full text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        {thirdAd.title}
                      </span>
                    </div>
                    <Image
                      src={thirdAd.picture}
                      alt={thirdAd.title}
                      width={thirdAd.width}
                      height={thirdAd.height}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-md z-10"></div>
                  </div>
                </div>

                <div className="col-span-3">
                  <div className="relative h-full bg-white rounded-md p-3 flex justify-center items-center group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                    <div className="w-full text-center absolute left-0 top-3 z-20">
                      <span className="w-full text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        {fourthAd.title}
                      </span>
                    </div>
                    <Image
                      src={fourthAd.picture}
                      alt={fourthAd.title}
                      width={fourthAd.width}
                      height={fourthAd.height}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-md z-10"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-3">
                  <div className="relative h-full bg-white rounded-md p-3 group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                    <div className="w-full text-center absolute left-0 top-3 z-20">
                      <span className="w-full text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        {sixthAd.title}
                      </span>
                    </div>
                    <Image
                      src={sixthAd.picture}
                      alt={sixthAd.title}
                      width={sixthAd.width}
                      height={sixthAd.height}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-md z-10"></div>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="relative bg-white rounded-md p-3 flex justify-center items-center h-full group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                    <div className="w-full text-center absolute left-0 top-3 z-20">
                      <span className="w-full text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        {seventhAd.title}
                      </span>
                    </div>
                    <Image
                      src={seventhAd.picture}
                      alt={seventhAd.title}
                      width={seventhAd.width}
                      height={seventhAd.height}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-md z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex flex-col gap-2">
            <div className="h-full">
              <div className="relative h-full bg-white rounded-md group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-full text-center absolute left-0 top-3 z-10">
                  <span className="w-full text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                    {fifthAd.title}
                  </span>
                </div>
                <Image
                  src={fifthAd.picture}
                  alt={fifthAd.title}
                  width={fifthAd.width}
                  height={fifthAd.height}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-md"></div>
              </div>
            </div>

            <div className="h-full">
              <div className="relative h-full bg-white rounded-md group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-full text-center absolute left-0 top-3 z-10">
                  <span className="w-full text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
                    {eighthAd.title}
                  </span>
                </div>
                <Image
                  src={eighthAd.picture}
                  alt={eighthAd.title}
                  width={eighthAd.width}
                  height={eighthAd.height}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReasonBuy;
