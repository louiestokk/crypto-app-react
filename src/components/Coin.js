import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
function Coin({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) {
  let history = useHistory();

  return (
    <div className="coin-row">
      <div
        className="coin"
        onClick={(e) =>
          history.push(
            `/crypto/${e.currentTarget.children[2].textContent.toUpperCase()}-USD`
          )
        }
      >
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p className="coin-symbol">{symbol}</p>
      </div>
      <div className="coin-data">
        <p className="coin-price">${price}</p>
        <p className="coin-volume">${volume.toLocaleString()}</p>

        {priceChange < 0 ? (
          <p className="coin-percent red">
            {priceChange && priceChange.toFixed(2)}%
          </p>
        ) : (
          <p className="coin-percent green">
            {priceChange && priceChange.toFixed(2)}%
          </p>
        )}

        <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Coin;
