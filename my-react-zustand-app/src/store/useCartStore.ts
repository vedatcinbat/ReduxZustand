// src/stores/useCartStore.ts
import { create } from "zustand";
import { Product } from "../types/Product";

interface CartState {
  cartItems: Product[];
  addToCart: (product: Omit<Product, "quantity">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  addToCart: (product) => {
    const { cartItems } = get();
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        cartItems: cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({
        cartItems: [...cartItems, { ...product, quantity: 1 }],
      });
    }
  },
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cartItems: [] }),
  totalPrice: () => {
    const { cartItems } = get();
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));
