export interface IAdvertise {
  id: number;
  title: string;
  picture: string;
  positionId: number;
  width: number;
  height: number;
  link: string;
  target: string;
  description: string;
  order: number;
}

export interface IAdPosition {
  quantity: number;
  id: number;
  title: string;
  url: string;
  description: string;
  order: number;
  advertises: IAdvertise[];
}

export interface IAdvertiseResponse {
  status: boolean;
  message: string;
  error_code: number;
  data: {
    [key: string]: IAdPosition;
  };
}
