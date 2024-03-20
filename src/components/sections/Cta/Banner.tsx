import bateau from 'assets/bateau.webp'

const Banner = () => {
  return (
    <section className="relative inset-0 mx-20 mt-20 flex h-[450px] w-full max-w-7xl flex-row items-center justify-center">
      <div className="bg-mapp absolute inset-0 -z-10"></div>
      <div className=" flex w-1/2 flex-col items-start justify-center gap-5 p-10">
        <h2 className="font-heading text-[48px] font-semibold leading-none text-secondary">
          Pourquoi Choisir Club Croisière ?
        </h2>
        <h4 className="font-p leading-[24px] text-accent">
          Aventures inoubliables, conçus avec soin
        </h4>
        <p className="text-primary">
          Fort de plus de 38 ans d’expérience, Club Croisière excelle dans
          l’organisation de croisières et d’événements maritimes clés en main.
          Chaque voyage est une promesse d’expériences inoubliables, conçu avec
          soin pour satisfaire tous vos désirs.
        </p>
        <button className="btn-primary">Réservez votre place maintenant</button>
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center">
        <img
          src={bateau}
          alt="bateau"
          className="w-screen max-w-[51vw] align-middle"
        />
      </div>
    </section>
  )
}

export default Banner
