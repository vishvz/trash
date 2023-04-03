import { useState } from "react";
import logo from "./images/logo.png";
import FramerightDice from "./images/FramerightDice.webp";
import FrameleftDice from "./images/FrameleftDice.png";
import FrameupRight from "./images/FrameupRight.webp";
import FrameleftCarrom from "./images/FrameleftCarrom.png";
import FrameRightCarrom from "./images/FrameRightCarrom.png";
import brobet257 from "./images/brobet257.png";
import Button from "./components/button";
import LineDivider from "./components/lineDivider";
import AvailableSites from "./components/AvailableSites";
import Terms from "./components/Terms";

function App() {
  return (
    <>
      <main className="gradient -z-50">
        <section className="mb-20">
          <div className="flex justify-center items-center flex-col mb-10">
            <img
              className="flex justify-between absolute top-0 right-0 max-w-[60px]"
              src={FrameupRight}
              alt="logo"
            />

            <img
              className="flex justify-between absolute top-[7%] left-[10%] max-w-[60px]"
              src={FrameleftCarrom}
              alt="logo"
            />
            <div className="max-w-xs relative">
              <img src={logo} alt="logo" className="z-20" />
              <img
                className="flex justify-between absolute bottom-0 right-0 max-w-[60px]"
                src={FramerightDice}
                alt="logo"
              />
              <img
                className="flex justify-between absolute bottom-0 left-0 max-w-[60px]"
                src={FrameleftDice}
                alt="logo"
              />
              <img
                className="flex justify-between absolute top-[50%] max-w-[60px] -z-10"
                src={FrameRightCarrom}
                alt="logo"
              />
            </div>
            <h1 className="text-white text-center p-5">
              Imandari ek mahanga shok hai jo har kisike bas ki baat nahi hoti.
            </h1>
            <div className="flex flex-col gap-8">
              <Button text={"MOST TRUSTED BOOK EVER"} />
              <div className="flex gap-5">
                <Button text={"Log in"} signin={true} />
                <Button text={"Sign up"} signup={true} />
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center gap-5">
            <img className="relative" src={brobet257} alt="logo" />
            <h1 className="text-white text-center font-semibold absolute -bottom-7 md:-bottom-5">
              For new ID <br />
              WhatsApp us on
            </h1>
            <div className="mt-3">
              <Button text={"+91 8469104000"} whatsapp={true} />
            </div>
          </div>
          <LineDivider />
        </section>
        <AvailableSites />
        <Terms />
      </main>
    </>
  );
}

export default App;
