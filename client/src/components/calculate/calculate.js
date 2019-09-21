import React from "react";

const Calculate = ({ handleCalculate }) => {
  return (
    <button onClick={handleCalculate} className="btn btn-primary">
      Calculate
    </button>
  );
};

export default Calculate;
