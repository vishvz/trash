import { useState } from 'react'
import '../assets/styles/global.css'

function Card({ imgName }) {
  return (
    <div className="p-3">
      <img src={imgName} alt="" srcSet="" />
    </div>
  )
}

export default Card
