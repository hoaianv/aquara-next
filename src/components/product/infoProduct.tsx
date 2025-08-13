"use client";
import Button from "@/components/ui/button";

import { IOption, IProduct } from "@/interfaces/models/IProduct.interface";
import { formatCurrency } from "@/until";
import { Percent } from "lucide-react";
import Link from "next/link";
import { useMemo, useState, useTransition } from "react";
import OptionProduct from "@/components/product/optionProduct";
import { useAuthStore } from "@/stores/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { brand } from "@/constants/routes";
import { IAddCart } from "@/interfaces/models/ICart.interface";
import { create } from "@/apis/models/cart.apis";
import { useCartStore } from "@/stores/useCartStore";
import QuantitySelector from "@/components/product/quantitySelector";
import DescriptionShort from "@/components/product/descriptionShort";

interface ProductProps {
  data: IProduct;
  dataOption: IOption[];
}
const InfoProduct = ({ data, dataOption }: ProductProps) => {
  const { addItems } = useCartStore();
  const { user } = useAuthStore();
  const [option, setOption] = useState<IOption[]>(dataOption ?? []);

  const [select, setSelect] = useState<IAddCart>({
    brand: brand,
    productId: data.id,
    quantity: 1,
    slug: data.slug,
    option: option.map((item) => ({
      optionId: item.optionId,
      valueId: item.values[0].id,
      price: item.values[0].price,
      name: item.values[0].value,
    })),
  });
  const [loading, startTransition] = useTransition();

  const totalOptionPrice = useMemo(() => {
    return select.option.reduce((sum, o) => sum + o.price, 0);
  }, [select.option]);

  const router = useRouter();
  const increaseQuantity = () => {
    setSelect((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  };

  const decreaseQuantity = () => {
    setSelect((prev) => ({
      ...prev,
      quantity: prev.quantity > 1 ? prev.quantity - 1 : prev.quantity,
    }));
  };
  const handleOptionSelect = (
    index: number,
    optionId: number,
    valueId: number,
    isChild: boolean,
    newOptionData?: IOption[],
    price?: number,
    name?: string
  ) => {
    if (newOptionData) setOption(newOptionData);

    setSelect((prev) => ({
      ...prev,
      option:
        isChild || !newOptionData
          ? prev.option.map((item, i) =>
              i === index
                ? { optionId, valueId, price: price || 0, name: name || "" }
                : item
            )
          : newOptionData.map((item, idx) => ({
              optionId: idx === index ? optionId : item.optionId,
              valueId: idx === index ? valueId : item.values[0].id,
              price: idx === index ? price || 0 : item.values[0].price || 0,
              name: idx === index ? name || "" : item.values[0].value || "",
            })),
    }));
  };

  const addCart = (data: IAddCart) => {
    startTransition(async () => {
      const response = await create([data]);
      if (response?.error_code === 200 && response.status) {
        addItems(response.data);
        toast.success("Thêm vào giỏ hàng", {
          description: response.message,
          position: "top-center",
        });
      } else {
        toast.error("Thêm vào giỏ hàng", {
          description: response.message,
          position: "top-center",
        });
      }
    });
  };

  return (
    <div className="p-3">
      <div className="flex flex-col">
        {data.status && (
          <span className="text-[#fa4500] text-[17px] font-medium">
            {data.status}
          </span>
        )}

        <h1 className="text-[40px] mb-[25px] font-semibold leading-none">
          {data.name}
        </h1>

        <div className="flex gap-2 items-center">
          <h2 className="text-[22px] text-[#232323] font-semibold">
            {formatCurrency(data.priceBase + totalOptionPrice)}
          </h2>
          {data?.priceBase > 0 && (
            <h2 className="text-[#919191] text-sm line-through">
              {formatCurrency((data.priceBase + totalOptionPrice) * 1.25)}
            </h2>
          )}
        </div>
        {!user && (
          <span className="p-2 mt-2 text-nowrap bg-[#f7a40a1a] text-sm text-[#f7a40a] rounded-md flex items-center">
            <Percent /> Ưu đãi HOT dành riêng cho bạn – nhận ngay!.
            <Link href="/dang-nhap" className="underline ml-1 text-nowrap">
              Đăng nhập
            </Link>
          </span>
        )}

        <h2 className="text-[#82869e] text-xs mt-2">(Đã bao gồm VAT)</h2>

        <DescriptionShort data={data.shortDescription} />

        <OptionProduct
          select={select}
          option={option}
          onSelect={handleOptionSelect}
          onOption={setOption}
        />

        <div className="flex justify-between mt-5 items-center">
          <span className="font-medium">Số lượng</span>

          <QuantitySelector
            quantity={select.quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
        </div>

        <div className="mt-5 p-5 bg-[#f8f8f8] ">
          <div className="flex gap-3 items-center">
            <span className="text-[22px] text-[#232323] font-semibold">
              {formatCurrency(
                (data.priceBase + totalOptionPrice) * select.quantity
              )}
            </span>
            <s className="text-[#919191] text-sm">
              {formatCurrency(
                (data.priceBase + totalOptionPrice) * 1.25 * select.quantity
              )}
            </s>
          </div>
          <div className="mt-3">
            <Button
              onClick={
                user
                  ? () => addCart(select)
                  : () => {
                      toast.warning("Yêu cầu đăng nhập", {
                        description: "Đăng nhập để có thể thêm vào giỏ hàng.",
                        position: "top-center",
                        action: {
                          label: "Đăng nhập",
                          onClick: () => router.push("/dang-nhap"),
                        },
                      });
                    }
              }
              text={"Thêm vào giỏ hàng"}
              variant={"blue"}
              propClassName={"w-full"}
              disabled={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
