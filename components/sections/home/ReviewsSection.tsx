import React from 'react';

const reviewsData = [
    { id: 1, author: "Artur Kuzniar", role: "Lokalny przewodnik", date: "4 miesiące temu", text: "Zdecydowanie polecam. Masaż wykonywany profesjonalnie. Po jednej wizycie czuć że mięśnie zostały 'ruszone', a po kilku wizytach są oczekiwane efekty. Można porozmawiać, poprosić o porady lub pomilczeć w spokoju. Miejsce i atmosfera relaksująca. Plus za parking." },
    { id: 2, author: "Piotr W", role: "Lokalny przewodnik", date: "4 miesiące temu", text: "Moje odczucia po zabiegach masażu w Panda Masaż są bardzo pozytywne. Profesjonalizm i autentyczne zaangażowanie w wykonywaną pracę. Doceniam, że poza samym zabiegiem otrzymałem instrukcje wykonywania ćwiczeń, które pomogły mi z moimi dolegliwościami. Szczerze polecam." },
    { id: 3, author: "darek lesko", role: "Lokalny przewodnik", date: "5 miesięcy temu", text: "Mega serdecznie polecam naprawdę 🫡" },
    { id: 4, author: "Mariusz", role: "1 opinia", date: "2 lata temu", text: "Przyszedłem w połowie kwietnia na masaż z objawami rwy kulszowej. Po pierwszym masażu ataki rwy przeszły a już od następnego dnia mogłem spokojnie przespać całą noc. Oprócz masażu dostałem zestaw bardzo pomocnych ćwiczeń. Serdecznie polecam." },
    { id: 5, author: "Paulina Dusiłło", role: "6 opinii", date: "4 lata temu", text: "Świetnie przeprowadzone badanie fizjoterapeutyczne, jasno określone cele i założenia wizyty. Po wizycie omówiono zdiagnozowane dolegliwości oraz zaproponowano rozwiązanie. 100% pojawię się ponownie." },
    { id: 6, author: "Marti Ta", role: "7 opinii", date: "rok temu", text: "Polecam!!! Świetny specjalista, super podejście, rewalacyjne masaże. Plus ogromna wiedza." },
    { id: 7, author: "Ki Lee", role: "Lokalny przewodnik", date: "rok temu", text: "Świetne podejście do klienta, oraz profesjonalny masaż. Serdecznie polecam !" },
    { id: 8, author: "magdab111 boron", role: "3 opinie", date: "3 lata temu", text: "Świetne miejsce, fachowa i profesjonalna obsługa. Wyczucie!! to charakteryzuje dobrego masażystę, Ivan robi to z pasją wiedzą i zaangażowaniem, potrafi również zadbać o właściwą atmosferę." },
    { id: 9, author: "Marcelina Wójcik", role: "2 opinie", date: "3 lata temu", text: "Moja pierwsza wizyta i na pewno nie ostatnia:) Pełen profesjonalizm, świetny gabinet, obowiązkowy punkt do odwiedzenia na mapie Rzeszowa! Polecam masaż relaksacyjny, wychodzisz jak nowo narodzona." },
    { id: 10, author: "Анастасія Степанчук", role: "Lokalny przewodnik", date: "3 lata temu", text: "Najlepszy fizjoterapeuta w Rzeszowie! Korzystamy z usług Ivo już ponad 2 lata cała rodzina. Gorąco polecam!!!" },
    { id: 11, author: "Hannah 22", role: "1 opinia", date: "4 lata temu", text: "'Slow' masaż to coś, czego mi było trzeba! Profesjonalna obsługa zapewniły przebieg wizyty w miłej i komfortowej atmosferze. Na pewno wrócę! Polecam serdecznie ;)" },
    { id: 12, author: "Liza Petryshyn", role: "Lokalny przewodnik", date: "2 lata temu", text: "Profesjonalne podejście do klienta, miła atmosfera i bardzo dobry masaż. Polecam!" },
    { id: 13, author: "Patryk", role: "5 opinii", date: "3 lata temu", text: "Pełny profesjonalizm, bardzo dobre podejście do pacjenta. Masaż na prawdę bardzo dobry szczerze polecam ja na pewno tam wrócę." },
    { id: 14, author: "Magdalena Swizdor", role: "9 opinii", date: "rok temu", text: "Great place to relax, get treatment, feel amazing !!! Instant relief. Nice, professional service! Highly recommended 👌" },
    { id: 15, author: "Katarzyna Boryło", role: "2 opinie", date: "rok temu", text: "Pełen profesjonalizm, bardzo dobry masaż godny polecenia!" },
    { id: 16, author: "Monika Usarz", role: "Lokalny przewodnik", date: "4 lata temu", text: "Jestem bardzo zadowolona z wizyty 😊 świetny klimat, muzyka, zapachy no i przede wszystkim umiejętności polecam całym sercem, będę wracać ❤" },
    { id: 17, author: "Julia Zubarska", role: "Lokalny przewodnik", date: "2 lata temu", text: "Polecam każdemu, usługa bardzo profesjonalna. Super atmosfera i podejście do klienta 🙂" },
    { id: 18, author: "Wiktoria M", role: "Lokalny przewodnik", date: "rok temu", text: "Masaż idealnie dopasowany do moich potrzeb, bardzo profesjonalne podejście. Z pewnością wrócę!" },
    { id: 19, author: "Monika", role: "Lokalny przewodnik", date: "rok temu", text: "Świetny masaż i profesjonalne podejście. Polecam :)" },
    { id: 20, author: "Maciej Brach", role: "Lokalny przewodnik", date: "rok temu", text: "Rewelacyjne miejsce, pełen profesjonalizm!!! Na pewno wrócę i szczerze polecam!!!!" },
    { id: 21, author: "Anita Palecka", role: "1 opinia", date: "2 lata temu", text: "Profesjonalna obsługa, miła atmosfera, indywidualne podejście do klienta. Polecam :)" },
    { id: 22, author: "Patrycja Mach", role: "3 opinie", date: "rok temu", text: "Świetny masaż, polecam! Na pewno wrócę." },
    { id: 23, author: "Olha Zaborska", role: "5 opinii", date: "2 lata temu", text: "Dziękuje za kameralną atmosferę i profesjonalne podejście! Jestem szczęśliwa! Polecam!" },
    { id: 24, author: "Ewelina Oleszycka", role: "3 opinie", date: "3 lata temu", text: "Chwila relaksu dla siebie ;) Zdecydowanie polecam. Pełen profesjonalizm. Na pewno jeszcze tu wrócę ;)" },
    { id: 25, author: "Nastia Khropata", role: "3 opinie", date: "3 lata temu", text: "Najlepsza decyzja której w ogóle można podjąć, świetny klimat, profesjonalne podejście, zdecydowanie polecam😍" },
    { id: 26, author: "Роксоляна Басараб", role: "Lokalny przewodnik", date: "rok temu", text: "Profesjonalnie, bardzo polecam! 😊" },
    { id: 27, author: "Tonny brov", role: "5 opinii", date: "4 lata temu", text: "Dziękuję Ivan. Jestem doskonale zrelaksowany po masażu. Bardzo profesjonalne wykonanie." },
    { id: 28, author: "regina bober", role: "5 opinii", date: "3 lata temu", text: "Bardzo dobry masaż, polecam serdecznie! :)" },
    { id: 29, author: "Mariola Palecka", role: "1 opinia", date: "2 lata temu", text: "Super miejsce, miła atmosfera. Polecam :)" },
    { id: 30, author: "Mateusz Dudek", role: "Lokalny przewodnik", date: "3 lata temu", text: "Bardzo polecam! Skorzystam nie raz!☺️" },
    { id: 31, author: "Irena Dubyk", role: "Lokalny przewodnik", date: "4 lata temu", text: "Rewelacja! Odprężyłam się całkowicie. Oczywiście polecam każdemu:)" }
];

