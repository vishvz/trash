import { useState } from 'react'
import '../assets/styles/global.css'
import WhatsApp from '../assets/images/whatsapp.png'

function Button() {
  return (
    <a href="http://" target="_blank" rel="noopener noreferrer">
      <button className="btn sm:p-2 md:py-3 md:px-10 lg:py-5 lg:px-14 font-bold lg:text-2xl text-white flex gap-2">
        <img src={WhatsApp} alt="" srcset="" />
        +91-9125787115
      </button>
    </a>
  )
}

export default Button
