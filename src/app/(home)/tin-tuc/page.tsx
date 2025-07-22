import { getAll } from "@/apis/models/blog.apis";
import Blogs from "@/components/blog/Blogs";
import NotFoundBlogs from "@/components/blog/NotFoundBlogs";
import Breadcrumb from "@/components/ui/breadcrumb";

interface BlogProps {
  searchParams?: {
    page?: string;
    [key: string]: string | string[] | undefined;
  };
}
export default async function News({ searchParams }: BlogProps) {
  const { page } = searchParams ?? {};
  const { error_code, status, data } = await getAll(page);
  return (
    <div className="mx-auto my-[20px]  h-full 2xl:max-w-[1680px]  sm:px-[15px] xl:px-[80px] xl:max-w-6xl lg:max-w-4xl md:max-w-lg  sm:max-w-md max-w-sm">
      <Breadcrumb
        items={[
          {
            label: "Tin tức",
            href: "/tin-tuc",
          },
        ]}
        className="text-base"
      />
      {status && error_code === 200 && data.blogs.length > 0 ? (
        <Blogs data={data} />
      ) : (
        <NotFoundBlogs />
      )}
    </div>
  );
}
