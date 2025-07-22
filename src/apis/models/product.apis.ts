"use server";

import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import {
  IResponseCategoryProducts,
  IResponseNewProduct,
  IResponseOption,
  IResponseProduct,
  IResponseProductMeta,
  IResponseProductsCollection,
  IResponseProductsFooter,
} from "@/interfaces/models/IProduct.interface";
import { brand } from "@/constants/routes";
import { IResponseSearchProduct } from "@/interfaces/common";

const PRODUCT = "PRODUCT";
const OPTION = "OPTION";

export async function detail(payload: string) {
  const result = await api<IResponseProduct>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.PRODUCT}/${brand}/${payload}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}

export async function newProducts() {
  const result = await api<IResponseNewProduct>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.PRODUCT}/${CONST_APIS_COMMON.NEW_PRODUCT}?slug_brand=${brand}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}

export async function getProductCategory() {
  const result = await api<IResponseCategoryProducts>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.PRODUCT}/${CONST_APIS_COMMON.PRODUCT_CATEGORY}?slug_brand=${brand}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}

export async function getOption(slug: string, id?: number) {
  const result = await api<IResponseOption>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.PRODUCT}/${
      CONST_APIS_COMMON.OPTION_PRODUCT
    }?slug_brand=${brand}&slug_product=${slug}&selected_value_id=${id ?? null}`,
    options: {
      method: CONST_METHODS.GET,
      next: {
        tags: [OPTION],
      },
    },
  });

  return result;
}

export async function getProductsCollection(slug: string, params?: string) {
  const result = await api<IResponseProductsCollection>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.PRODUCT}/${CONST_APIS_COMMON.PRODUCT_BY_CATEGORY}/?slug_category=${slug}&slug_brand=${brand}&${params}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}

export async function find(keyWord: string) {
  const result = await api<IResponseSearchProduct>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.PRODUCT}/${CONST_APIS_COMMON.SEARCH}/?brand=${brand}&search=${keyWord}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}

export async function getProductsFooter() {
  const result = await api<IResponseProductsFooter>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.PRODUCT}/${CONST_APIS_COMMON.GET_PRODUCTS_FOOTER}/${brand}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}
export async function meta(payload: string) {
  const result = await api<IResponseProductMeta>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.PRODUCT}/${CONST_APIS_COMMON.META}/${brand}/${payload}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}
