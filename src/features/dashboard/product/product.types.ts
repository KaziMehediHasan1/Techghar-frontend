export interface TProductApiResponse<T> {
  success?: boolean;
  message?: string;

  data: {
    result: T[];
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
  };
  total?: number;
  page?: number;
  limit?: number;
}

export type TProductAPIResponse = {
  _id: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
  category: string;
  images: string[];
  finalPrice: number;
  brand: string;
  stock: boolean;
  createdAt: string;
  updatedAt: string;
};

export interface IProduct {
  _id?: string;
  title: string;
  price: number;
  category: string;
  quntity: number;
  colors: string;
  brand: string;
  stock: boolean;
}

export interface IProductFormData {
  title: string;
  category: string;
  brand: string;
  price: number;
  discount: number;
  quantity: number;
  description: string;
}
