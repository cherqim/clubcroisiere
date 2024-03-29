import bateau from 'assets/bateau.webp'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <header className="relative inset-0 mt-20 flex  w-full max-w-7xl flex-col items-center justify-center md:mx-20 md:h-[450px] md:flex-row">
      <div className="bg-mapp absolute inset-0 -z-10"></div>
      <motion.div
        initial={{ opacity: 0, translateX: -200 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="flex flex-col items-start justify-center gap-5 p-10 md:w-1/2"
      >
        <h2 className="font-heading text-[28px] font-semibold leading-none text-secondary md:text-[48px]">
          Pourquoi Choisir Club Croisière ?
        </h2>
        <h4 className="font-p text-[14px] leading-[24px] text-accent md:text-[16px]">
          Aventures inoubliables, conçus avec soin
        </h4>
        <p className="text-[14px] text-primary md:text-[16px]">
          Fort de plus de 38 ans d’expérience, Club Croisière excelle dans
          l’organisation de croisières et d’événements maritimes clés en main.
          Chaque voyage est une promesse d’expériences inoubliables, conçu avec
          soin pour satisfaire tous vos désirs.
        </p>
        <button className="btn-primary" aria-label="Reserve your spot now">
          Réservez votre place maintenant
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 200 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, ease: 'easeInOu' }}
        className="flex flex-col items-center justify-center md:w-1/2"
      >
        <img
          src={bateau}
          alt="A boat on the sea"
          className="w-screen align-middle md:max-w-[51vw]"
        />
      </motion.div>
    </header>
  )
}

export default Banner
