import Image from "next/image";
import Link from "next/link";

export default function BooksyCTA() {
    return (
        <section className="booksy-cta">
            <div className="booksy-cta__bg">
                <Image
                    src="/img/booksy-cta-bg.png"
                    alt="Gym interior background"
                    fill
                    quality={90}
                    priority
                />
            </div>
            <div className="wrapper">
                <div className="booksy-cta__content">
                    <h2 className="heading-h2">Gotowy na zmianę?</h2>
                    <p className="text-large-light">
                        Umów wizytę szybko i wygodnie przez Booksy.
                    </p>
                    <Link
                        href="https://booksy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="booksy-cta__button text-medium-bold"
                    >
                        UMÓW WIZYTĘ
                    </Link>
                </div>
            </div>
        </section>
    );
}
