import { getAll } from "@/apis/models/documents.api";
import Banners from "@/components/infoProducts/banners";
import Documents from "@/components/infoProducts/document";
import Breadcrumb from "@/components/ui/breadcrumb";

interface DocumentsProps {
  searchParams?: {
    page?: string;
    [key: string]: string | string[] | undefined;
  };
}

export default async function Document({ searchParams }: DocumentsProps) {
  const { page } = searchParams ?? {};
  const { error_code, status, data } = await getAll(page);

  return (
    error_code === 200 &&
    status && (
      <div className="mx-auto my-[20px]  h-full    2xl:max-w-[1120px]  sm:px-[15px] xl:px-[80px] xl:max-w-6xl lg:max-w-4xl md:max-w-lg  sm:max-w-md max-w-sm">
        <Breadcrumb
          items={[
            {
              label: "Thông tin sản phẩm",
              href: "/thong-tin-san-pham",
            },
          ]}
          className="text-base"
        />
        <Banners />
        <Documents data={data.data} meta={data.meta} />
      </div>
    )
  );
}
