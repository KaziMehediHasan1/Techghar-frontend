/**
 * Generic API Response Structure
 * Based on the network response showing data: { meta, result }
 */
export interface TProduct<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
    result: T[];
  };
}

/**
 * Single Specification Item
 */
export interface ISpec {
  label: string;
  value: string;
}

/**
 * Full Product Interface (Backend & Frontend Synchronization)
 */
export interface IProduct {
  _id: string;
  title: string;
  category: 'Headphone' | 'PC Componet' | 'Light' | 'Monitor' | 'Phone' | 'PC';
  brand: string;
  description: string;
  sku?: string;
  modelName?: string;
  series?: string;
  specs: ISpec[];
  warranty: string;
  features: string[];
  price: number;
  discount: number;
  finalPrice: number;
  stock: boolean;
  quantity: number;
  colors: string[];
  images: string[];
  averageRating: number;
  totalReviews: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Response type specifically for Product API
 */
export type TProductAPIResponse = IProduct;

/**
 * Form Data Interface (Used in Add Product Form)
 */
export interface IProductFormData {
  title: string;
  category: string;
  brand: string;
  price: number;
  discount: number;
  quantity: number;
  description: string;
  sku?: string;
  modelName?: string;
  series?: string;
  warranty?: string;
  colors: string[];
}

export interface IProductPostData extends IProductFormData {
  colors: string[];
  images: string[];
  specs: ISpec[];
  features: string[];
  finalPrice: number;
  stock: boolean;
}

/**
 * Data Interface for Update Modal
 */
export interface IProductUpdateData extends Partial<IProduct> {
  id: string; // Update-এর জন্য অবশ্যই ID প্রয়োজন
}
