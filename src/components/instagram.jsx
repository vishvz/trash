import React from "react";
import group8 from "../assets/images/Group8.png";
import group9 from "../assets/images/Group9.png";
import group37 from "../assets/images/Group37.png";
import group38 from "../assets/images/Group38.png";
import group26 from "../assets/images/Group26.png";
import group31 from "../assets/images/Group31.png";
import group33 from "../assets/images/Group33.png";

import group345 from "../assets/images/Group345.png";
import group35 from "../assets/images/Group35.png";
import group36 from "../assets/images/Group36.png";
import group334 from "../assets/images/Group334.png";
import group335 from "../assets/images/Group335.png";
import instaMask from "../assets/images/Mask-groupinstagram.webp";
import instaBack from "../assets/images/Rectangle-4insta-frame.webp";

const Insta = () => {
  return (
    <section className="relative container mx-auto min-h-screen w-full mb-20 md:mb-28 lg:mb-60">
      <div className="flex justify-center lg:mb-80">
        <div className="flex flex-col gap-3 sm:gap-6 lg:gap-10 pb-36 items-center">
          <div className="flex flex-col justify-center items-center">
            <img src={group8} alt="" />
            <div className="text-bg text-3xl sm:text-5xl lg:text-6xl font-bold text-center font-['light']">
              INSTAGRAM
            </div>
            <img src={group9} alt="" className="" />
          </div>
          <div className="flex flex-wrap justify-center gap-5 items-center">
            <a
              href="http://"
              className="max-w-[15rem] lg:max-w-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={group31} alt="" srcSet="" />
            </a>
            <a
              href="http://"
              className="max-w-[15rem] lg:max-w-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={group26} alt="" srcSet="" />
            </a>
            <a
              href="http://"
              className="max-w-[15rem] lg:max-w-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={group33} alt="" srcSet="" />
            </a>
          </div>
          <div className="max-w-sm overflow-hidden -bottom-20 md:max-w-3xl absolute lg:-bottom-60 mb-20">
            <img
              src={instaMask}
              style={{ mixBlendMode: "lighten" }}
              className=""
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insta;
