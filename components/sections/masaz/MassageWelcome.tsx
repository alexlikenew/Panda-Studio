import Image from "next/image";

export default function MassageWelcome() {
    return (
        <section className="testimonials testimonials--masaz">
            <div className="wrapper">
                <div className="testimonials__box">
                    <div className="testimonials__box__image">
                        <Image
                            alt="Zdjecie silowni Fit Panda Studio"
                            src="/img/panda-masaz-ivan-mishchenko-section-masaz.jpg"
                            width={500}
                            height={350}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                    <div className="testimonials__box__text">
                        <h2>Witamy w naszym Studiu Masażu Panda</h2>
                        <p>
                            W kameralnej i przytulnej przestrzeni naszego studia oferujemy
                            profesjonalne masaże, które wspierają regenerację, relaks i
                            profilaktykę zdrowia. Masaż to nie tylko chwila wytchnienia, ale
                            przede wszystkim inwestycja w zdrowie Twojego ciała i umysłu.
                        </p>
                        <p>
                            Zapraszamy do świata, gdzie troska o Twoją formę i samopoczucie
                            jest naszym priorytetem.
                        </p>
                        <a href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow" target="_blank" rel="noopener noreferrer">
                            Zarezerwuj
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
