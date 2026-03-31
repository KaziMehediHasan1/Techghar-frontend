export interface IBlogFormData {
  title: string;
  category: string;
  alt: string;
  description: string;
  image: string[];
}

export interface IBlogUpdateData {
  _id?: string;
  id?: string; 
  title?: string;
  category?: string;
  alt?: string;
  description?: string;
  image?: string[];
}

export interface IBlog {
  _id: string;
  title: string;
  category: string;
  description: string;
  alt: string;
  image: string[];
  updatedAt?: string;
  createdAt?: string;
  __v?: number;
}

export interface TBlogApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    result: T[];
    total: number;
    nextCursor?: string | null;
    meta?: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
  };
}
