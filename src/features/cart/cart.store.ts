import type { ICartState } from "@/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create<ICartState>()(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: () => 0, // Initial value
      totalPrice: () => 0, // Initial value

      addToCart: (product) => {
        const cart = get().cart;
        const existingItem = cart.find((item) => item._id === product._id);

        let newCart;
        if (existingItem) {
          newCart = cart.map((item) =>
            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          newCart = [...cart, { ...product, quantity: 1 }];
        }

        // State update korar somoy total calculate kora
        set({
          cart: newCart,
          totalItems: () => newCart.reduce((acc, item) => acc + item.quantity, 0),
          totalPrice: () => newCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        });
      },

      removeFromCart: (id: string) => {
        const newCart = get().cart.filter((item) => item._id !== id);
        set({
          cart: newCart,
          totalItems: () => newCart.reduce((acc, item) => acc + item.quantity, 0),
          totalPrice: () => newCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        });
      },

      // ... baki updateQuantity teo eki bhabe set korte hobe
      updateQuantity: (id, type) => {
        const newCart = get().cart.map((item) =>
          item._id === id
            ? {
              ...item,
              quantity: type === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
            : item
        );
        set({
          cart: newCart,
          totalItems: () => newCart.reduce((acc, item) => acc + item.quantity, 0),
          totalPrice: () => newCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        });
      },

      clearCart: () => set({ cart: [], totalItems: () => 0, totalPrice: () => 0 }),

      getTotalPrice: () => get().totalPrice, // Ekhon sorasori state theke nibe
    }),
    { name: "cart-storage" }
  )
);