import React from "react";

const ProductList = ({ products }) => {
  let content = (
    <tr>
      <td>Empty</td>
    </tr>
  );

  if (products.length) {
    content = products.map((product, index) => {
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