const parseRelativeDate = (dateStr: string): string => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    if (dateStr.includes("miesiąc")) {
        const months = parseInt(dateStr.match(/\d+/)?.[0] || "0", 10);
        now.setMonth(currentMonth - months);
    } else if (dateStr.includes("rok") || dateStr.includes("lata")) {
        if (dateStr === "rok temu") {
            now.setFullYear(currentYear - 1);
        } else {
            const years = parseInt(dateStr.match(/\d+/)?.[0] || "0", 10);
            now.setFullYear(currentYear - years);
        }
    } else {
        // Fallback for unknown formats to a recent date to avoid validation errors
        // or leave as is if specific logic isn't needed
        return now.toISOString().split("T")[0];
    }

    return now.toISOString().split("T")[0];
};

export default function ReviewsSection() {
    // Generate 5 stars
    const renderStars = () => (
        <div className="reviews-section__stars">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="reviews-section__star"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );

    // SEO: Generate LocalBusiness Schema with Reviews
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://pandastudioteam.com/#organization", // Reuse main ID if possible
        "name": "Panda Studio Rzeszów",
        "review": reviewsData.map((review) => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.author
            },
            "datePublished": parseRelativeDate(review.date),
            "reviewBody": review.text,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            }
        })),
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": reviewsData.length.toString(),
            "bestRating": "5"
        }
    };

    return (
        <section className="reviews-section">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="reviews-section__wrapper">
                <header className="reviews-section__header">
                    <h2 className="heading-h2">Opinie Klientów</h2>
                    <p className="text-medium-normal">Realne historie. Prawdziwe efekty.</p>
                </header>

                <div className="reviews-section__list-wrapper">
                    <div className="reviews-section__scroll-container">
                        <div className="reviews-section__grid">
                            {reviewsData.map((review) => (
                                <article key={review.id} className="reviews-section__card">
                                    <div className="reviews-section__card-header">
                                        <div className="reviews-section__author-info">
                                            <h3 className="reviews-section__author text-regular-bold">{review.author}</h3>
                                            <span className="reviews-section__role text-tiny-normal">{review.role}</span>
                                        </div>
                                        {renderStars()}
                                    </div>

                                    <div className="reviews-section__card-body">
                                        <p className="text-small-normal">{review.text}</p>
                                    </div>

                                    <footer className="reviews-section__card-footer">
                                        <time className="text-tiny-normal">{review.date}</time>
                                    </footer>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
