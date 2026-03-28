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


