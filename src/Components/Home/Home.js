import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default Home;
