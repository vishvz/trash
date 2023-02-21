import { useState } from "react";
import telegram from "../assets/images/telegram.png";
import instagram from "../assets/images/insta.png";
import banner5Logo from "../assets/images/PngItem_830922-1girl.webp";
import Groupdice from "../assets/images/Groupdice.webp";
import Button from "../components/button";

function Banner4() {
  return (
    <>
      <section className="container mx-auto min-h-screen flex flex-col justify-center items-center px-5 pt-10 overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col justify-center items-center gap-5 px-3 py-5 md:items-start md:flex-1">
            <h1 className="text-bg text-center text-xl uppercase font-bold md:text-start md:text-3xl lg:text-5xl md:pb-5 pb-3 font-['light']">
              Get In Touch With Zetbet Customer Care
            </h1>
            <h2 className=" text-white md:text-xl lg:text-2xl md:pb-5 pb-3 text-center md:text-start font-['Medium']">
              For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here
              To Help You 24/7 With Our Online Services.
            </h2>
            <h2 className=" text-white md:text-xl lg:text-2xl md:pb-5 pb-3 text-center md:text-start font-['Medium']">
              Whatsapp us on
            </h2>
            <div className="flex flex-col sm:flex-row gap-5 z-10">
              <Button />
              <Button />
            </div>
            <h2 className=" text-white md:text-xl lg:text-2xl md:pb-5 pb-3 text-center md:text-start font-['Medium']">
              Customer care number
            </h2>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button />
            </div>
            <h2 className=" text-white md:text-xl lg:text-2xl md:pb-5 pb-3 text-center md:text-start font-['Medium']">
              Social Media
            </h2>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="" srcSet="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="" srcSet="" />
              </a>
            </div>
          </div>
          <div className="h-full sm:flex-1 z-10 bottom-0 flex justify-end">
            <img src={banner5Logo} alt="" srcSet="" />
          </div>
          <img
            src={Groupdice}
            style={{ mixBlendMode: "lighten" }}
            className="absolute bottom-40 right-20"
            alt=""
            srcSet=""
          />
        </div>
      </section>
    </>
  );
}

export default Banner4;
