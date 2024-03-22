import { useState } from 'react'
import logo from 'assets/logo.svg'
import { Facebook, Instagram, AlignJustify } from 'lucide-react'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative z-30 h-20 max-h-20 w-full  text-white">
      <div className="flex h-20 max-h-20 w-full flex-row  items-center justify-between border-b  px-5 font-p text-[12px] uppercase md:px-20">
        {/* Logo */}
        <div className="w-1/3">
          <img src={logo} alt="logo" className="size-20" />
        </div>
        {/* Nav */}
        <div className="hidden h-full w-1/3 md:block">
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
        {/* Mobile Nav */}
        <div className="md:hidden">
          <AlignJustify onClick={toggleMenu} />
        </div>
        {/* Social */}
        <div className="hidden w-1/3  flex-row items-center justify-end gap-2 md:flex">
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  )
}

export default Header
