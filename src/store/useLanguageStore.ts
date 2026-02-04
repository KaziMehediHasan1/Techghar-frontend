import type { ILanguageState } from "@/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useConfigStore = create<ILanguageState>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (lang) => set({ language: lang }),
    }),
    { name: "language-storage" },
  ),
);
