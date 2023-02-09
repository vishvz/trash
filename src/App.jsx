import { useState } from "react";
import Banner from "./components/banner";
import Banner3 from "./components/banner3";
import Header from "./components/header";

function App() {
  return (
    <><section className="bg min-h-screen">
      <Header />
      <Banner />
      <Banner3 />
    </section>
    </>
  );
}

export default App;
