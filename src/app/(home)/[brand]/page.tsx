import { aboutBrand } from "@/apis/common/layout.apis";
import Post from "@/components/ui/post";

export default async function Cart({ params }: { params: { brand: string } }) {
  const { brand } = params;

  const { data, error_code, status } = await aboutBrand(brand);

  return status && error_code === 200 ? (
    <div className="mx-auto h-full  2xl:max-w-[1680px] sm:px-[15px] 2xl:px-[120px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
      <div className="mt-5">
        <Post data={data?.content ?? ""} />
      </div>
    </div>
  ) : (
    <></>
  );
}
