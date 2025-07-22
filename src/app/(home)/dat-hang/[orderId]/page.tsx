import { getOrder } from "@/apis/models/order.apis";
import OrderForm from "@/components/order/formInforOrder";
import { urlImage } from "@/constants/routes";
import { formatCurrency } from "@/until";
import Image from "next/image";

export default async function order({
  params,
}: {
  params: { orderId: number };
}) {
  const { orderId } = params;
  const { data, error_code, status } = await getOrder(orderId);

  return status && error_code === 200 ? (
    <div className="mx-auto  bg-white  h-full 2xl:max-w-[1240px] sm:px-[15px] xl:px-[20px] xl:max-w-6xl lg:max-w-4xl md:max-w-lg  sm:max-w-md max-w-sm">
      <div className="grid grid-cols-10 gap-3">
        <div className="col-span-5 border-r  border-[#dedede]">
          <OrderForm orderId={orderId} />
        </div>

        <div className="col-span-5">
          <div className="p-6">
            <div className="pb-4 border-[#dedede] border-b">
              {data.items.map((item) => (
                <div
                  className="flex items-center justify-center gap-2"
                  key={item.productId}
                >
                  <div className="w-[70px] border-[#dedede] border h-[70px] flex items-center justify-center bg-[#F6F6F6] rounded-md">
                    <Image
                      src={urlImage + item.picture}
                      width={65}
                      height={65}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col w-[380px]">
                    <span className="text-[15px] line-clamp-1">
                      {" "}
                      {item.name}
                    </span>
                    <span className="text-[12px] line-clamp-2 text-[#9D9D9D]">
                      {item.options}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-base ">
                      {formatCurrency(item.priceBase)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className=" pt-5">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-normal">
                  Tổng sản phẩm: {data.items.length} sản phẩm
                </span>
                <span className="text-[13px]  font-normal">
                  {" "}
                  {formatCurrency(data.total)}
                </span>
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-[13px] font-normal">Vận chuyển:</span>
                <span className="text-[13px]  font-normal">
                  Tính khi thanh toán
                </span>
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-[16px] font-semibold">Tổng tiền:</span>
                <span className="text-[16px] font-semibold">
                  {formatCurrency(data.total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
