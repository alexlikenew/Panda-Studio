import Image from "next/image";
import Link from "next/link";

export default function TransformLife() {
    return (
        <section className="services-split">
            <div className="wrapper">
                <div className="services-split__grid">
                    {/* Card 1: Training (Internal Link) */}
                    <Link href="/kontakt" className="services-split__card" title="Umów się na trening personalny przy ul. Myśliwskiej">
                        <Image
                            src="/img/panda_studio_trening.webp"
                            alt="Trening Personalny w Panda Studio"
                            title="Sala treningowa Panda Studio - Rzeszów ul. Myśliwska"
                            fill
                            className="services-split__image"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="services-split__overlay"></div>

                        <div className="services-split__content">
                            <span className="services-split__subtitle text-small-normal">Rehabilitacja & Transformacja</span>
                            <h2 className="services-split__title heading-h3">Trening</h2>
                            <div className="services-split__location text-small-bold">ul. Myśliwska 255</div>
                            <div className="services-split__cta text-small-bold">Umów Się</div>
                        </div>
                    </Link>

                    {/* Card 2: Massage (External Link) */}
                    <a
                        href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
                        className="services-split__card"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Zarezerwuj masaż na Booksy - Gabinet przy ul. Podkarpackiej"
                    >
                        <Image
                            src="/img/panda_studio_massage.webp"
                            alt="Masaż i Regeneracja w Panda Studio"
                            title="Gabinet masażu Panda Studio - Rzeszów ul. Podkarpacka"
                            fill
                            className="services-split__image"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="services-split__overlay"></div>

                        <div className="services-split__content">
                            <span className="services-split__subtitle text-small-normal">Relaks & Regeneracja</span>
                            <h2 className="services-split__title heading-h3">Masaż</h2>
                            <div className="services-split__location text-small-bold">Podkarpacka 12a</div>
                            <div className="services-split__cta text-small-bold">Rezerwuj</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
