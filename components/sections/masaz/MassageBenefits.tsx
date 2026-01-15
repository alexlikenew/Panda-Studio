import Image from "next/image";

export default function MassageBenefits() {
    return (
        <section className="testimonials testimonials--masaz--second">
            <div className="wrapper">
                <div className="testimonials__heading">
                    <h2>Dlaczego warto skorzystać z masażu?</h2>
                </div>
                <div className="testimonials__box">
                    <div className="testimonials__box__text">
                        <p>
                            <span>• Regeneracja :</span> Masaż wspiera ciało w procesach
                            odnowy, redukując napięcia i przeciążenia.
                        </p>
                        <p>
                            <span>• Relaks :</span> Poprawia samopoczucie, zmniejsza stres i
                            pozwala cieszyć się lepszą jakością snu.
                        </p>
                        <p>
                            <span>• Profilaktyka :</span> Regularne masaże pomagają zapobiegać
                            bólom i problemom z układem ruchu, wspierając zdrowie na co dzień.
                        </p>
                        <p>
                            <span>• Wsparcie dla aktywnych :</span> Dla osób łączących masaż z
                            aktywnością fizyczną to doskonałe uzupełnienie dbania o sprawność
                            i kondycję.
                        </p>
                        <p>
                            Masaż nie zastąpi ruchu, ale może go doskonale wspierać. To
                            harmonijne połączenie działań daje najlepsze rezultaty.
                        </p>
                        <a href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow" target="_blank" rel="noopener noreferrer">
                            Zarezerwuj
                        </a>
                    </div>
                    <div className="testimonials__box__image">
                        <Image
                            alt="Zdjecie silowni Fit Panda Studio"
                            src="/img/panda-masaz-ivan-mishchenko-section-masaz.jpg"
                            width={500}
                            height={350}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
