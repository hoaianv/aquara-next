import { ICartProduct } from "@/interfaces/models/ICart.interface";
import { IOptionSelect } from "@/interfaces/models/IProduct.interface";

export interface IOrderItem {
  cartId: number;
  productId: number;
  quantity: number;
  selectedOptions: IOptionSelect[];
}

export interface IOrder {
  id: number;
  userId?: number;
  items: ICartProduct[];
  total: number;
}

export interface ICreateOrderRequest {
  brand: string;
  items: IOrderItem[];
}

export interface ICheckoutRequest {
  brand: string;
  shippingAddress: string;
  deliveryMethod: string;
  email: string;
  phone: string;
  fullName: string;
  note?: string;
}

export interface ICreateOrderResponse {
  status: boolean;
  error_code: number;
  message: string;
  data?: IOrder;
}

export interface IOrderProduct {
  brand: string;
  productId: number;
  name: string;
  slug: string;
  picture: string;
  priceBase: number;
  price: number;
  total: number;
  options: string;
  quantity: number;
  selectedOptions: IOptionSelect[];
}

export interface IGetOrderResponse {
  status: boolean;
  error_code: number;
  message: string;
  data: {
    items: IOrderProduct[];
    orderId: number;
    total: number;
  };
}

export interface ICheckoutResponse {
  status: boolean;
  error_code: number;
  message: string;
  data: [];
}
