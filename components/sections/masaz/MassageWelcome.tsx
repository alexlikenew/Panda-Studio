import Link from "next/link";
import Image from "next/image";

export default function MassageWelcome() {
    return (
        <section className="massage-section massage-welcome">
            <div className="wrapper">
                <div className="massage-split">
                    <div className="massage-split__image">
                        <Image
                            src="/img/massage/masaz-glowna-podkarpacka.jpg"
                            alt="Gabinet masażu Panda Studio Rzeszów"
                            title="Wnętrze gabinetu masażu Panda Studio przy ul. Podkarpackiej"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="massage-split__content">
                        <p className="text-small-bold text-green uppercase tracking-wide mb-4">
                            Strefa Regeneracji
                        </p>
                        <h2 className="heading-h2">
                            Witamy w Świecie <br />
                            <span className="text-white-dim">Profesjonalnej Odnowy</span>
                        </h2>
                        <p className="text-medium-normal text-gray mb-8">
                            W Panda Studio wiemy, że trening to tylko połowa sukcesu. Prawdziwy progres zaczyna się tam, gdzie kończy się wysiłek – w regeneracji. Stworzyliśmy przestrzeń, w której Twoje ciało odzyska równowagę, a umysł spokój.
                        </p>
                        <p className="text-medium-normal text-gray mb-10">
                            Nasi terapeuci łączą techniki manualne z wiedzą fizjoterapeutyczną, aby skutecznie eliminować ból, napięcia i stres. To nie jest zwykły masaż – to inwestycja w Twoją sprawność na lata.
                        </p>

                        <Link
                            href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
                            target="_blank"
                            title="Zarezerwuj wizytę w gabinecie masażu przez Booksy"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Umów wizytę przez Booksy
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
