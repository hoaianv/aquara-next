import { detail } from "@/apis/models/blog.apis";
import NotFoundBlog from "@/components/blog/NotFoundBlog";
import Breadcrumb from "@/components/ui/breadcrumb";
import Post from "@/components/ui/post";
import { Calendar } from "lucide-react";

export default async function Blog({ params }: { params: { slug: string } }) {
  const { status, error_code, data } = await detail(params.slug);

  return error_code == 200 && status ? (
    <div className="2xl:max-w-[1120px]  mx-auto mt-5  xl:max-w-6xl lg:max-w-4xl md:max-w-lg  sm:max-w-md max-w-sm">
      <Breadcrumb items={data?.breadcrumb || []} />
      <div className="my-[20px] bg-white rounded-md p-4 shadow-sm h-full ">
        <div className="text-center pb-5">
          <h1
            className="font-bold 
                text-gray-900 
                mb-4 
                leading-tight
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl"
          >
            {data?.blog?.title}
          </h1>

          <div
            className="flex 
                flex-col
                gap-2
                text-gray-500 
                mb-6
                sm:flex-row
                sm:flex-wrap 
                sm:items-center 
                sm:gap-4 
                text-xs
                sm:text-sm"
          >
            <div className="flex items-center gap-1">
              <Calendar size={14} className="sm:w-4 sm:h-4" />
              <time dateTime={data?.blog?.createdAt}>
                {data?.blog?.createdAt}
              </time>
            </div>
          </div>
        </div>
        <Post data={data?.blog.content ?? ""} />
      </div>
    </div>
  ) : (
    <NotFoundBlog />
  );
}
