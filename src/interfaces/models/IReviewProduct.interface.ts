export interface IReviewProduct {
  id: number;
  productName: string;
  productUrl: string;
  reviewContent: string;
  star: number;
  reviewImages: string[];
  picture: string;
}

export interface IResponseProductReviews {
  status: boolean;
  message: string;
  error_code: number;
  data: IReviewProduct[];
}
