"use server";

import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import {
  ICheckoutRequest,
  ICheckoutResponse,
  ICreateOrderRequest,
  IGetOrderResponse,
} from "@/interfaces/models/IOrder.interface";
import { brand } from "@/constants/routes";

const ORDER = "ORDER";

export async function create(payload: ICreateOrderRequest) {
  const result = await api<IGetOrderResponse>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.ORDER}/${CONST_APIS_COMMON.SHOW_ORDER}`,
    options: {
      method: CONST_METHODS.POST,
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  });

  return result;
}

export async function getOrder(id: number) {
  const result = await api<IGetOrderResponse>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.ORDER}/${CONST_APIS_COMMON.GET_ORDER}/${id}/${brand}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}

export async function checkout(payload: ICheckoutRequest, id: number) {
  const result = await api<ICheckoutResponse>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.ORDER}/${CONST_APIS_COMMON.CHECKOUT}/${id}`,
    options: {
      method: CONST_METHODS.POST,
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  });

  return result;
}
