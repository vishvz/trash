import { useState } from 'react'
import banner3Logo from '../assets/images/banner3Logo.png'
import banner4Logo from '../assets/images/banner4Logo.png'
import Button from '../components/button'

function Banner3() {
  return (
    <>
      <div className="min-h-screen">
        <section className="container mx-auto flex flex-col justify-center items-center px-5">
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            <div className="flex flex-col justify-center items-center gap-5 px-3 py-5 md:items-start md:flex-1">
              <h1 className="text-bg text-center text-xl uppercase font-bold md:text-start md:text-3xl lg:text-5xl">
                Customer Support
              </h1>
              <h2 className=" text-white md:text-2xl lg:text-4xl text-center md:text-start">
                Get In Touch With Zetbet CUSTOMER CARE For Any Queries,
                Emergencies, Feedbacks or Complaints. We Are Here To Help You
                24/7 With Our Online Services. 24 hours service
              </h2>
              <h2 className=" text-white md:text-xl lg:text-3xl text-center md:text-start">
                Customer Care No For WhatsApp & Calling
              </h2>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button />
                <Button />
              </div>
            </div>
            <div className="px-3 h-38 sm:flex-1">
              <img src={banner3Logo} alt="" srcSet="" />
            </div>
          </div>
        </section>

        <section className="container mx-auto flex flex-col justify-center items-center md:pb-40 pb-20">
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            <div className="px-3 h-38 sm:flex-1">
              <img src={banner4Logo} alt="" srcSet="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-5 px-3 py-5 md:items-start md:flex-1">
              <h1 className="text-bg text-center text-xl uppercase font-bold md:text-start md:text-3xl lg:text-5xl">
                Place your BET in our IDs
              </h1>
              <h2 className=" text-white md:text-2xl lg:text-4xl text-center md:text-start">
                With Our Step-By-Step Guide For Beginners, Get Started Playing.
                Start Learning Now.. 24/7 ACTIVE.
              </h2>
              <h2 className=" text-white md:text-xl lg:text-3xl text-center md:text-start">
                We deals only on WhatsApp
              </h2>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button />
                <Button />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Banner3
