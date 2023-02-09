import { useState } from "react";
import group from "../assets/images/Group.png";
import logo from "../assets/images/headerIcon.png";
import login from "../assets/images/login1.png";
import signUp from "../assets/images/SignUp.png";

function Header() {
    return (
        <><header className="h-[140px] relative">
            <div className="flex justify-between container mx-auto">
                <div className="pt-3">
                    <img src={logo} alt="" srcSet="" className="h-28" />
                </div>
                <div className="flex gap-5 pt-10">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src={login} alt="" srcSet="" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src={signUp} alt="" srcSet="" />
                    </a>
                </div>
            </div>
        </header><img src={group} alt="" srcSet="" className="w-full absolute md:top-[128px]" /></>
    );
}

export default Header;
