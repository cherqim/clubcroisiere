import vertuosa from 'assets/msc-vertuosa.webp'
import yacht from 'assets/yacht.webp'
import aerial from 'assets/aerial.webp'
import { motion } from 'framer-motion'
const voyages = [
  {
    name: 'Msc Virtuosa',
    date: 'Du 08 au février 2024',
    itin: 'Emirates – Bahrain – Qatar – Arabie Saoudite',
    desc: 'Préparez-vous à vivre une expérience de croisière exceptionnelle avec Celebrity Cruise. Découvrez des destinations de rêve à bord de l’un de nos navires de renommée mondiale.',
    btn: 'Réservez maintenant',
    img: vertuosa
  },
  {
    name: 'Icon of the Seas',
    date: 'DU 27 AU 04 AVRIL 2024',
    itin: 'Floride -Honduras – Mexique – Bahamas',
    desc: 'Rejoignez-nous à bord de l’Icon of the Seas pour une croisière vers une destination enchanteresse. Profitez du luxe et du divertissement tout en explorant des endroits magnifiques.',
    btn: 'Voir les détails',
    img: aerial
  },
  {
    name: 'Diamond princess',
    date: 'DU 17 AVRIL AU 27 MAI 2024',
    itin: 'bientôt disponible',
    desc: 'Laissez-vous émerveiller lors de notre croisière à bord du Diamond Princess. Découvrez des destinations captivantes tout en savourant le confort de ce navire prestigieux.        ',
    btn: 'Réservez maintenant',
    img: yacht
  }
]

const Voyages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 200 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="flex  w-full flex-col items-center justify-center gap-5 "
    >
      <h3 className="px-6 font-p text-[14px] uppercase text-accent md:text-[16px]">
        Voyages Planifiés
      </h3>
      <h1 className="px-6 text-center font-heading text-[24px] font-bold text-secondary md:text-[48px]">
        Prochaines Escales : Aventures en Vue
      </h1>
      <h4 className="px-6 font-p text-[14px] text-primary md:text-[16px]">
        Découvrez Nos Futures Destinations de Rêve
      </h4>
      <div className="grid w-full max-w-7xl grid-cols-1 md:grid-cols-3">
        {voyages.map((voy, i) => (
          <Cards key={i} {...voy} />
        ))}
      </div>
    </motion.div>
  )
}

const Cards = ({
  name,
  date,
  itin,
  desc,
  btn,
  img
}: {
  name: string
  date: string
  itin: string
  desc: string
  btn: string
  img: string
}) => {
  return (
    <div className="m-3 flex flex-col items-start justify-center gap-4 p-4 shadow-[0_0_30px_0_rgba(0,0,0,.1)]">
      <img src={img} alt="msc vertuosa" />
      <h4 className="font-p text-[10px] uppercase leading-[24px] tracking-[2px] text-accent md:text-[12px]">
        {date}
      </h4>
      <h2 className="font-heading text-[18px] font-bold text-secondary md:text-[24px]">
        {name}
      </h2>
      <hr className="w-full bg-gray-400" />
      <p className="font-p text-[12px] text-primary md:text-[14px]">
        <span className="font-semibold underline">Itinéraire</span>: {itin}
      </p>
      <p className="font-p text-[12px] text-primary md:text-[14px]">{desc}</p>
      <button className="btn-primary">{btn}</button>
    </div>
  )
}

export default Voyages
