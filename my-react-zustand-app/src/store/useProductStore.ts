// src/stores/useProductStore.ts
import { create } from "zustand";
import { Product } from "../types/Product";
import { fetchProducts } from "../api/fetchProducts";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProductsFromApi: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProductsFromApi: async () => {
    set({ loading: true, error: null });
    try {
      const fetchedProducts = await fetchProducts();
      const products = fetchedProducts.map((product) => ({
        ...product,
        quantity: 1,
      }));
      set({ products, loading: false });
    } catch (err) {
      set({ error: err as string, loading: false });
    }
  },
}));
