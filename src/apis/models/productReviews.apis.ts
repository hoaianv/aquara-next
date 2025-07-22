"use server";

import { api } from "@/helpers/api.helper";
import { IParams } from "@/interfaces/common";
import { brand } from "@/constants/routes";
import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { CONST_METHODS } from "@/constants/methods.constant";
import { IResponseProductReviews } from "@/interfaces/models/IReviewProduct.interface";

export async function getAll(page?: string, payload?: IParams[]) {
  const queryString =
    payload?.map((item) => `${item.key}=${item.value}`).join("&") || "";

  const result = await api<IResponseProductReviews>({
    url: `${CONST_APIS.SERVER_URL}/${
      CONST_APIS.FEATURES.COMMON.PRODUCT_REVIEWS
    }/${CONST_APIS_COMMON.GET_ALL}/${brand}?page=${page}${
      queryString ? `&${queryString}` : ""
    }`,
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
