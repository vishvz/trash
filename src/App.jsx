import { useState } from "react";
import Banner from "./components/banner";
import Banner3 from "./components/banner3";
import Banner4 from "./components/banner4";
import Header from "./components/header";
import Punter from "./components/punter";
import Banner5 from "./components/banner5";
import Insta from "./components/instagram";
import onlyGlass from "../src/assets/images/OnlyGlass.png";
import Available from "./components/available";
import Stock from "./components/Stock";

function App() {
  return (
    <>
      <section className="relative  bg-[#181818] z-0">
        <img
          src={onlyGlass}
          alt=""
          srcSet=""
          className="w-full h-full absolute -z-10"
        />
        <Header />
        <Banner />
        <Punter />
        <Banner3 />
        <Stock />
        <Banner5 />
        <Insta />
        <Available />
        <Banner4 />
      </section>
    </>
  );
}

export default App;
