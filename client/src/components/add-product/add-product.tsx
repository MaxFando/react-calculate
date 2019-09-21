import React from "react";

interface IAddProduct {
  handleSubmit: (e: React.MouseEvent) => void
}

const AddProduct = ({ handleSubmit }: IAddProduct) => {
  return (
    <form>
      <div className="form-group">
        <input
          id="title"
          type="text"
          className="form-control"
          placeholder="Title"
          required
        />
      </div>

      <div className="form-group">
        <input
          id="quantity"
          type="number"
          className="form-control"
          placeholder="quantity"
          required
        />
      </div>

      <div className="form-group">
        <select className="form-control" id="currency">
          <option>RUB</option>
          <option>EUR</option>
          <option>USD</option>
        </select>
      </div>

      <div className="form-group">
        <input
          id="price"
          type="number"
          className="form-control"
          placeholder="price"
          required
        />
      </div>
      <button onClick={handleSubmit} className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddProduct;
