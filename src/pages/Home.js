import React from "react";
import TopSection from "../components/TopSection";
import SingelCoin from "../components/SingelCoin";
import CoinGecko from "../components/CoinGecko";
function Home() {
  return (
    <div className="man-container">
      <CoinGecko />
      <SingelCoin />
    </div>
  );
}

export default Home;
