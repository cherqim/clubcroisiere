import europe from 'assets/Europe.webp'
import africa from 'assets/Africa.webp'
import namerica from 'assets/North-America.webp'
import samerica from 'assets/South-America.webp'
import oceania from 'assets/Ocenia.webp'
import asia from 'assets/Asia.webp'
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
const voyages = [
  {
    code: 'asia',
    name: 'Asie',
    img: asia,
    desc: 'Exotisme : Partez pour un voyage fascinant à travers des traditions et des paysages uniques.'
  },
  {
    code: 'namerica',
    name: 'Amérique Du Nord',
    img: namerica,
    backContent:
      'Aventure : Découvrez des métropoles vibrantes et des paysages naturels époustouflants.'
  },
  {
    code: 'samerica',
    name: 'Amérique Du Sud',
    img: samerica,
    backContent:
      'Culture : Immergez-vous dans des cultures riches et diversifiées.'
  },
  {
    code: 'africa',
    name: 'Afrique',
    img: africa,
    backContent:
      'Découverte : Explorez les côtes exotiques, des villes historiques aux plages magnifiques.'
  },
  {
    code: 'oceania',
    name: 'Océanie',
    img: oceania,
    backContent:
      'Nature : Émerveillez-vous devant des paradis insulaires et des merveilles naturelles.'
  },
  {
    code: 'europe',
    name: 'Europe',
    img: europe,
    backContent:
      "Histoire : Naviguez à travers des siècles d'histoire et de patrimoine culturel."
  }
]

const getAnimationSettings = (isFlipped: boolean) => ({
  initial: {
    translateZ: '0',
    scale: '1',
    shadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  animate: {
    translateZ: isFlipped ? '60px' : '0',
    scale: isFlipped ? '1' : '1',
    shadow: isFlipped
      ? '0px 0px 30px rgba(0,0,0,.1)'
      : '0px 0px 0px rgba(0,0,0,0)'
  },
  transition: { duration: 0.3, ease: 'easeInOut' }
})

const Continents = () => {
  return (
    <div className="mt-20 flex  w-full flex-col items-center justify-center gap-5">
      <h3 className=" font-p uppercase text-accent">
        EXPLOREZ LE MONDE, UNE CROISIÈRE À LA FOIS
      </h3>
      <h1 className="font-heading text-[48px] font-bold text-secondary">
        Voyages au Cœur des Continents
      </h1>
      <h4 className="font-p text-primary">
        Chez Club Croisière, nous croyons que chaque région du monde a son
        propre charme et mystère
      </h4>
      <div className="grid h-auto w-full max-w-7xl grid-cols-3">
        {voyages.map((voy, i) => (
          <Cards
            key={i}
            img={voy.img}
            name={voy.name}
            backContent={voy.backContent}
            code={voy.code}
          />
        ))}
      </div>
    </div>
  )
}

const Cards = ({
  img,
  name,
  backContent,
  code
}: {
  name: string
  backContent?: string
  img: string
  code: string
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false)
  const controls = useAnimation()
  //   const contentControls = useAnimation()

  useEffect(() => {
    controls.start({ rotateY: isFlipped ? 180 : 0 })
  }, [isFlipped, controls])

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className="relative m-3 flex min-h-[500px] flex-col items-center justify-center gap-4 bg-white p-12 text-white shadow-[0_0_30px_0_rgba(0,0,0,.1)]"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={controls}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute size-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute flex size-full flex-col items-center justify-center gap-4 bg-secondary p-12 text-white shadow-[0_0_30px_0_rgba(0,0,0,.1)]"
          style={{
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <div style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
            <motion.img
              {...getAnimationSettings(isFlipped)}
              src={img}
              alt="msc vertuosa"
            />
            <motion.h2
              {...getAnimationSettings(isFlipped)}
              className="text-center font-heading text-[36px] font-bold"
            >
              {name}
            </motion.h2>
          </div>
        </div>
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`bg-${code} absolute flex size-full flex-col items-center justify-end gap-4  p-12 text-white shadow-[0_0_30px_0_rgba(0,0,0,.1)]`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="bg-overlay"></div>
          <BackCard
            isFlipped={isFlipped}
            backContent={backContent}
            name={name}
          />
        </div>
      </motion.div>
    </div>
  )
}
const BackCard = ({
  backContent,
  name,
  isFlipped
}: {
  backContent?: string
  name: string
  isFlipped: boolean
}) => {
  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center gap-5"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      <motion.h2
        {...getAnimationSettings(isFlipped)}
        className="relative z-[3] font-heading text-[36px] font-bold"
      >
        {/* {!backContent ? 'Europe' : backContent} */}
        {name}
      </motion.h2>
      <motion.p
        {...getAnimationSettings(isFlipped)}
        className=" relative z-[2] text-center"
      >
        {backContent}
      </motion.p>
      <motion.button
        {...getAnimationSettings(isFlipped)}
        className="btn-primary relative z-[1]"
      >
        Contactez Nous
      </motion.button>
    </div>
  )
}

export default Continents
