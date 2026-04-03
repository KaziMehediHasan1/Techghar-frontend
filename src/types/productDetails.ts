export interface ISpecification {
  label: string;
  value: string;
}

export interface IProductDetails {
  _id: string;
  title: string; 
  modelName?: string;
  series?: string;
  sku?: string;
  description: string;
  category: string;
  brand: string;
  colors: string[]; 
  price: number;
  discount: number;
  finalPrice: number;
  stock: boolean;
  quantity: number;
  images: string[]; 
  specs?: ISpecification[];
  features?: string[];
  warranty?: string;
  averageRating: number;
  totalReviews: number;
}

export interface ProductDetailsApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
