export interface IUser {
  _id?: string;
  firstName: string;
  lastName?: string;
  email?: string;
  userEmail?: string;
  photo?: string;
  role: 'admin' | 'user';
  uid: string;
  gender?: 'male' | 'female';
  dob?: string;
  phone?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAuthState {
  user: IUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  setAuth: (user: IUser, token: string) => void;
  setToken: (token: string) => void;
  updateUser: (data: Partial<IUser>) => void;
  deleteUser: () => void;
  logout: () => void;
}