import { useState } from 'react'
import telegram from '../assets/images/telegram.png'
import instagram from '../assets/images/insta.png'
import banner5Logo from '../assets/images/banner5Logo.png'
import Button from '../components/button'

function Banner4() {
  return (
    <>
      <section className="container mx-auto min-h-screen flex flex-col justify-center items-center px-5">
        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col justify-center items-center gap-5 px-3 py-5 md:items-start md:flex-1">
            <h1 className="text-bg text-center text-xl uppercase font-bold md:text-start md:text-3xl lg:text-5xl">
              Get In Touch With Zetbet Customer Care
            </h1>
            <h2 className=" text-white md:text-xl lg:text-3xl text-center md:text-start">
              For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here
              To Help You 24/7 With Our Online Services.
            </h2>
            <h2 className=" text-white md:text-xl lg:text-3xl text-center md:text-start">
              Whatsapp us on
            </h2>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button />
              <Button />
            </div>
            <h2 className=" text-white md:text-xl lg:text-3xl text-center md:text-start">
              Customer care number
            </h2>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button />
            </div>
            <h2 className=" text-white md:text-xl lg:text-3xl text-center md:text-start">
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
          <div className="px-3 h-38 sm:flex-1">
            <img src={banner5Logo} alt="" srcSet="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner4
