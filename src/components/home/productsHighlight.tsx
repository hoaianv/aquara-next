"use client";
import Button from "@/components/ui/button";
import { INewProduct } from "@/interfaces/models/IProduct.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HighlightProductProps {
  data: INewProduct[];
}

const ProductsHighlight = ({ data }: HighlightProductProps) => {
  const router = useRouter();

  return (
    <div className="my-4">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4
"
      >
        {data?.map((item) => (
          <div key={item.id} className="w-full h-[500px] relative">
            <Image
              src={item.picture}
              alt={item.name}
              fill
              className="object-cover"
            />
            <Button
              propClassName={"text-white absolute bottom-4 right-4 z-10"}
              variant="transparent"
              onClick={() => router.push(`${item.url}`)}
              text="Learn More"
            />
            <div className=" absolute bottom-4 left-4">
              <span className="text-white text-2xl font-semibold">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsHighlight;
