import type { IAuthState } from "@/features/auth/auth.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      setAuth: (user, token) =>
        set({ user, accessToken: token, isAuthenticated: true }),
      setToken: (token) => set({ accessToken: token }),
      logout: () =>
        set({ user: null, accessToken: null, isAuthenticated: false }),
    }),
    { name: "auth-storage" },
  ),
);
