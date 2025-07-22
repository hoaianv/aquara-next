"use server";

import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import { brand } from "@/constants/routes";
import { IResponseWarranty } from "@/interfaces/models/warranty.interface";

export async function find(key: string) {
  const result = await api<IResponseWarranty>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.WARRANTY}/${CONST_APIS_COMMON.FIND_WARRANTY}/?brand=${brand}&serial_number=${key}`,
    options: {
      method: CONST_METHODS.GET,
    },
  });

  return result;
}
