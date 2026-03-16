import type { ICartState } from "@/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create<ICartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const existingItem = get().cart.find((item) => item.id === product.id);
        if (existingItem) {
          get().updateQuantity(product.id, "increment");
        } else {
          set({ cart: [...get().cart, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (id) =>
        set({ cart: get().cart.filter((item) => item.id !== id) }),
      updateQuantity: (id, type) =>
        set({
          cart: get().cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity:
                    type === "increment"
                      ? item.quantity + 1
                      : Math.max(1, item.quantity - 1),
                }
              : item,
          ),
        }),
      clearCart: () => set({ cart: [] }),
      getTotalPrice: () =>
        get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
    }),
    { name: "cart-storage" },
  ),
);
