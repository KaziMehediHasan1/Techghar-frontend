import type { ITheme } from "@/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useConfigStore = create<ITheme>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    { name: "theme-storage" },
  ),
);
