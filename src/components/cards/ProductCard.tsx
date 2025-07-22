import { INewProduct } from "@/interfaces/models/IProduct.interface";
import { formatCurrency } from "@/until";
import Image from "next/image";
import Link from "next/link";

interface ProductCard {
  item: INewProduct;
}

const ProductCard: React.FC<ProductCard> = ({ item }) => {
  return (
    <div className="bg-white hover:bg-gray-50 rounded-md shadow-sm transition-colors duration-200 cursor-pointer">
      <Link href={`/san-pham/${item.url}`}>
        <div className="w-[250px] h-[250px] flex items-center justify-center overflow-hidden rounded-t-md">
          <Image
            loading="lazy"
            src={item.picture}
            alt={item.name}
            width={250}
            height={250}
            className="transition-transform duration-300 hover:-rotate-6 object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-5 p-3">
        <Link href={`/san-pham/${item.url}`}>
          <div className="  flex flex-col justify-betwee  n ">
            <span className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#03060B] font-medium h-[56px] line-clamp-2">
              {item.name}
            </span>
          </div>
        </Link>
        <div className="flex flex-col xl:flex-row gap-1 items-center ">
          <span className="text-[#03060B] text-base   font-semibold">
            {formatCurrency(item.priceBase)}
          </span>
          <s className="text-xs font-normal text-[#707070]">
            {formatCurrency(item.priceBase * 1.25)}
          </s>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
