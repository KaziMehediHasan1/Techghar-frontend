// language related types -
export interface ILanguageState {
  language: "en" | "bn";
  setLanguage: (lang: "en" | "bn") => void;
}

// theme related types -
export interface ITheme {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// cart related types -
export interface ICartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ICartState {
  cart: ICartItem[];
  addToCart: (product: ICartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, type: "increment" | "decrement") => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

// wishlist related types -
export interface IWishlistState {
  wishlist: number[];
  toggleWishlist: (id: number) => void;
}
