import Image from "next/image";
import Link from "next/link";

export default function TransformLife() {
    return (
        <section className="transform-life">
            <div className="wrapper">
                <div className="transform-life__box">
                    <div className="transform-life__box__training">
                        <Link href="/contact">
                            <div className="transform-life__box__training__image-box">
                                <Image
                                    alt="Zdjecie treningu"
                                    src="/img/panda_studio_trening.webp"
                                    width={600}
                                    height={400}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div className="transform-life__box__training__text-box">
                                <h2 className="heading-h5">Trening</h2>
                                <p className="text-small-normal">
                                    Rehabilitacja & transformacja ciała <br />
                                    <span className="text-box--bolder">ul.Myśliwska 255</span>
                                </p>
                                <button aria-label="UMÓW SIĘ" className="text-medium-bold">UMÓW SIĘ</button>
                            </div>
                        </Link>
                        <a href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow">
                            <div className="transform-life__box__training__image-box">
                                <Image
                                    alt="Zdjecie masazu"
                                    src="/img/panda_studio_massage_mini.webp"
                                    width={600}
                                    height={400}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div className="transform-life__box__training__text-box">
                                <h2 className="heading-h5">Masaż</h2>
                                <p className="text-small-normal">
                                    Relaksacyjny odpoczynek ciała <br />
                                    <span className="text-box--bolder"> Podkarpacka 12a</span>
                                </p>
                                <button aria-label="UMÓW SIĘ" className="text-medium-bold">UMÓW SIĘ</button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
