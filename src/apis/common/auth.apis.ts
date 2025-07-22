"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { CONST_APIS } from "@/constants/apis.constant";
import {
  IAuthLogin,
  IResponseLogin,
  IChangePassword,
  IAuthRegister,
  IResponseRegister,
  IResponseGetMe,
  IAuthUpdate,
  IResponseUpdate,
  IResponseLogout,
} from "@/interfaces/models/IAuth.interface";
import { IUser } from "@/interfaces/models/IUser.interface";
import { IBaseResponse } from "@/interfaces/common/IResponse.interface";
import { api } from "@/helpers/api.helper";
import { CONST_METHODS } from "@/constants/methods.constant";
import { CONST_VALUES } from "@/constants/values.constant";
import { BoTypeCommon, BoUtilsCommon } from "bodevops-be-common/dist";

const USER = "USER";

export async function create(payload: IAuthRegister) {
  const result = await api<IResponseRegister>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.AUTH}/${CONST_APIS.FEATURES.AUTH.REGISTER}`,
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

export async function update(payload: IAuthUpdate) {
  const result = await api<IResponseUpdate>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.AUTH}/${CONST_APIS.FEATURES.AUTH.UPDATE}`,
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

export async function login(payload: IAuthLogin) {
  const result = await api<IResponseLogin>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.AUTH}/${CONST_APIS.FEATURES.AUTH.LOGIN}`,
    options: {
      method: CONST_METHODS.POST,
      body: JSON.stringify(payload),
    },
  });

  if (result?.token && result?.status) {
    cookies().set(CONST_VALUES.TOKEN, result.token, {
      httpOnly: true,
      // secure: true,
      maxAge: BoUtilsCommon.UtilConvert.convertTimeToMilisecond({
        value: 30,
        typeTime: "DAY" as BoTypeCommon.TTime,
      }),
    });
  }
  return result;
}

export async function getMe() {
  const token = cookies().get(CONST_VALUES.TOKEN)?.value;

  if (!token) {
    return {
      status: false,
      error_code: 401,
      message: "Token không hợp lệ",
    };
  }

  const result = await api<IResponseGetMe>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.AUTH}/${CONST_APIS.FEATURES.AUTH.GET_ME}`,
    options: {
      method: CONST_METHODS.GET,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: {
        tags: [USER],
      },
    },
  });

  return result;
}

export async function changePassword(payload: IChangePassword) {
  const result = await api<IBaseResponse<IUser>>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.AUTH}/${CONST_APIS.FEATURES.AUTH.CHANGE_PASSWORD}`,
    options: {
      method: CONST_METHODS.POST,
      body: JSON.stringify(payload),
    },
  });
  return result;
}

export async function logout() {
  const result = await api<IResponseLogout>({
    url: `${CONST_APIS.SERVER_URL}/${CONST_APIS.FEATURES.COMMON.AUTH}/${CONST_APIS.FEATURES.AUTH.LOGOUT}`,
    options: {
      method: CONST_METHODS.POST,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  });

  cookies().delete(CONST_VALUES.TOKEN);
  revalidateTag(USER);

  return result;
}
