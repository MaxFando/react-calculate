import React from "react";

const CurrencyResult = ({ currency }) => {
  return (
    <ul className="currency-result list-group">
      <li className="list-group-item rub">RUB {currency.RUB}</li>
      <li className="list-group-item eur">EUR {currency.EUR}</li>
      <li className="list-group-item usd">USD {currency.USD}</li>
    </ul>
  );
};

export default CurrencyResult;
