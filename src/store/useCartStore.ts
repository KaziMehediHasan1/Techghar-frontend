import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ICartItem, ICartState } from ".";

export const useCartStore = create<ICartState>()(
    persist(
        (set, get) => ({
            cart: [],

            // 1. Add to Cart
            addToCart: (newItem: ICartItem) => {
                const { cart } = get();
                const existingItem = cart.find((item) => item._id === newItem._id);

                if (existingItem) {
                    set({
                        cart: cart.map((item) =>
                            item._id === newItem._id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    set({ cart: [...cart, { ...newItem, quantity: 1 }] });
                }
            },

            // 2. Remove Item
            removeFromCart: (id: string) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item._id !== id),
                })),

            // 3. Update Quantity
            updateQuantity: (id, type) => {
                const { cart } = get();
                set({
                    cart: cart.map((item) => {
                        if (item._id === id) {
                            const newQty = type === "increment" ? item.quantity + 1 : item.quantity - 1;
                            return { ...item, quantity: newQty < 1 ? 1 : newQty };
                        }
                        return item;
                    }),
                });
            },

            // 4. Clear Cart
            clearCart: () => set({ cart: [] }),

            // 5. Computed States:
            totalItems: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),
            totalPrice: () => get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        }),
        {
            name: "cart-storage",
        }
    )
);