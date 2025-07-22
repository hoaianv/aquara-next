"use client";
import { create } from "@/apis/models/order.apis";
import Button from "@/components/ui/button";
import { service } from "@/constants/common.constant";
import { brand } from "@/constants/routes";
import {
  ICreateOrderRequest,
  IOrderItem,
} from "@/interfaces/models/IOrder.interface";
import { useCartStore } from "@/stores/useCartStore";
import { useOrderStore } from "@/stores/useOrder";
import { formatCurrency } from "@/until";
import Link from "next/link";
import { useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Loading from "@/components/ui/loading";

export default function TotalCart() {
  const { cart } = useCartStore();
  const { order } = useOrderStore();
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const summaryItems = [
    {
      label: "Tạm tính",
      value: formatCurrency(cart.totalAmount),
    },
    {
      label: "Phí vận chuyển",
      value: "Tính khi thanh toán",
    },
    {
      label: "Thuế ước tính",
      value: "Tính khi thanh toán",
    },
  ];

  const handleOrder = (value: IOrderItem[]) => {
    startTransition(async () => {
      let payload: ICreateOrderRequest = {
        brand: brand,
        items: value,
      };
      const { error_code, status, message, data } = await create(payload);
      if (status && error_code === 200) {
        router.replace(`/dat-hang/${data.orderId}`);
      } else {
        toast.warning("Đặt hàng", {
          description: message,
          position: "top-center",
        });
      }
    });
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="col-span-4 ">
      <div className="px-5 py-3 mb-5 bg-white rounded-lg">
        <div className="border-b border-[#ebe9e9] pb-4">
          {summaryItems.map((item, index) => (
            <div
              key={item.label}
              className={`flex justify-between items-center ${
                index === 1 ? "my-3" : ""
              }`}
            >
              <span className="text-[#757575] text-sm">{item.label}</span>
              <span className="text-base font-medium">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="py-5 border-b border-[#ebe9e9] ">
          <span className="text-xl font-medium">
            Tổng tiền: {formatCurrency(cart.totalAmount)}
          </span>
        </div>

        <div className="py-5   ">
          <Button
            disabled={loading}
            propClassName="w-full"
            text="Đặt hàng"
            onClick={() => handleOrder(order)}
            variant="blue"
          />
          <div className="py-4 text-center">
            <Link href="/" className="text-lg font-medium">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
      <div className="p-3 bg-white">
        {service &&
          service.length > 0 &&
          service.map(({ icon: Icon, title, description }, idx) => (
            <div className="flex items-center gap-4 my-3" key={idx}>
              <div>
                <Icon strokeWidth={1} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-medium"> {title}</span>
                <span className="text-sm font-light">{description}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
