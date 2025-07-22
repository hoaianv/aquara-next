import { detail } from "@/apis/models/blog.apis";
import NotFoundBlog from "@/components/blog/NotFoundBlog";
import Breadcrumb from "@/components/ui/breadcrumb";

export default async function Blog({ params }: { params: { slug: string } }) {
  const { status, error_code, data } = await detail(params.slug);

  return error_code == 200 && status ? (
    <div className="2xl:max-w-[1120px]  mx-auto mt-5  xl:max-w-6xl lg:max-w-4xl md:max-w-lg  sm:max-w-md max-w-sm">
      <Breadcrumb items={data?.breadcrumb || []} />
      <div className="my-[20px] bg-white rounded-md p-4 shadow-sm h-full ">
        <div className="text-center pb-5">
          <h1 className="text-3xl font-medium">{data?.blog.title}</h1>
          <div className="flex justify-end">
            <span className="text-xs text-[#888888] ">
              {data?.blog.updatedAt}
            </span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.blog.content ?? "" }} />
      </div>
    </div>
  ) : (
    <NotFoundBlog />
  );
}
