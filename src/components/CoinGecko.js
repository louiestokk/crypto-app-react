import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import { useCoinGeckoContext } from "../context/coingecko_context";
function CoinGecko() {
  const { coins } = useCoinGeckoContext();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="coin-input"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="coingecko-holder">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CoinGecko;
