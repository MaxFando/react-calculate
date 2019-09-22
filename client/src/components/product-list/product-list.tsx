import React from "react";
import { ReactComponent as Logo } from './clear.svg';

import './product-list.css'

interface IProductList {
  products: []
  handleDelete: any
}

type Product = {
  id: string,
  title: string,
  quantity: number,
  currency: string,
  price: number
}

const ProductList = ({ products, handleDelete }: IProductList) => {
  let content: any = (
    <tr>
      <td>Empty</td>
    </tr>
  );

  if (products.length) {
    content = products.map((product: Product) => {
      return (
        <tr key={product.id}>
          <th scope="row">{product.title}</th>
          <td>{product.quantity}</td>
          <td>{product.currency}</td>
          <td>{product.price}</td>
          <td>
            <button onClick={handleDelete.bind(null, product.id)} type="button" className="btn" aria-label="Left Align">
              <Logo />
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
          <th scope="col">Currency</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </table>
  );
};

export default ProductList;
