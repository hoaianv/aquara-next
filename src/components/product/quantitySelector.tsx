import React from "react";
import { Minus, Plus } from "lucide-react";
import { IProduct } from "@/interfaces/models/IProduct.interface";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onDecrease,
  onIncrease,
}) => {
  return (
    <div className="flex items-center">
      <div
        onClick={quantity <= 1 ? undefined : onDecrease}
        className={`w-[35px] h-[35px] cursor-pointer flex items-center justify-center transition-colors duration-200
          ${
            quantity <= 1
              ? "bg-[#ebe9e9] cursor-not-allowed"
              : "bg-[#f8f8f8] hover:bg-[#e0e0e0]"
          }`}
      >
        <Minus size={20} />
      </div>

      <div className="w-[35px] h-[35px] bg-[#f8f8f8] flex items-center justify-center">
        {quantity}
      </div>

      <div
        onClick={onIncrease}
        className="w-[35px] h-[35px] cursor-pointer bg-[#f8f8f8] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors duration-200"
      >
        <Plus size={20} />
      </div>
    </div>
  );
};

export default QuantitySelector;
