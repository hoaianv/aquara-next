"use client";
import CheckboxField from "@/components/ui/checkboxField";
import QuantitySelector from "@/components/ui/quantitySelector";
import { urlImage } from "@/constants/routes";
import { ICartProduct } from "@/interfaces/models/ICart.interface";
import { formatCurrency } from "@/until";
import Image from "next/image";

interface CardCartProps {
  item: ICartProduct;
  onChooseSelect: (item: ICartProduct) => void;
  onUpdateQuantity: (item: ICartProduct) => void;
  onChooseProduct: (item: ICartProduct) => void;
  loading: boolean;
  checked: boolean;
}

export default function CardCart({
  item,
  onChooseSelect,
  onUpdateQuantity,
  onChooseProduct,
  checked,
  loading,
}: CardCartProps) {
  return (
    <div className="grid grid-cols-12  py-3 border-b border-[#ededed] items-center gap-1">
      <div className="col-span-3">
        <div className="flex items-center">
          <CheckboxField
            checked={checked}
            id="subscribe"
            label=""
            onChange={() => onChooseProduct(item)}
          />
          <Image
            width={100}
            height={100}
            src={urlImage + item.picture}
            alt={item.name}
          />
        </div>
      </div>

      <div className="col-span-5">
        <div className="flex flex-col">
          <span className="text-base font-medium line-clamp-2">
            {item.name}
          </span>
          <span className="text-sm text-[#757575] line-clamp-1">
            {item.selectedOptions.map((opt) => opt.name).join(", ")}
          </span>
        </div>
      </div>
      <div className="col-span-2">
        <QuantitySelector
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          min={1}
        />
      </div>
      <div className="col-span-2">
        <div className="flex flex-col items-end text-center">
          <span className="text-base font-medium">
            {formatCurrency(item.totalPrice)}
          </span>
          <s className="text-sm text-[#757575]">
            {formatCurrency(item.totalPrice * 1.25)}
          </s>
          <span
            onClick={() => !loading && onChooseSelect(item)}
            className={[
              "underline text-sm",
              loading
                ? "text-gray-400 cursor-not-allowed pointer-events-none"
                : "text-[#757575] cursor-pointer hover:text-[#333]",
            ].join(" ")}
          >
            Xóa
          </span>
        </div>
      </div>
    </div>
  );
}
