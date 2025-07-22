"use server";

import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import { brand } from "@/constants/routes";
import {
  IResponseCategory,
  IResponseCategoryMeta,
} from "@/interfaces/models/IProductsCategories.interface";

const CATEGORY = "CATEGORY";

export async function getAll() {
  const result = await api<IResponseCategory>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.CATEGORY}/${CONST_APIS_COMMON.GETALL}?slug_brand=${brand}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}

export async function meta(payload: string) {
  const result = await api<IResponseCategoryMeta>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.CATEGORY}/${CONST_APIS_COMMON.META}/${brand}/${payload}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}
