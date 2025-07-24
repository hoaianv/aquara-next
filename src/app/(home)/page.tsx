import { newProducts } from "@/apis/models/product.apis";
import BannerCompatibility from "@/components/home/bannerCompatibility";
import { bannerKeys } from "@/constants/values.constant";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/home/banner"), {
  ssr: false,
});
const ProductsHighlight = dynamic(
  () => import("@/components/home/productsHighlight"),
  {
    ssr: false,
  }
);

const Advertise = dynamic(() => import("@/components/ui/advertise"), {
  ssr: false,
});

export default async function Home() {
  const { data } = await newProducts();

  return (
    <>
      <Banner />
      <Advertise keyName={bannerKeys.bannerVideoAdvertise} />
      <ProductsHighlight data={data} />
      <Advertise keyName={bannerKeys.bannerPartner} />
      <BannerCompatibility />
    </>
  );
}
