import { IUser } from "@/interfaces/models/IUser.interface";

export interface IAuthLogin {
  username: string;
  password: string;
  brand: string;
}

export interface IAuthRegister {
  username: string;
  password: string;
  password_confirmation: string;
  fullName: string;
  email: string;
  phone: string;
  birthday: Date;
  provider: string;
  brand: string;
  address: string;
  agreeToTerms: boolean;
  subscribe: boolean;
}

export interface IAuthUpdate {
  fullName: string;
  email: string;
  phone: string;
  birthday: Date;
  brand: string;
  address: string;
}

export interface IChangePassword {
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
export interface IResponseLogin {
  status: boolean;
  message: string;
  token: string;
  data: IUser;
  error_code: number;

  errors?: {
    username?: string[];
    password?: string[];
    brand?: string[];
  };
}

export interface IResponseRegister {
  status: boolean;
  message: string;
  data?: IUser;
  errors?: {
    username?: string[];
    password?: string[];
    fullName?: string[];
    email?: string[];
    phone?: string[];
    birthday?: string[];
    address?: string[];
    brand?: string[];
  };
  error_code: number;
}

export interface IResponseUpdate {
  status: boolean;
  message: string;
  data?: IUser;
  errors?: {
    username?: string[];
    fullName?: string[];
    email?: string[];
    phone?: string[];
    birthday?: string[];
    provider?: string[];
    brand?: string[];
    address?: string[];
  };
  error_code: number;
}
export interface IResponseGetMe {
  status: boolean;
  message: string;
  data?: IUser;
  error_code: number;
}

export interface IResponseLogout {
  status: boolean;
  message: string;
  error_code: number;
}
