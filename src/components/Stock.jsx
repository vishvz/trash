import React from "react";
import group8 from "../assets/images/Group8.png";
import group9 from "../assets/images/Group9.png";
import ncdx from "../assets/images/ncdex.webp";
import mcx from "../assets/images/mcx.webp";

const Stock = () => {
  return (
    <section className="relative container mx-auto w-full mb-10">
      <div className="flex justify-center">
        <div className="flex flex-col gap-3 sm:gap-6 lg:gap-10 items-center">
          <div className="flex flex-col justify-center items-center">
            <img src={group8} alt="" />
            <div className="text-bg text-3xl sm:text-5xl lg:text-6xl font-bold text-center font-['light']">
              Stock Market
            </div>
            <img src={group9} alt="" className="" />
          </div>
          <div className="flex flex-wrap justify-center gap-20 items-center">
            <a
              href="http://"
              className="max-w-[15rem] lg:max-w-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ncdx} alt="" srcSet="" />
            </a>
            <a
              href="http://"
              className="max-w-[15rem] lg:max-w-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mcx} alt="" srcSet="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stock;
