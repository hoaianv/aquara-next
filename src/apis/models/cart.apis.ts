"use server";

import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import {
  IAddCart,
  IAddCartResponse,
  IDeleteCartRequest,
  IDeleteCartResponse,
  IResponseCart,
  IUpdateCartRequest,
  IUpdateCartResponse,
} from "@/interfaces/models/ICart.interface";
import { brand } from "@/constants/routes";

export async function getAll() {
  const result = await api<IResponseCart>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.CART}/${CONST_APIS_COMMON.GET_ALL}/${brand}`,
    options: {
      method: CONST_METHODS.GET,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  });

  return result;
}

export async function create(payload: IAddCart[]) {
  const result = await api<IAddCartResponse>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.CART}/${CONST_APIS_COMMON.ADD_CART}`,
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

export async function update(payload: IUpdateCartRequest) {
  const result = await api<IUpdateCartResponse>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.CART}/${CONST_APIS_COMMON.UPDATE_CART}`,
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

export async function remove(payload: IDeleteCartRequest) {
  const result = await api<IDeleteCartResponse>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.CART}/${CONST_APIS_COMMON.DELETE_CART}`,
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
