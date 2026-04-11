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


export interface ICartItem {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  stock?: boolean;
}

export interface ICartState {
  cart: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, type: "increment" | "decrement") => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

// wishlist related types -
export interface IWishlistState {
  wishlist: number[];
  toggleWishlist: (id: number) => void;
}
