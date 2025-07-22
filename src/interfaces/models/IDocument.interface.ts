import { IPagination } from "@/interfaces/common";

export interface IDocument {
  id: number;
  title: string;
  fileName: string;
  type: string;
  url: string;
  createAt: string;
}

export interface IResponseDocument {
  status: boolean;
  message: string;
  error_code: number;
  data: {
    data: IDocument[];
    meta: IPagination;
  };
}

export interface IResponseDownloadError {
  status: false;
  message: string;
  error_code: number;
}

export type IResponseDownloadSuccess = Blob;

export type IResponseDownload =
  | IResponseDownloadError
  | IResponseDownloadSuccess;
