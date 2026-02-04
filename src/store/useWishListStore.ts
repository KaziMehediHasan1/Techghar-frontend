import type { IWishlistState } from "@/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWishlistStore = create<IWishlistState>()(
  persist(
    (set) => ({
      wishlist: [],
      toggleWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.includes(id)
            ? state.wishlist.filter((itemId) => itemId !== id)
            : [...state.wishlist, id],
        })),
    }),
    { name: "wishlist-storage" },
  ),
);
