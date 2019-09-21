import React from "react";

interface IProductList {
  products: []
}

type Product = {
  title: string,
  quantity: number,
  currency: string,
  price: number
}

const ProductList = ({ products }: IProductList) => {
  let content: any = (
    <tr>
      <td>Empty</td>
    </tr>
  );

  if (products.length) {
    content = products.map((product: Product, index) => {
      return (
        <tr key={index}>
          <th scope="row">{product.title}</th>
          <td>{product.quantity}</td>
          <td>{product.currency}</td>
          <td>{product.price}</td>
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
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </table>
  );
};

export default ProductList;
