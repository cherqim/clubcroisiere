import React from 'react'

const Banner2 = () => {
  return (
    <section className="relative my-20 flex h-[500px] w-full flex-col items-center justify-center bg-banner bg-cover bg-center bg-no-repeat">
      <div className="bg-overlay z-10"></div>
      <div className="z-20 flex w-1/2 flex-col items-center gap-5">
        <h1 className="font-heading text-[48px] text-white">
          Des Destinations Époustouflantes
        </h1>
        <p className="text-center font-p font-light text-white">
          Explorez la Méditerranée, les Caraïbes, et bien plus avec nos
          croisières exceptionnelles. Que vous voyagiez en solo, en groupe, ou
          pour des événements d’entreprise, nos voyages sont conçus pour
          répondre à toutes vos envies.
        </p>
        <button className="btn-primary">Réservez votre place maintenant</button>
      </div>
    </section>
  )
}

export default Banner2
