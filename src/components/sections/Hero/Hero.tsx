import Header from 'components/sections/Header/Header'
import { ImagesSlider } from '../../ui/slideshow'

function Hero() {
  const images = [
    '/assets/croi3.webp',
    '/assets/croi2.webp',
    '/assets/croi1.jpeg'
  ]
  return (
    <section>
      <ImagesSlider images={images} overlay overlayClassName="bg-overlay">
        <Header />
        <div className="z-30 mx-20 flex h-full flex-col items-start justify-center">
          <h1 className=" font-heading text-[150px] font-bold leading-[150px] tracking-[-2px] text-white/10">
            Club <br /> Croisière
          </h1>
          <div className="absolute  flex w-2/5 flex-col items-start justify-center">
            <p className="self-start font-p text-[16px] font-normal leading-[16px] tracking-normal text-white">
              Découverez Le Monde Sur l&apos;Eau
            </p>
            <h1 className="z-50 font-heading text-[72px] font-bold text-white">
              Club Croisière
            </h1>
            <p className="me-[14.4px] self-start font-p text-[16px] font-normal leading-[24px] tracking-normal text-white">
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
