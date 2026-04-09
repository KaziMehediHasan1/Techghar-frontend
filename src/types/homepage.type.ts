export interface IProductData {
  _id: string;
  averageRating: number;
  stock: boolean;
  totalReviews: number;
  price: number;
  finalPrice: number;
  title: string;
  images: string[];
  series: string
}
export interface IProductAPIResponse {
  success: boolean;
  data: {
    result: IProductData[];
  };
}