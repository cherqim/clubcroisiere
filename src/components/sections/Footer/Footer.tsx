import logo from 'assets/logo_blue.webp'
import { Mail } from 'lucide-react'
const Footer = () => {
  return (
    <footer
      className="relative mt-20 flex w-full flex-col items-center justify-center bg-footer bg-cover bg-no-repeat px-20 md:h-80 md:flex-row md:flex-wrap"
      style={{ backgroundPosition: 'bottom center' }}
    >
      <div className="bg-overlay w-full"></div>
      <div className="z-10  my-10 flex justify-center md:my-0 md:w-1/2">
        <img src={logo} alt="logo" className="w-60" />
      </div>
      <div className="z-10 flex w-full flex-col text-white md:w-1/2">
        <h3 className="font-heading text-[24px] font-bold ">Newsletter</h3>
        <p className="mt-5 w-full text-justify font-p text-[14px] font-light md:w-3/4">
          Plongez dans le monde des voyages maritimes avec notre newsletter.
          Abonnez-vous dès aujourd&apos;hui pour découvrir des pépites
          d&apos;information et des surprises exclusives.
        </p>
        <div className="mt-5 flex flex-col md:w-3/4 md:flex-row">
          <label htmlFor="email" className="hidden"></label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="h-12 border-none px-5 md:w-8/12"
          />
          <button className="btn-primary  flex h-12 items-center justify-center md:w-4/12">
            <Mail strokeWidth={1} />
          </button>
        </div>
      </div>
      <hr className="w-3/4 " />
    </footer>
  )
}

export default Footer
