import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CoinGeckoProvider } from "./context/coingecko_context";

ReactDOM.render(
  <CoinGeckoProvider>
    <App />
  </CoinGeckoProvider>,

  document.getElementById("root")
);
