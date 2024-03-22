import avis from 'assets/avis.webp'
import { motion } from 'framer-motion'

const Avis = () => {
  return (
    <section className="relative mt-20 flex size-full max-w-7xl flex-col items-center justify-center md:mx-20 md:flex-row">
      <div className="w-full md:w-1/3">
        <motion.img
          initial={{ rotate: '90deg' }}
          animate={{ rotate: '0deg' }}
          transition={{ duration: 0.5 }}
          src={avis}
          alt={avis}
          className="-z-10 h-[200px] w-full object-cover px-5 align-middle md:h-[775px] md:max-w-[35vw] md:px-0"
          style={{ objectPosition: 'center center' }}
        />
      </div>
      <motion.div
        initial={{ translateX: 200, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="z-10 flex w-full flex-col gap-10 bg-white text-center md:my-16 md:-ml-10 md:w-2/3 md:p-20 md:text-left"
      >
        <div className="flex flex-col">
          <h2 className="mt-5 font-heading text-[28px] font-bold text-secondary md:text-[48px]">
            Ce que nos clients disent
          </h2>
          <p className="font-p text-[16px] font-semibold text-primary">
            Vos Expériences, Nos Engagements
          </p>
        </div>
        <div className="scrollbar-hide flex w-full flex-row gap-5  overflow-x-scroll  p-5 hover:cursor-grab">
          <div className="flex w-[400px]  shrink-0 flex-col items-center justify-center bg-gray-100 p-8">
            <p className="text-center font-p font-light text-primary">
              J&apos;ai été éblouie par la qualité du service client de Club
              Croisière. Ils ont vraiment écouté mes besoins et m&apos;ont
              proposé une croisière sur mesure qui a dépassé toutes mes
              attentes. Une expérience exceptionnelle que je recommande
              vivement!
            </p>
            <h4 className="mt-4 font-p font-semibold text-accent">
              Amal & Sofiane
            </h4>
            <p className="mt-2 text-[14px] tracking-wide text-primary">RABAT</p>
          </div>
          <div className="flex w-[400px] shrink-0 flex-col items-center justify-center bg-gray-100 p-8">
            <p className="text-center font-p font-light text-primary">
              J&apos;ai été éblouie par la qualité du service client de Club
              Croisière. Ils ont vraiment écouté mes besoins et m&apos;ont
              proposé une croisière sur mesure qui a dépassé toutes mes
              attentes. Une expérience exceptionnelle que je recommande
              vivement!
            </p>
            <h4 className="mt-4 font-p font-semibold text-accent">
              Amal & Sofiane
            </h4>
            <p className="mt-2 text-[14px] tracking-wide text-primary">RABAT</p>
          </div>
          <div className="flex w-[400px] shrink-0 flex-col items-center justify-center bg-gray-100 p-8">
            <p className="text-center font-p font-light text-primary">
              J&apos;ai été éblouie par la qualité du service client de Club
              Croisière. Ils ont vraiment écouté mes besoins et m&apos;ont
              proposé une croisière sur mesure qui a dépassé toutes mes
              attentes. Une expérience exceptionnelle que je recommande
              vivement!
            </p>
            <h4 className="mt-4 font-p font-semibold text-accent">
              Amal & Sofiane
            </h4>
            <p className="mt-2 text-[14px] tracking-wide text-primary">RABAT</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Avis
