import ListCart from "@/components/cart/listCart";
import TotalCart from "@/components/cart/totalCart";

export default function Cart() {
  return (
    <div className="mx-auto py-[55px]  h-full 2xl:max-w-[1240px] sm:px-[15px] xl:px-[20px] xl:max-w-6xl lg:max-w-4xl md:max-w-lg  sm:max-w-md max-w-sm">
      <div className="pb-10">
        <span className="text-3xl font-medium">Giỏ hàng</span>
      </div>
      <div className="grid grid-cols-10 gap-3">
        <ListCart />
        <TotalCart />
      </div>
    </div>
  );
}
