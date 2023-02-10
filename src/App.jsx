import { useState } from "react";
import Banner from "./components/banner";
import Banner3 from "./components/banner3";
import Banner4 from "./components/banner4";
import Header from "./components/header";
import Punter from "./components/punter";
import Banner5 from './components/banner5'
import Insta from "./components/instagram";
import onlyGlass from '../src/assets/images/OnlyGlass.png'
import footerLogo from '../src/assets/images/footerLogo.png'

function App() {
  return (
    <>
      <section className="relative  bg-[#181818]">
        <img src={onlyGlass} alt="" srcSet="" className="w-full h-full absolute " />
        <Header />
        <Banner />
        <Punter />
        <Banner3 />
        <Banner5 />
        <Insta />
        <Banner4 />
        <img src={footerLogo} alt="" srcSet="" className="w-full" />
      </section>
    </>
  )
}

export default App
