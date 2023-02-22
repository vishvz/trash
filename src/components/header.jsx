import { useState } from "react";
import group from "../assets/images/Group.png";
import logo from "../assets/images/logo-new.webp";

function Header() {
  return (
    <>
      <header>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-center py-8 container mx-auto px-5">
          <div>
            <img
              src={logo}
              alt=""
              style={{ mixBlendMode: "lighten" }}
              srcSet=""
              className="h-16 md:h-28"
            />
          </div>
          <div className="flex gap-5">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <div className="shadow-lg hover:shadow-xl hover:shadow-[#ffbe4b] shadow-[#ffbe4b] border-2 border-[#ffbe4b] text-[#ffbe4b] font-semibold md:text-3xl text-xl py-2 md:px-10 px-7">
                Login
              </div>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <div className="shadow-lg hover:shadow-xl hover:shadow-[#ffbe4b] shadow-[#ffbe4b] border-2 border-[#ffbe4b] text-[#ffbe4b] font-semibold md:text-3xl text-xl py-2 md:px-10 px-7">
                SignUp
              </div>
            </a>
          </div>
        </div>
      </header>
      <img src={group} alt="" srcSet="" className="w-full" />
    </>
  );
}

export default Header;
