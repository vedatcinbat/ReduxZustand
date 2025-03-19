import { Product } from "../types/Product";

// src/api/fetchProducts.ts
export const fetchProducts = () =>
  new Promise<Omit<Product, "quantity">[]>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve([
          { id: 1, title: "Wireless Mouse", price: 20 },
          { id: 2, title: "Bluetooth Headphones", price: 50 },
          { id: 3, title: "Mechanical Keyboard", price: 70 },
          { id: 4, title: "Laptop Stand", price: 30 },
        ]);
      } else {
        reject("Failed to fetch products.");
      }
    }, 1500);
  });
