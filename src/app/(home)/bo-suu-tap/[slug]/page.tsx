import { getProductsCollection } from "@/apis/models/product.apis";
import ProductCard from "@/components/cards/ProductCard";
import Empty from "@/components/collections/empty";
import Filter from "@/components/collections/filter";
import FilterSelect from "@/components/collections/filterSelect";
import NotFoundCollection from "@/components/collections/notFoundCollection";
import PaginationCollections from "@/components/collections/paginationCollections";
import Breadcrumb from "@/components/ui/breadcrumb";
import { urlImage } from "@/constants/routes";
import Image from "next/image";

interface CollectionsProps {
  params: {
    slug: string;
  };
  searchParams?: Record<string, string | string[]>;
}

export default async function Collections({
  params,
  searchParams,
}: CollectionsProps) {
  const { slug } = params;
  const queryParams = new URLSearchParams(
    Object.fromEntries(
      Object.entries(searchParams ?? {}).map(([key, value]) => [
        key,
        Array.isArray(value) ? value.join(",") : value ?? "",
      ])
    )
  ).toString();
  const { data, status, error_code } = await getProductsCollection(
    slug,
    queryParams
  );

  return status && error_code == 200 ? (
    <div>
      <div className="h-[400px] w-full relative">
        <Image
          src={urlImage + data.banner}
          alt="collection-1"
          fill
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>
      <div className="mx-auto h-full  2xl:max-w-[1280px] sm:px-[15px] xl:px-[80px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
        <div className="grid grid-cols-10 pt-5 pb-10">
          <div className="col-span-8">
            {data.breadcrumb && data.breadcrumb.length > 0 && (
              <Breadcrumb items={data.breadcrumb} className="text-base" />
            )}
          </div>
          <div className="col-span-2 flex justify-end">
            <FilterSelect />
          </div>
          <div className="col-span-3 ">
            <div className="pr-5 py-5">
              <Filter />
            </div>
          </div>

          <div className="col-span-7">
            {data.products && data.products.length > 0 ? (
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {data.products.map((i) => (
                  <ProductCard key={i.id} item={i} />
                ))}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </div>

      <PaginationCollections meta={data.meta} />
    </div>
  ) : (
    <NotFoundCollection />
  );
}
