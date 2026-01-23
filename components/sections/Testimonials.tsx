import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="wrapper">
                <div className="testimonials__heading">
                    <p>D o ś w i a d c z e n i e </p>
                    <h2>Zadowolone klienty</h2>
                </div>
                <div className="testimonials__box">
                    <div className="testimonials__box__image">
                        <Image
                            alt="Zdjecie silowni Fit Panda Studio"
                            title="Wnętrze Panda Studio przy ul. Myśliwskiej"
                            src="/img/panda_studio_silownia.jpg"
                            width={600}
                            height={400}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                    <div className="testimonials__box__text">
                        <h2 className="heading-h3">Doswiadczenie oczami klientów</h2>
                        <p className="text-medium-light">
                            &quot;To studio treningu to prawdziwy game-changer! Profesjonalny
                            sprzęt, przyjazna atmosfera i wsparcie doświadczonych trenerów
                            sprawiają, że każda wizyta staje się przyjemnością.&quot;
                        </p>
                        <p className="text-medium-light">
                            &quot;Kameralne studio treningowe to prawdziwa perełka dla osób
                            ceniących indywidualne podejście i spokojną atmosferę. To
                            miejsce, gdzie można skupić się na swoich celach bez zgiełku
                            typowego dla dużych siłowni.&quot;
                        </p>
                        <Link href="/kontakt" className="text-medium-bold" title="Skontaktuj się i dołącz do zadowolonych klientów">Skontaktuj się</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
