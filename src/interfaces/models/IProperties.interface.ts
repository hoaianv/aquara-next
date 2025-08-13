export interface IItemProperty {
  id: number;
  title: string;
  description: string;
}

export interface IResponseProperty {
  status: boolean;
  message: string;
  error_code: number;
  data: {
    typeId: number;
    titleType: string;
    properties: IItemProperty[];
  };
}
