import React from 'react'
import logo from 'assets/logo.svg'
import { Facebook, Instagram } from 'lucide-react'
const Header = () => {
  return (
    <div className="relative z-30 max-h-20 w-full  text-white">
      <div className="flex max-h-20 w-full flex-row  items-center justify-between border-b  px-20 font-p text-[12px] uppercase">
        {/* Logo */}
        <div className="w-1/3">
          <img src={logo} alt="logo" className="size-[100px]" />
        </div>
        {/* Nav */}
        <nav className="w-1/3">
          <ul className="flex  flex-row items-center justify-evenly tracking-[2px]">
            <li>Découvrir</li>
            <li>Nos Croisières</li>
            <li>Avis Clients</li>
          </ul>
        </nav>
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
