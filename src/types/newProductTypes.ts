export interface INewProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  finalPrice: number;
  averageRating: number;
  stock: boolean;
  category: string;
  brand: string;
  images: string;
  totalReviews: number;
  createdAt: string;
  updatedAt: string;
}

export interface TNewProductApiResponse<T> {
  success?: boolean;
  message?: string;

  data: T[];
}
