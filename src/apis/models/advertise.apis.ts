"use server";

import { CONST_APIS } from "@/constants/apis.constant";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import { brand } from "@/constants/routes";
import { IAdvertiseResponse } from "@/interfaces/models/IAdvertise.interface";

export async function getAllBanner() {
  const result = await api<IAdvertiseResponse>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.ADVERTISE}?brand=${brand}`,
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
