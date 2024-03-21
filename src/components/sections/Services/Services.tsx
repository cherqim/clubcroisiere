import girl from 'assets/girl.jpeg'
import { Headset, Move, Tags } from 'lucide-react'

const Services = () => {
  return (
    <section className=" m-20 flex w-full max-w-7xl">
      <div className="w-1/2 shadow-[-15px_15px_0_0_#005cd4]">
        <img
          src={girl}
          className="h-[740px] object-cover object-[center_right]"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-5 p-16">
        <h2 className="font-heading text-[48px] font-bold text-secondary">
          Services Personnalisés
        </h2>
        <div className="mb-[35px] flex gap-4">
          <div className="flex size-[56px] items-center justify-center rounded-full bg-[#c8dcf6] text-accent">
            <Headset strokeWidth={2} size={32} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-heading text-[24px] font-bold text-secondary">
              Assistance Clientèle
            </h3>
            <p className="font-p font-light text-primary">
              Nous sommes à votre service pour un voyage parfait.
            </p>
          </div>
        </div>
        <div className="mb-[35px] flex gap-4">
          <div className="flex size-[56px] items-center justify-center rounded-full bg-[#c8dcf6] text-accent">
            <Move strokeWidth={2} size={32} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-heading text-[24px] font-bold text-secondary">
              Options Flexibles
            </h3>
            <p className="font-p font-light text-primary">
              Des itinéraires sur mesure selon vos désirs.
            </p>
          </div>
        </div>
        <div className="mb-[35px] flex gap-4">
          <div className="flex size-[56px] items-center justify-center rounded-full bg-[#c8dcf6] text-accent">
            <Tags strokeWidth={2} size={32} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-heading text-[24px] font-bold text-secondary">
              Offres Spéciales
            </h3>
            <p className="font-p font-light text-primary">
              Des promotions et des tarifs avantageux régulièrement mis à jour.
            </p>
          </div>
        </div>
        <button className="btn-primary">Réservez Maintenant</button>
      </div>
    </section>
  )
}

export default Services
