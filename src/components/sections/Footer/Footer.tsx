import logo from 'assets/logo_blue.webp'
import { Mail } from 'lucide-react'
const Footer = () => {
  return (
    <div
      className="relative mt-20 flex h-80 w-full flex-wrap items-center justify-center bg-footer bg-cover bg-no-repeat px-20"
      style={{ backgroundPosition: 'bottom center' }}
    >
      <div className="bg-overlay w-full"></div>
      <div className="z-10  flex w-1/2 justify-center">
        <img src={logo} alt="logo" className="w-60" />
      </div>
      <div className="z-10 flex w-1/2 flex-col  text-white">
        <h3 className="font-heading text-[24px] font-bold ">Newsletter</h3>
        <p className="mt-5 w-3/4 text-justify font-p text-[14px] font-light">
          Plongez dans le monde des voyages maritimes avec notre newsletter.
          Abonnez-vous dès aujourd&apos;hui pour découvrir des pépites
          d&apos;information et des surprises exclusives.
        </p>
        <div className="mt-5 flex w-3/4">
          <input
            type="email"
            placeholder="Email"
            className="h-12 w-8/12 border-none px-5"
          />
          <button className="btn-primary  flex h-12 w-4/12 items-center justify-center">
            <Mail strokeWidth={1} />
          </button>
        </div>
      </div>
      <hr className="w-3/4 " />
    </div>
  )
}

export default Footer
