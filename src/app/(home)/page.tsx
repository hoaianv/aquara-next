import dynamic from "next/dynamic";
import { getAll } from "@/apis/models/category.apis";
import { getProductCategory, newProducts } from "@/apis/models/product.apis";
import { getAll as getAllProductReviews } from "@/apis/models/productReviews.apis";

import Brand from "@/components/home/brand";
import ReasonBuy from "@/components/home/reasonBuy";
import { IParams } from "@/interfaces/common";

const NewProduct = dynamic(() => import("@/components/home/newProducts"), {
  ssr: false,
});
const ProductSeries = dynamic(() => import("@/components/home/productSeries"), {
  ssr: false,
});
const TwoBannerHome = dynamic(() => import("@/components/home/twoBannerHome"), {
  ssr: false,
});
const Banner = dynamic(() => import("@/components/home/banner"), {
  ssr: false,
});
const ProductReviews = dynamic(
  () => import("@/components/home/productReviews"),
  {
    ssr: false,
  }
);

const BecomePart = dynamic(() => import("@/components/home/becomePart"), {
  ssr: false,
});

export default async function Home() {
  const payloadProductReviews: IParams[] = [{ key: "limit", value: "11" }];

  const [
    productsResponse,
    categoriesResponse,
    productsCategoryResponse,
    productReviewsResponse,
  ] = await Promise.all([
    newProducts(),
    getAll(),
    getProductCategory(),
    getAllProductReviews("1", payloadProductReviews),
  ]);

  const {
    data: productsData,
    error_code: productsErrorCode,
    status: productsStatus,
  } = productsResponse;

  const {
    data: productReviewsData,
    error_code: productReviewsErrorCode,
    status: productReviewsStatus,
  } = productReviewsResponse;

  const {
    data: categoriesData,
    error_code: categoriesErrorCode,
    status: categoriesStatus,
  } = categoriesResponse;

  const {
    data: productsCategoryData,
    error_code: productsCategoryErrorCode,
    status: productsCategoryStatus,
  } = productsCategoryResponse;

  const hasValidProducts =
    productsErrorCode === 200 &&
    productsStatus &&
    Array.isArray(productsData) &&
    productsData.length > 0;

  const hasValidCategories =
    categoriesErrorCode === 200 &&
    categoriesStatus &&
    Array.isArray(categoriesData) &&
    categoriesData.length > 0;
  const hasValidProductsCategory =
    productsCategoryErrorCode === 200 &&
    productsCategoryStatus &&
    Array.isArray(productsCategoryData) &&
    productsCategoryData.length > 0;

  const hasValidProductReviews =
    productReviewsErrorCode === 200 &&
    productReviewsStatus &&
    Array.isArray(productReviewsData) &&
    productReviewsData.length > 0;

  return (
    <>
      <Banner />

      {hasValidCategories && <Brand data={categoriesData} />}
      {hasValidProducts && <NewProduct data={productsData} />}

      {hasValidProductsCategory && (
        <ProductSeries data={productsCategoryData} />
      )}

      <TwoBannerHome />
      <ReasonBuy />

      {hasValidProductReviews && <ProductReviews data={productReviewsData} />}

      <BecomePart />
    </>
  );
}
