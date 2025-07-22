"use server";

import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import { brand } from "@/constants/routes";
import { IResponseCategoryTree } from "@/interfaces/models/IProductsCategories.interface";
import { IResponseBrand } from "@/interfaces/models/IBrandArticles.interface";
import { IFooterResponse } from "@/interfaces/common";

const LAYOUT = "LAYOUT";

export async function getHeader() {
  const result = await api<IResponseCategoryTree>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.LAYOUT}/${CONST_APIS_COMMON.GET_HEADER}?brand=${brand}`,
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

export async function getFooter() {
  const result = await api<IFooterResponse>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.LAYOUT}/${CONST_APIS_COMMON.GET_FOOTER}/${brand}`,
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

export async function aboutBrand(slug: string) {
  const result = await api<IResponseBrand>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.LAYOUT}/${CONST_APIS_COMMON.ABOUT_BRAND}/${brand}/${slug}`,
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
