import { useState } from 'react'
import most from '../assets/images/most.png'
import logo from '../assets/images/headerIcon.png'
import bannerLogo from '../assets/images/bannerLogo.png'
import Button from '../components/button'

function Banner() {
  return (
    <>
      <section className="container mx-auto min-h-screen flex flex-col justify-center items-center md:pb-40 pb-20">
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col justify-center items-center gap-5 px-3 py-5 md:items-start md:flex-1">
            <img src={logo} alt="" srcSet="" className="h-16 sm:h-24" />
            <h1 className="text-bg text-center text-3xl uppercase font-bold md:text-start md:text-5xl lg:text-7xl">
              Imandari ek mahanga shok hai jo har kisike bas ki baat nahi hoti.
            </h1>
            <img src={most} alt="" srcSet="" className="" />
            <h2 className=" text-white md:text-3xl lg:text-5xl">
              For newID WhatsApp us on
            </h2>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button />
              <Button />
            </div>
          </div>
          <div className="px-3 h-38 sm:flex-1">
            <img src={bannerLogo} alt="" srcSet="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
