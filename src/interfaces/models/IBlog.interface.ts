import { IBreadcrumb, IPagination } from "@/interfaces/common";

export interface IBlog {
  id: number;
  title: string;
  slug: string;
  content: string;
  picture?: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBlogCard {
  id: number;
  title: string;
  slug: string;
  picture?: string;
  author?: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResponseBlog {
  status: boolean;
  error_code: number;
  message: string;
  data?: {
    blog: IBlog;
    breadcrumb: IBreadcrumb[];
  };
}

export interface IResponseBlogs {
  status: boolean;
  error_code: number;
  message: string;
  data: {
    blogs: IBlogCard[];
    meta: IPagination;
  };
}

export interface IBlogMeta {
  title: string;
  description: string;
  keywords: string;
  icons: {
    rel: string;
    url: string;
  }[];
  alternates: {
    canonical: string;
  };
  robots: {
    index?: boolean;
    follow?: boolean;
    maxImagePreview?: "none" | "standard" | "large";
    maxSnippet?: number;
    maxVideoPreview?: number;
  };
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
    locale: string;
    type: string;
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
  };
}

export interface IBlogMetaResponse {
  status: boolean;
  error_code: number;
  message: string;
  data: IBlogMeta;
}
