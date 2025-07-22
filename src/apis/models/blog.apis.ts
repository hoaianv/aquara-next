"use server";

import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import { brand } from "@/constants/routes";
import {
  IBlogMetaResponse,
  IResponseBlog,
  IResponseBlogs,
} from "@/interfaces/models/IBlog.interface";
import { IResponseCategoryMeta } from "@/interfaces/models/IProductsCategories.interface";

export async function getAll(page?: string) {
  const result = await api<IResponseBlogs>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.BLOG}/${CONST_APIS_COMMON.GET_ALL}/${brand}?page=${page}`,
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

export async function detail(payload: string) {
  const result = await api<IResponseBlog>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.BLOG}/${brand}/${payload}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}

export async function meta(payload: string) {
  const result = await api<IBlogMetaResponse>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.BLOG}/${CONST_APIS_COMMON.META}/${brand}/${payload}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}
