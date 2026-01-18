import Link from "next/link";
import Image from "next/image";

// Offer Data
const MASSAGE_OFFERS = [
    {
        id: 1,
        title: "Masaż Leczniczy",
        description: "Celowana terapia manualna niwelująca ból kręgosłupa i napięcia mięśniowe. Idealny przy pracy siedzącej oraz przewlekłych dolegliwościach.",
        image: "/img/massage/offer-therapeutic.png",
        bookingUrl: "https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
    },
    {
        id: 2,
        title: "Masaż Sportowy",
        description: "Głęboka praca na tkankach przyspieszająca regenerację powysiłkową. Zwiększa mobilność, poprawia ukrwienie i zapobiega kontuzjom.",
        image: "/img/massage/offer-sports.png",
        bookingUrl: "https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
    },
    {
        id: 3,
        title: "Masaż Relaksacyjny",
        description: "Ukojenie dla układu nerwowego. Delikatne techniki redukujące stres, poprawiające jakość snu i głębokie samopoczucie psychosomatyczne.",
        image: "/img/massage/masaz-relaksacyjny.jpg",
        bookingUrl: "https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
    },
    {
        id: 4,
        title: "Masaż Klasyczny",
        description: "Wszechstronna metoda poprawiająca krążenie i elastyczność mięśni. Fundament dbania o zdrowie fizyczne i utrzymania ciała w dobrej kondycji.",
        image: "/img/massage/masaz-klasyczny.jpg",
        bookingUrl: "https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
    }
];

export default function MassageOffer() {
    return (
        <section className="massage-section massage-offer z-10 relative">
            <div className="wrapper">
                <div className="massage-section__header">
                    <p className="text-small-bold text-green uppercase tracking-wide mb-4">NASZA OFERTA</p>
                    <h2 className="heading-h2">Rodzaje Masażu</h2>
                </div>

                <div className="massage-offer-grid">
                    {MASSAGE_OFFERS.map((offer) => (
                        <article key={offer.id} className="massage-card">
                            <div className="massage-card__image">
                                {/* Use a placeholder if image is missing, or user needs to provide assets */}
                                <Image
                                    src={offer.image}
                                    alt={offer.title}
                                    title={`Oferta: ${offer.title} w Panda Studio`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />
                            </div>
                            <div className="massage-card__content">
                                <h3 className="heading-h4">{offer.title}</h3>
                                <p className="text-medium-normal">{offer.description}</p>
                            </div>
                            <div className="massage-card__footer">
                                <Link
                                    href={offer.bookingUrl}
                                    target="_blank"
                                    title={`Umów wizytę na ${offer.title.toLowerCase()} w Panda Studio`}
                                    className="flex items-center gap-2 text-green uppercase font-semibold text-sm tracking-wider hover:text-white transition-colors"
                                >
                                    Umów wizytę
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
