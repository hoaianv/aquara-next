export interface IContact {
  id: number;
  companyInfo: string;
  contactInfo: string;
  address: string;
  mail: string;
  website: string;
  payment: string;
  title: string;
  description: string;
  brandId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IResponseContact {
  status: boolean;
  message: string;
  error_code: number;
  data: IContact;
}

export interface IContactForm {
  name: string;
  email: string;
  phone: string;
  content?: string;
  brand: string;
}
export interface IResponseSendContact {
  status: boolean;
  message: string;
  error_code: number;
}
