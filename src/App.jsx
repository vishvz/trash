import { useState } from "react";
import reactLogo from "./assets/images/Asset12.png";

function App() {
  return (
    <section className="min-h-screen">
      <div className="flex">
        <div className="flex justify-center items-center text-lg text-rose-600 flex-1">
          HEYYYY
        </div>
        <div className="flex-1">
          <img src={reactLogo} alt="" className="h-40" />
        </div>
      </div>
    </section>
  );
}

export default App;
