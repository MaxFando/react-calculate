const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const fx = require("money");
const router = express.Router();
const path = require("path");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "client/build")));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/client/build/index.html"));
});

const convertRub = () => {
  fx.rates = {
    EUR: 0.014,
    USD: 0.016
  };
  fx.base = "RUB";
};

const convertUsd = () => {
  fx.rates = {
    EUR: 0.91,
    RUB: 64.01
  };
  fx.base = "USD";
};

const convertEur = () => {
  fx.rates = {
    RUB: 70.5,
    USD: 1.1
  };
  fx.base = "EUR";
};

const convertTo = {
  RUB: convertRub,
  USD: convertUsd,
  EUR: convertEur
};

router.post("/calculate", (req, res) => {
  const { products } = req.body;

  const response = products.reduce(
    (acc, product) => {
      const { price, quantity, currency } = product;

      convertTo[currency]();
      const usd = fx.convert(price, { from: currency, to: "USD" });
      const rub = fx.convert(price, { from: currency, to: "RUB" });
      const eur = fx.convert(price, { from: currency, to: "EUR" });

      acc["USD"] += usd * quantity;
      acc["RUB"] += rub * quantity;
      acc["EUR"] += eur * quantity;

      return acc;
    },
    { RUB: 0, USD: 0, EUR: 0 }
  );

  return res.json(response);
});

app.use("/", router);

app.listen(3001, () => {
  console.log("Server is runnig on port 3001");
});
