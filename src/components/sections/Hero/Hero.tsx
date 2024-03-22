import Header from 'components/sections/Header/Header'
import { ImagesSlider } from '../../ui/slideshow'

const images = [
  '/assets/croi3.webp',
  '/assets/croi2.webp',
  '/assets/croi1.jpeg'
]
function Hero() {
  return (
    <section className="">
      <ImagesSlider images={images} overlay overlayClassName="bg-overlay">
        <Header />
        <div className="z-30  flex size-full flex-col items-center justify-center md:mx-20 md:items-start">
          <h1 className=" font-heading text-[52px] font-bold leading-[150px] tracking-[-2px] text-white/10 md:text-[150px]">
            Club <br className="hidden md:visible" /> Croisière
          </h1>
          <div className="absolute flex flex-col items-center justify-center gap-3 md:w-2/5 md:items-start">
            <p className="font-p  text-[14px] font-light leading-[16px] tracking-normal text-white md:self-start md:text-[16px]">
              Découverez Le Monde Sur l&apos;Eau
            </p>
            <h1 className="z-50 font-heading text-[38px] font-bold text-white md:text-[72px]">
              Club Croisière
            </h1>
            <p className="me-[14.4px] px-5 text-center font-p text-[14px] font-normal leading-[24px] tracking-normal text-white md:self-start md:px-0 md:text-left md:text-[16px]">
              La seule agence marocaine, spécialiste des événements sur des
              bateaux à destination des entreprises et des particuliers, ayant
              l&apos;expérience et la structure pour organiser tout événement
              clés en main.
            </p>
          </div>
        </div>
      </ImagesSlider>
    </section>
  )
}

export default Hero
