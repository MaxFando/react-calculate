import React, { useState } from "react";

import AddProduct from "./components/add-product";
import ProductList from "./components/product-list";
import CurrencyResult from "./components/currency-result";
import Calculate from "./components/calculate";

import axios from "axios";
import uuid from "uuid";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState({});
  const init = axios.create({
    baseURL: "http://localhost:3001"
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const quantity = document.getElementById("quantity").value;
    const currency = document.getElementById("currency").value;
    const price = document.getElementById("price").value;

    if (title === "" || quantity === "" || price === "") {
      return false;
    }

    const data = {
      id: uuid.v4(),
      title,
      quantity,
      currency,
      price
    };

    setProducts(prevState => [...prevState, data]);
  };

  const handleCalculate = async e => {
    e.preventDefault();

    const response = (await init.post("/calculate", { products })).data;

    setCurrency(response);
  };

  const handleDelete = key => {
    setProducts(prevState => prevState.filter(item => item.id !== key));
  };

  return (
    <div className="container">
      <AddProduct handleSubmit={handleSubmit} />
      <ProductList handleDelete={handleDelete} products={products} />
      <Calculate handleCalculate={handleCalculate} />
      <CurrencyResult currency={currency} />
    </div>
  );
}

export default App;
