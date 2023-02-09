import { useState } from "react";
import Banner from "./components/banner";
import Banner3 from "./components/banner3";
import Banner4 from "./components/banner4";
import Header from "./components/header";
import Punter from "./components/punter";
import Banner5 from './components/banner5'

function App() {
  return (
    <><section className="bg min-h-screen">
      <Header />
      <Banner />
      <Punter />
      <Banner3 />
      <Banner5 />
      <Banner4 />
    </section>
    </>
  )
}

export default App
