import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CoinGecko from "./components/CoinGecko";
import Chart from "../src/components/Chart";
import SingelCoin from "./components/SingelCoin";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/pricecrypto">
          <SingelCoin />
        </Route>
        <Route path="/currencies">
          <CoinGecko />
        </Route>
        <Route path="/crypto/:name" children={<Chart />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
