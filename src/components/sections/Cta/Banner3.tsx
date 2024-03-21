const Banner3 = () => {
  return (
    <section className="relative flex h-[500px] w-full flex-col items-start justify-center bg-banner bg-cover bg-center bg-no-repeat px-20">
      <div className="bg-overlay z-10"></div>
      <div className="z-20 flex  flex-col  gap-5">
        <h1 className="font-heading text-[48px] text-white">
          Prêt à Embarquer ?
        </h1>
        <p className="text-left font-p font-light text-white">
          Découvrez nos offres et commencez à planifier votre prochaine aventure
          en mer.
        </p>
        <button className="btn-primary mt-5 w-fit">
          Réservez votre place maintenant
        </button>
      </div>
    </section>
  )
}

export default Banner3
