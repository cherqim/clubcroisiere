const Banner3 = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-banner bg-cover bg-center bg-no-repeat px-5 py-10 md:h-[500px] md:items-start md:px-20">
      <div className="bg-overlay z-10"></div>
      <div className="z-20 flex  flex-col  gap-5">
        <h1 className="w-full text-center font-heading text-[28px] text-white md:text-left md:text-[48px]">
          Prêt à Embarquer ?
        </h1>
        <p className="text-center font-p font-light text-white md:text-left">
          Découvrez nos offres et commencez à planifier votre prochaine aventure
          en mer.
        </p>
        <button className="btn-primary mt-5 w-fit self-center md:self-start">
          Réservez votre place maintenant
        </button>
      </div>
    </section>
  )
}

export default Banner3
