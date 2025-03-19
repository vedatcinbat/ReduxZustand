import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
