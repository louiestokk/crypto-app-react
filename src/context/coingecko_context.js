import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
const CoinGeckoContext = React.createContext();
const CoinGeckoProvider = ({ children }) => {
  const [pair, setpair] = useState("");
  const [coins, setCoins] = useState([]);
  const [currencies, setcurrencies] = useState([]);
  const [price, setprice] = useState("0.00");
  const getCoinGeckoData = async () => {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoinGeckoData();
  }, []);
  return (
    <CoinGeckoContext.Provider
      value={{
        coins,
        setCoins,
        currencies,
        setcurrencies,
        price,
        setprice,
        pair,
        setpair,
      }}
    >
      {children}
    </CoinGeckoContext.Provider>
  );
};

export const useCoinGeckoContext = () => {
  return useContext(CoinGeckoContext);
};
export { CoinGeckoContext, CoinGeckoProvider };
