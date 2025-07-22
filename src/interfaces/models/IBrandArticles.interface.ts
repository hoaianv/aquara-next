export interface IBrandArticle {
  id: number;
  brand_id: number;
  title: string;
  slug: string;
  content: string;
  thumbnail: string | null;
  created_at: string;
  updated_at: string;
}

export interface IResponseBrand {
  status: boolean;
  error_code: number;
  message: string;
  data: IBrandArticle;
}
