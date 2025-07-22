import React from "react";
import { Minus, Plus } from "lucide-react";
import { ICartProduct } from "@/interfaces/models/ICart.interface";

interface QuantitySelectorProps {
  item: ICartProduct;
  onUpdateQuantity: (item: ICartProduct) => void;
  min?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  item,
  onUpdateQuantity,
  min = 1,
}) => {
  const isDecreaseDisabled = item.quantity <= min;

  const handleDecrease = () => {
    if (!isDecreaseDisabled) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      onUpdateQuantity(updatedItem);
    }
  };

  const handleIncrease = () => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };

    onUpdateQuantity(updatedItem);
  };

  return (
    <div className="flex items-center">
      <div
        onClick={handleDecrease}
        className={`w-[35px] h-[35px] cursor-pointer flex items-center justify-center transition-colors duration-200
          ${
            isDecreaseDisabled
              ? "bg-[#ebe9e9] cursor-not-allowed"
              : "bg-[#f8f8f8] hover:bg-[#e0e0e0]"
          }`}
      >
        <Minus size={20} />
      </div>

      <div className="w-[35px] h-[35px] bg-[#f8f8f8] flex items-center justify-center">
        {item.quantity}
      </div>

      <div
        onClick={handleIncrease}
        className="w-[35px] h-[35px] cursor-pointer bg-[#f8f8f8] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors duration-200"
      >
        <Plus size={20} />
      </div>
    </div>
  );
};

export default QuantitySelector;
