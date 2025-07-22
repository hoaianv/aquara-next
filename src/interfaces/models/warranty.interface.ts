export interface IWarrantyData {
  id: number;
  productName: string;
  serialNumber: string;
  startDate: string;
  expirationDate: string;
  createdAt: string;
  type: string;
  daysRemaining: number;
}

export interface IResponseWarranty {
  status: boolean;
  message: string;
  error_code: number;
  data: IWarrantyData;
}
