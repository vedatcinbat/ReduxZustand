// src/data/products.ts
import { Product } from "../types/Product";

export const products: Omit<Product, "quantity">[] = [
  { id: 1, title: "Wireless Mouse", price: 20 },
  { id: 2, title: "Bluetooth Headphones", price: 50 },
  { id: 3, title: "Mechanical Keyboard", price: 70 },
  { id: 4, title: "Laptop Stand", price: 30 },
];
