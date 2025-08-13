import { CONST_APIS } from "@/constants/apis.constant";
import { CONST_METHODS } from "@/constants/methods.constant";
import { brand } from "@/constants/routes";
import { api } from "@/helpers/api.helper";
import { IResponseProperty } from "@/interfaces/models/IProperties.interface";

export async function findOne(slug: string) {
  const result = await api<IResponseProperty>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.PROPERTIES}/${brand}/${slug}`,
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
