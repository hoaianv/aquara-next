import { meta } from "@/apis/models/category.apis";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  const { data, status, error_code } = await meta(slug);

  return error_code === 200 && status
    ? data
    : {
        title: "Không tìm thấy nội dung",
        description: "Trang bạn đang tìm không tồn tại.",
      };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className=" ">{children}</div>;
}
