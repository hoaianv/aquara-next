"use server";

import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import { brand } from "@/constants/routes";
import {
  IContactForm,
  IResponseContact,
  IResponseSendContact,
} from "@/interfaces/models/IContact.interface";

export async function detail() {
  const result = await api<IResponseContact>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.CONTACT}?brand=${brand}`,
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

export async function create(payload: IContactForm) {
  const result = await api<IResponseSendContact>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.CONTACT}/${CONST_APIS_COMMON.SEND_CONTACT}`,
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
