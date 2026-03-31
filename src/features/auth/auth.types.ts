// auth related types --
export interface IUser {
  id?: string;
  name: string;
  userEmail: string;
  photo?: string;
  role: 'admin' | 'user';
  uid: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAuthState {
  user: IUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  setAuth: (user: IUser, token: string) => void;
  setToken: (token: string) => void;
  logout: () => void;
}
