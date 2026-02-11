// auth related types --
export interface IUser {
  id?: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

export interface IAuthState {
  user: IUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  setAuth: (user: IUser, token: string) => void;
  setToken: (token: string) => void;
  logout: () => void;
}
