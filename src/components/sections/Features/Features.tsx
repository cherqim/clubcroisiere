import React from 'react'
import confettis from 'assets/confettis.png'
import puzzle from 'assets/puzzle.webp'
import boussole from 'assets/boussole.png'
import { motion } from 'framer-motion'

const feats = [
  {
    title: 'Expérience unique',
    desc: "Découvrez nos croisières conçues avec plus de 38 ans d'expérience, garantissant des voyages sans pareil.",
    img: boussole,
    alt: 'boussole'
  },
  {
    title: 'Événements Inoubliables',
    desc: 'Explorez nos croisières clés en main, créant des moments inoubliables et des souvenirs pour toute une vie.',
    img: confettis,
    alt: 'confettis'
  },
  {
    title: 'Personnalisation Ultime',
    desc: 'Profitez de notre personnalisation complète pour des voyages qui répondent à vos rêves et désirs les plus profonds.',
    img: puzzle,
    alt: 'puzzle'
  }
]

const Features = () => {
  const delayOrder = [2, 0, 1]
  return (
    <section className="relative z-[9999] flex h-auto w-full flex-col items-center justify-center gap-5 bg-transparent md:mt-[-80px] md:flex-row">
      {feats.map((feat, i) => (
        <FeatureCard key={i} {...feat} delay={delayOrder[i] * 0.2} />
      ))}
    </section>
  )
}

const FeatureCard = ({
  title,
  desc,
  img,
  alt,
  delay
}: {
  title: string
  desc: string
  img: string
  alt: string
  delay: number
}) => {
  return (
    <motion.article
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: delay }}
      className="m-3 flex h-80 w-96 flex-col items-center justify-center bg-white p-[48px] shadow-[0_-10px_30px_0_rgba(0,0,0,.1)]"
    >
      <img src={img} alt={alt} className="mb-[15px] size-20" />
      <h3 className="my-2 font-heading text-[18px] font-semibold text-secondary md:text-[24px]">
        {title}
      </h3>
      <p className="h-28 text-center font-p text-[14px] font-normal leading-[24px] tracking-normal md:text-[16px]">
        {desc}
      </p>
    </motion.article>
  )
}

export default Features
