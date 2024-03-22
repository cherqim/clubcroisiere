import { motion } from 'framer-motion'

const Banner2 = () => {
  return (
    <section className="relative my-20 flex w-full flex-col items-center justify-center bg-banner bg-cover bg-center bg-no-repeat px-5 py-10 md:my-20 md:h-[500px] md:p-0">
      <div className="bg-overlay z-10"></div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="z-20 flex flex-col items-center gap-5 md:w-1/2"
      >
        <h1 className="text-center font-heading text-[28px] text-white md:text-left md:text-[48px]">
          Des Destinations Époustouflantes
        </h1>
        <p className="text-center font-p text-[14px] font-light text-white md:text-[16px]">
          Explorez la Méditerranée, les Caraïbes, et bien plus avec nos
          croisières exceptionnelles. Que vous voyagiez en solo, en groupe, ou
          pour des événements d’entreprise, nos voyages sont conçus pour
          répondre à toutes vos envies.
        </p>
        <button
          className="btn-primary"
          aria-label="Reservez votre place maintenant"
        >
          Réservez votre place maintenant
        </button>
      </motion.div>
    </section>
  )
}

export default Banner2
