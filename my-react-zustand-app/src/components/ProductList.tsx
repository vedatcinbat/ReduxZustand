// src/components/ProductList.tsx
import React from "react";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";

const ProductList: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <h2>🛍️ Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
