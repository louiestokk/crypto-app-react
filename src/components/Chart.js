import React from "react";
import styled from "styled-components";
import { useCoinGeckoContext } from "../context/coingecko_context";
import MuliLineSerieLine2D from "../ChartsModels.js/MultiSerieLine2D";
import { useParams } from "react-router-dom";
import SingelCoin from "./SingelCoin";
function Chart({ data }) {
  const { coins } = useCoinGeckoContext();
  const { name } = useParams();
  const currentCurrency = name.split("-")[0];
  const filtered = coins.filter(
    (coin) => coin.symbol.toUpperCase() === currentCurrency
  );
  return (
    <div className="current-currency">
      {filtered.map((currency) => {
        console.log(currency);
        const {
          id,
          symbol,
          name,
          image,
          total_volume,
          current_price,
          high_24h,
          low_24h,
          market_cap,
          market_cap_change_percentage_24h,
          market_cap_rank,
          price_change_percentage_24h,
        } = currency;

        return (
          <Wrapper key={id}>
            <div className="singel-currency-chart">
              <SingelCoin />
              {/* <MuliLineSerieLine2D
                id={id}
                symbol={symbol}
                name={name}
                image={image}
                total_volume={total_volume}
                current_price={current_price}
                high_24h={high_24h}
                low_24h={low_24h}
                market_cap={market_cap}
                market_cap_change_percentage_24h={
                  market_cap_change_percentage_24h
                }
                market_cap_rank={market_cap_rank}
                price_change_percentage_24h={price_change_percentage_24h}
              /> */}
            </div>
            <div className="singel-currency-info"></div>
          </Wrapper>
        );
      })}
    </div>
  );
}
const Wrapper = styled.section``;
export default Chart;
