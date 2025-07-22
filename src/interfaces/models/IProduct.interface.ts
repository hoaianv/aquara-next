import { IBreadcrumb, IPagination } from "@/interfaces/common";
import { ICategory } from "@/interfaces/models/IProductsCategories.interface";

export interface IImage {
  width: number;
  height: number;
  src: string;
}
export interface IProductCard {
  id: number;
  name: string;
  description: string;
  priceBase: number;
  picture: string;
  url: string;
  stock: number;
}
export interface IOptionValue {
  id: number;
  optionId: number;
  value: string;
  pvId: string | null;
  price: number;
  isChild: boolean;
}

export interface IOption {
  optionId: number;
  optionName: string;
  values: IOptionValue[];
}

export interface IResponseOption {
  status: boolean;
  error_code: number;
  message: string;
  data: IOption[];
}

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  categoryId: number;
  priceBase: number;
  images: IImage[];
  stock: number;
  picture: string;
  status: boolean;
  quantity: number;
}

export interface IResponseProduct {
  status: boolean;
  error_code: number;
  message: string;
  data?: {
    breadcrumb: IBreadcrumb[];
    product: IProduct;
  };
}

export interface INewProduct {
  id: number;
  title: string;
  url: string;
  description: string;
  picture: string;
  name: string;
  priceBase: number;
}

export interface IResponseNewProduct {
  status: boolean;
  message: string;
  error_code: number;
  data: INewProduct[];
}

export interface ICategoryProducts extends ICategory {
  products: INewProduct[];
}

export interface IResponseCategoryProducts {
  status: boolean;
  error_code: number;
  message: string;
  data: ICategoryProducts[];
}

export interface IOptionSelect {
  optionId: number;
  valueId: number;
  price: number;
  name: string;
}

export interface IUpdateCart {
  cartId: number;
  brand: string;
  quantity: number;
}

export interface IResponseProductsCollection {
  status: boolean;
  error_code: number;
  data: {
    breadcrumb: IBreadcrumb[];
    meta: IPagination;
    banner: string;
    products: INewProduct[];
  };
}

export interface IResponseProductsFooter {
  status: boolean;
  error_code: number;
  message: string;
  data: IProductCard[];
}
export interface IResponseProductMeta {
  status: boolean;
  error_code: number;
  message: string;
  data: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    image: {
      url: string;
      width: number;
      height: number;
    };
  };
}
