import avis from 'assets/avis.webp'

const Avis = () => {
  return (
    <div className="relative mx-20 mt-20 flex size-full max-w-7xl items-center justify-center">
      <div className=" w-1/3">
        <img
          src={avis}
          alt={avis}
          className="h-[775px] w-full max-w-[35vw] object-cover align-middle"
          style={{ objectPosition: 'center center' }}
        />
      </div>
      <div className="my-16 -ml-10 flex w-2/3 flex-col gap-10 bg-white p-20">
        <div className="flex flex-col">
          <h2 className="font-heading text-[48px] font-bold text-secondary">
            Ce que nos clients disent
          </h2>
          <p className="font-p text-[16px] font-semibold text-primary">
            Vos Expériences, Nos Engagements
          </p>
        </div>
        <div className="scrollbar-hide flex w-full flex-row gap-5  overflow-x-scroll  hover:cursor-grab">
          <div className="flex w-[400px]  shrink-0 flex-col items-center justify-center bg-gray-100 p-8">
            <p className="text-center font-p font-light text-primary">
              J&apos;ai été éblouie par la qualité du service client de Club
              Croisière. Ils ont vraiment écouté mes besoins et m&apos;ont
              proposé une croisière sur mesure qui a dépassé toutes mes
              attentes. Une expérience exceptionnelle que je recommande
              vivement!
            </p>
            <h4 className="mt-4 font-p font-semibold text-accent">
              Amal & Sofiane
            </h4>
            <p className="mt-2 text-[14px] tracking-wide text-primary">RABAT</p>
          </div>
          <div className="flex w-[400px] shrink-0 flex-col items-center justify-center bg-gray-100 p-8">
            <p className="text-center font-p font-light text-primary">
              J&apos;ai été éblouie par la qualité du service client de Club
              Croisière. Ils ont vraiment écouté mes besoins et m&apos;ont
              proposé une croisière sur mesure qui a dépassé toutes mes
              attentes. Une expérience exceptionnelle que je recommande
              vivement!
            </p>
            <h4 className="mt-4 font-p font-semibold text-accent">
              Amal & Sofiane
            </h4>
            <p className="mt-2 text-[14px] tracking-wide text-primary">RABAT</p>
          </div>
          <div className="flex w-[400px] shrink-0 flex-col items-center justify-center bg-gray-100 p-8">
            <p className="text-center font-p font-light text-primary">
              J&apos;ai été éblouie par la qualité du service client de Club
              Croisière. Ils ont vraiment écouté mes besoins et m&apos;ont
              proposé une croisière sur mesure qui a dépassé toutes mes
              attentes. Une expérience exceptionnelle que je recommande
              vivement!
            </p>
            <h4 className="mt-4 font-p font-semibold text-accent">
              Amal & Sofiane
            </h4>
            <p className="mt-2 text-[14px] tracking-wide text-primary">RABAT</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avis
