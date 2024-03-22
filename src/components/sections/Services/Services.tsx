import girl from 'assets/girl.jpeg'
import { Headset, Move, Tags } from 'lucide-react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className=" flex w-full max-w-7xl flex-col md:m-20 md:flex-row">
      <motion.div
        initial={{ opacity: 0, translateX: -200 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="shadow-[-15px_15px_0_0_#005cd4] md:w-1/2"
      >
        <img
          src={girl}
          className="w-full object-cover object-[center_right] md:h-[740px]"
        />
      </motion.div>
      <div className="flex flex-col items-start justify-start gap-5 p-5 md:p-16">
        <motion.h2
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full text-center font-heading text-[28px] font-bold text-secondary md:text-left md:text-[48px]"
        >
          Services Personnalisés
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
          className="mb-[35px] flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-start"
        >
          <div className="flex size-[56px] items-center justify-center rounded-full bg-[#c8dcf6] text-accent">
            <Headset strokeWidth={2} size={32} />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
            <h3 className="text-center font-heading text-[24px] font-bold text-secondary">
              Assistance Clientèle
            </h3>
            <p className="text-center font-p font-light text-primary md:text-left">
              Nous sommes à votre service pour un voyage parfait.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
          className="mb-[35px] flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-start"
        >
          <div className="flex size-[56px] items-center justify-center rounded-full bg-[#c8dcf6] text-accent">
            <Move strokeWidth={2} size={32} />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
            <h3 className="font-heading text-[24px] font-bold text-secondary">
              Options Flexibles
            </h3>
            <p className="text-center font-p font-light text-primary md:text-left">
              Des itinéraires sur mesure selon vos désirs.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.9 }}
          className="mb-[35px] flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-start"
        >
          <div className="flex size-[56px] items-center justify-center rounded-full bg-[#c8dcf6] text-accent">
            <Tags strokeWidth={2} size={32} />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
            <h3 className="font-heading text-[24px] font-bold text-secondary">
              Offres Spéciales
            </h3>
            <p className="text-center font-p font-light text-primary md:text-left">
              Des promotions et des tarifs avantageux régulièrement mis à jour.
            </p>
          </div>
        </motion.div>
        <button className="btn-primary self-center md:self-start">
          Réservez Maintenant
        </button>
      </div>
    </section>
  )
}

export default Services
