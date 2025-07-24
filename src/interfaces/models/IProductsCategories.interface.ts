import { INewProduct } from "@/interfaces/models/IProduct.interface";

export interface ICategory {
  id: number;
  title: string;
  picture: string;
  banner: string;
  description: string;
  url: string;
  showHome: number;
  order: number;
}

export interface IResponseCategory {
  status: boolean;
  message: string;
  error_code: number;
  data: ICategory[];
}

export interface ICategoryNode {
  catId: number;
  name: string;
  url: string;
  picture: string;
  banner: string;
  active: boolean;
  children?: ICategoryNode[];
  products?: INewProduct[];
}

export interface IResponseCategoryTree {
  status: boolean;
  error_code?: number;
  message?: string;
  data: ICategoryNode[];
}

export interface IResponseCategoryMeta {
  status: boolean;
  error_code: number;
  message: string;
  data: {
    title: string;
    description: string;
    icons: {
      rel: string;
      url: string;
    }[];
    keywords: string;
    openGraph: {
      title: string;
      description: string;
      url: string;
      images: {
        url: string;
        width: number;
        height: number;
      }[];
    };
    alternates: {
      canonical: string;
    };
    authors: {
      name: string;
      url: string;
    }[];
  };
}
