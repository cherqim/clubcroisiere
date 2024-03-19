import React from 'react'
import confettis from 'assets/confettis.png'
import puzzle from 'assets/puzzle.webp'
import boussole from 'assets/boussole.png'

const feats = [
  {
    title: 'Expérience unique',
    desc: "Découvrez nos croisières conçues avec plus de 38 ans d'expérience, garantissant des voyages sans pareil.",
    img: boussole
  },
  {
    title: 'Événements Inoubliables',
    desc: 'Explorez nos croisières clés en main, créant des moments inoubliables et des souvenirs pour toute une vie.',
    img: confettis
  },
  {
    title: 'Personnalisation Ultime',
    desc: 'Profitez de notre personnalisation complète pour des voyages qui répondent à vos rêves et désirs les plus profonds.',
    img: puzzle
  }
]

const Features = () => {
  return (
    <section className="relative z-[9999] mt-[-80px] flex h-auto w-full flex-row items-center justify-center gap-5 bg-transparent">
      {feats.map((feat, i) => (
        <FeatureCard key={i} {...feat} />
      ))}
    </section>
  )
}

const FeatureCard = ({
  title,
  desc,
  img
}: {
  title: string
  desc: string
  img: string
}) => {
  return (
    <div className="m-3 flex h-80 w-96 flex-col items-center justify-center bg-white p-[48px] shadow-[0_-10px_30px_0_rgba(0,0,0,.1)]">
      <img src={img} alt="boussole" className="mb-[15px] size-20" />
      <h3 className="my-2 font-heading text-[24px] font-semibold text-secondary">
        {title}
      </h3>
      <p className="h-28 text-center font-p text-[16px] font-normal leading-[24px] tracking-normal">
        {desc}
      </p>
    </div>
  )
}

export default Features
