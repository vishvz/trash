import { useState } from "react";
import most from "../assets/images/most.png";
import logo from "../assets/images/headerIcon.png";
import bannerLogo from "../assets/images/bannerLogo.png";

function Banner() {
    return (
        <>
            <section className="container mx-auto h-screen">
                <div className="flex">
                    <div className="pt-36 flex-1 items-start flex flex-col">
                        <img src={logo} alt="" srcSet="" className="h-48 pb-3" />
                        <h1 className="text-7xl font-bold pb-10">Imandari ek mahanga shok hai jo har kisike bas ki baat nahi hoti.</h1>
                        <img src={most} alt="" srcSet="" className="pb-8" />
                        <h2 className="text-5xl font-bold pb-10 text-white">For newID WhatsApp us on</h2>
                    </div>
                    <div className="flex-1 justify-center items-center flex pt-32">
                        <img src={bannerLogo} alt="" srcSet="" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
