"use server";

import { CONST_APIS, CONST_APIS_COMMON } from "@/constants/apis.constant";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import { brand } from "@/constants/routes";
import {
  IResponseDocument,
  IResponseDownload,
} from "@/interfaces/models/IDocument.interface";

export async function getAll(page?: string) {
  const result = await api<IResponseDocument>({
    url: `${CONST_APIS.SERVER_URL}/${
      CONST_APIS.FEATURES.COMMON.DOCUMENT
    }?brand=${brand}&page=${page ?? 1}`,
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
