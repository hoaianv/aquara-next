"use client";
import { getOption } from "@/apis/models/product.apis";
import { IAddCart } from "@/interfaces/models/ICart.interface";
import { IOption } from "@/interfaces/models/IProduct.interface";

interface OptionProps {
  option: IOption[];
  onOption: (data: any) => void;
  select: IAddCart;
  onSelect: (
    index: number,
    optionId: number,
    valueId: number,
    isChild: boolean,
    newOptionData?: IOption[],
    price?: number,
    name?: string
  ) => void;
}
const OptionProduct = ({ option, onOption, select, onSelect }: OptionProps) => {
  const handleSelectValue = async (
    id: number,
    optionId: number,
    index: number,
    price: number,
    name: string
  ) => {
    const response = await getOption(select.slug, id);

    if (response.error_code === 200 && response.status) {
      onOption(response.data);
      onSelect(index, optionId, id, false, response.data, price, name);
    }
  };

  return (
    option.length > 0 &&
    option.map((item, idx) => (
      <div className="mt-5" key={item.optionId}>
        <div>
          <span className="text-[20px]">{item.optionName}</span>
          <div className="flex flex-col gap-3 mt-2">
            {item.values.map((opt) => {
              const isActive = select.option.some(
                (i) => i.optionId === item.optionId && i.valueId === opt.id
              );

              return (
                <div
                  key={opt.id}
                  onClick={
                    opt.isChild
                      ? () =>
                          onSelect(
                            idx,
                            item.optionId,
                            opt.id,
                            opt.isChild,
                            undefined,
                            opt.price,
                            opt.value
                          )
                      : () =>
                          handleSelectValue(
                            opt.id,
                            item.optionId,
                            idx,
                            opt.price,
                            opt.value
                          )
                  }
                  className={`border-[1px] py-3 px-4 rounded-md ${
                    isActive ? "border-[#2164ff]" : "border-[#c0c1c2]"
                  }`}
                >
                  <span className="font-medium text-[17px]">{opt.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ))
  );
};

export default OptionProduct;
