import React from "react";

interface ICalculate {
  handleCalculate: (e: React.MouseEvent) => void
}

const Calculate = ({ handleCalculate }: ICalculate) => {
  return (
    <button onClick={handleCalculate} className="btn btn-primary">
      Calculate
    </button>
  );
};

export default Calculate;
