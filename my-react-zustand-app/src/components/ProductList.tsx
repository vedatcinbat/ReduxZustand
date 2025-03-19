// src/components/ProductList.tsx
import React, { useEffect } from "react";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";
import { useProductStore } from "../store/useProductStore";

const ProductList: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { products, loading, error, fetchProductsFromApi } = useProductStore();

  useEffect(() => {
    fetchProductsFromApi();
  }, [fetchProductsFromApi]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>🛍️ Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} — ${product.price}{" "}
            <button onClick={() => addToCart({ ...product })}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
