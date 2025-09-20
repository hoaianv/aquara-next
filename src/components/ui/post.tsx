export default function Post({ data }: { data: string }) {
  return (
    <div
      className={` prose prose-sm sm:prose md:prose-lg
  !max-w-none sm:!max-w-none md:!max-w-none lg:!max-w-none
  prose-headings:text-gray-900
  prose-p:text-gray-700 prose-p:leading-relaxed
  prose-img:w-full prose-img:rounded-lg prose-img:shadow-md
  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
  overflow-x-auto md:overflow-visible break-words
  prose-pre:overflow-x-auto
  [&_table]:w-full [&_table]:min-w-[640px] [&_th]:text-left [&_td]:align-top`}
      dangerouslySetInnerHTML={{
        __html: data || "",
      }}
    />
  );
}
