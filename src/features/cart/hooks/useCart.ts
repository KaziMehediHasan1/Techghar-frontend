import { useCartStore } from "@/features/cart/cart.store";
import type { ICartItem } from "@/store";
import { toast } from "react-hot-toast"; 

export const useCart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCartStore();

  // ১. ডাইনামিক অ্যাড টু কার্ট (With Feedback)
  const handleAddToCart = (product: ICartItem) => {
    addToCart(product);
    toast.success(`${product.title} কার্টে যোগ করা হয়েছে!`);

    // এখানে আপনি চাইলে ব্যাকগ্রাউন্ডে DB Sync API কল করতে পারেন
    // syncCartToDB(get().cart);
  };

  // ২. রিমুভ করার সময় কনফার্মেশন (Optional)
  const handleRemoveFromCart = (id: string, name: string) => {
    removeFromCart(id);
    toast.error(`${name} রিমুভ করা হয়েছে`);
  };

  // ৩. কোয়ান্টিটি চেঞ্জ হ্যান্ডলার
  const handleUpdateQuantity = (
    id: string,
    type: "increment" | "decrement",
  ) => {
    updateQuantity(id, type);
  };

  return {
    cart,
    getTotalPrice: getTotalPrice(), // সরাসরি ভ্যালু রিটার্ন করবে
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity,
    clearCart,
  };
};
