type UserRole = 'user' | 'admin' | 'fake';
export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  cartItemCount: number;
  lastPurchasedItem: string;
  totalPurchaseCount: number;
  createdAt?: string | Date;
  isAccountActive: boolean;
}
export interface ApiResponse<T> {
  success?: boolean;
  message?: string;
  data: {
    result: T[];
    total: number;
  };
  page?: number;
  limit?: number;
}

export interface IUserAPIResponse {
  _id: string;
  id: string;
  uid: string;
  name: string;
  email: string;
  photo: string;
  role: 'admin' | 'user';
  isAccountActive: boolean;
  cartItemCount: number;
  totalPurchaseCount: number;
  lastPurchasedItem: string;
  resetPasswordToken: string | null;
  resetPasswordExpire: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
