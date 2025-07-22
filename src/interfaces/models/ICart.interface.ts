import { IOptionSelect } from "@/interfaces/models/IProduct.interface";

export interface ICartProduct {
  id: number;
  productId: number;
  name: string;
  slug: string;
  picture: string;
  priceBase: number;
  quantity: number;
  selectedOptions: IOptionSelect[];
  totalPrice: number;
}

export interface ICart {
  userId?: number;
  items: ICartProduct[];
  totalItems: number;
  totalAmount: number;
}
export interface IResponseCart {
  status: boolean;
  error_code: number;
  message: string;
  data?: ICart;
}

export interface IAddCart {
  brand: string;
  productId: number;
  quantity: number;
  slug: string;
  option: IOptionSelect[];
}

export interface IAddCartResponse {
  status: boolean;
  error_code: number;
  message: string;
  data: ICartProduct[];
}

export interface IUpdateCartResponse {
  status: boolean;
  error_code: number;
  message: string;
  data?: ICartProduct[];
  errors?: ICartError[];
}

export interface IDeleteCart {
  cartId: number;
  brand: string;
}

export interface IDeleteCartResponse {
  status: boolean;
  error_code: number;
  message: string;
  deleted: number;
  ids: number[];
  errors?: ICartError[];
}
export interface IUpdateCart {
  cartId: number;
  brand: string;
  quantity: number;
}
export interface IUpdateCartRequest {
  items: IUpdateCart[];
}
export interface ICartError {
  cartId: number | null;
  brand: string | null;
  message: string;
}
export interface IDeleteCartRequest {
  items: IDeleteCart[];
}
