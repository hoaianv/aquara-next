import { detail, getOption } from "@/apis/models/product.apis";
import { findOne } from "@/apis/models/properties.apis";
import AlbumProduct from "@/components/product/albumProduct";
import InfoProduct from "@/components/product/infoProduct";
import ProductNotFound from "@/components/product/productNotFound";
import Properties from "@/components/product/properties";
import Breadcrumb from "@/components/ui/breadcrumb";
import Post from "@/components/ui/post";

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const {
    status: detailStatus,
    error_code: detailErrorCode,
    data: detailData,
  } = await detail(params.slug);
  const {
    status: optionStatus,
    error_code: optionErrorCode,
    data: optionData,
  } = await getOption(params.slug);
  const {
    status: propertyStatus,
    error_code: propertyErrorCode,
    data: propertyData,
  } = await findOne(params.slug);

  return detailStatus && detailErrorCode === 200 ? (
    <div className="mx-auto h-full  2xl:max-w-[1280px] sm:px-[15px] xl:px-[80px]   xl:max-w-6xl  lg:max-w-4xl md:max-w-lg  sm:max-w-md    max-w-sm">
      <div className="py-3">
        <Breadcrumb
          items={detailData?.breadcrumb ?? []}
          className="text-base"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-6">
          <AlbumProduct images={detailData?.product?.images ?? []} />
          {propertyStatus &&
            propertyErrorCode === 200 &&
            propertyData?.properties?.length > 0 && (
              <Properties data={propertyData?.properties} />
            )}
        </div>
        <div className="col-span-4">
          {detailData?.product && (
            <InfoProduct
              dataOption={
                optionStatus && optionErrorCode === 200 ? optionData : []
              }
              data={detailData?.product}
            />
          )}
        </div>
      </div>

      {detailData?.product.description && (
        <div className="p-3 mt-5 bg-white rounded-md shadow-lg">
          <Post data={detailData?.product?.description} />
        </div>
      )}
    </div>
  ) : (
    <ProductNotFound />
  );
}
