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

const Available = () => {
  return (
    <section className=" container mx-auto min-h-screen">
      <div className="flex flex-col gap-3 sm:gap-6 lg:gap-10 ">
        <div className="flex flex-col justify-center items-center">
          <img src={group8} alt="" />
          <div className="text-bg text-3xl sm:text-5xl lg:text-6xl font-bold text-center font-['light']">
            AVAILABLE SITES
          </div>
          <img src={group9} alt="" />
        </div>
        <div className="flex flex-wrap gap-3 justify-around items-center">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={group345} alt="" srcSet="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={group35} alt="" srcSet="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={group36} alt="" srcSet="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={group334} alt="" srcSet="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={group335} alt="" srcSet="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Available;
