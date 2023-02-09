import React from 'react'
import group8 from '../assets/images/Group8.png'
import group9 from '../assets/images/Group9.png'
import group20 from '../assets/images/Group20.png'
import group23 from '../assets/images/Group23.png'
import group21 from '../assets/images/Group21.png'
import Card from './card'

const Banner5 = () => {
  return (
    <section className="container mx-auto min-h-screen px-5">
      <div className="flex flex-col gap-3 sm:gap-6 lg:gap-10">
        <div className="flex flex-col justify-center items-center">
          <img src={group8} alt="" />
          <div className="text-bg text-3xl sm:text-5xl lg:text-6xl font-bold text-center">
            CELEBS LOVE US
          </div>
          <img src={group9} alt="" />
        </div>
        <div className="flex flex-wrap justify-around items-center">
          <Card imgName={group20} />
          <Card imgName={group23} />
          <Card imgName={group21} />
        </div>
      </div>
    </section>
  )
}

export default Banner5
