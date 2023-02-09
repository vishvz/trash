import { useState } from 'react'
import group from '../assets/images/Group.png'
import logo from '../assets/images/headerIcon.png'
import login from '../assets/images/login1.png'
import signUp from '../assets/images/SignUp.png'

function Header() {
  return (
    <>
      <header>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-center py-8 container mx-auto">
          <div>
            <img src={logo} alt="" srcSet="" className="h-16 md:h-28" />
          </div>
          <div className="flex gap-5">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={login} alt="" srcSet="" className="h-12 md:h-16" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={signUp} alt="" srcSet="" className="h-12 md:h-16" />
            </a>
          </div>
        </div>
      </header>
      <img src={group} alt="" srcSet="" className="w-full" />
    </>
  )
}

export default Header
