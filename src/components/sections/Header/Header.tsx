import React from 'react'
import logo from 'assets/logo.svg'
import { Facebook, Instagram } from 'lucide-react'
const Header = () => {
  return (
    <div className="relative z-30 h-20 max-h-20 w-full  text-white">
      <div className="flex h-20 max-h-20 w-full flex-row  items-center justify-between border-b  px-20 font-p text-[12px] uppercase">
        {/* Logo */}
        <div className="w-1/3">
          <img src={logo} alt="logo" className="size-20" />
        </div>
        {/* Nav */}
        <div className="h-full w-1/3">
          <ul className="flex  h-full flex-row items-center justify-evenly tracking-[2px]">
            <li className="flex h-full items-center justify-center transition-all duration-500 ease-in-out hover:before:w-full">
              <span className="before:absolute before:inset-x-0 before:top-0 before:h-[4px] before:bg-transparent before:transition-all before:duration-500 before:ease-in-out">
                Découvrir
              </span>
            </li>
            <li>Nos Croisières</li>
            <li>Avis Clients</li>
          </ul>
        </div>
        {/* Social */}
        <div className="flex w-1/3 flex-row items-center justify-end gap-2">
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  )
}

export default Header
