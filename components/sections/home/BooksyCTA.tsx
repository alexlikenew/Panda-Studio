import Image from "next/image";
import Link from "next/link";

export default function BooksyCTA() {
    return (
        <section className="booksy-cta">
            <div className="booksy-cta__bg">
                <Image
                    src="/img/booksy-cta-bg.webp"
                    alt="Tło z wnętrzem siłowni Panda Studio"
                    title="Profesjonalna strefa treningowa"
                    fill
                    quality={90}
                    priority
                />
            </div>
            <div className="wrapper">
                <div className="booksy-cta__content">
                    <h2 className="heading-h2">Gotowy na zmianę?</h2>
                    <p className="text-large-light">
                        Umów wizytę szybko i wygodnie.
                    </p>
                    <Link
                        href="/cennik"
                        className="booksy-cta__button text-medium-bold"
                        title="Umów wizytę"
                    >
                        UMÓW WIZYTĘ
                    </Link>
                </div>
            </div>
        </section>
    );
}
