"use client";
import BlogCard from "@/components/blog/blogCard";
import Pagination from "@/components/ui/pagination";
import { IPagination } from "@/interfaces/common";
import { IBlogCard } from "@/interfaces/models/IBlog.interface";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
type BlogsProps = {
  data: {
    blogs: IBlogCard[];
    meta: IPagination;
  };
};

const Blogs = ({ data }: BlogsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber) {
      params.set("page", `${pageNumber}`);
    } else {
      params.delete("page");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="mt-10   mx-auto  overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5 pb-10">
          {data.blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <Pagination
          onPageChange={handlePageChange}
          currentPage={data.meta.currentPage}
          total={data.meta.total}
          itemsPerPage={10}
          scrollToTop={true}
        />
      </motion.div>
    </div>
  );
};

export default Blogs;
