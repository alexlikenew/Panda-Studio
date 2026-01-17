"use client";

import Image from "next/image";
import Link from "next/link";
import { useUIContext } from "@/providers/UIContext";

export default function PricingTables() {
    const { openModal } = useUIContext();

    return (
        <>
            {/* Section Training Pricing */}
            <section className="testimonials testimonials--training">
                <div className="wrapper">
                    <div className="testimonials__heading">
                        <p className="text-medium-light">Cennik treningów </p>
                        <h2 className="heading-h3">Zarezerwuj swój trening</h2>
                    </div>
                    <div className="pricing-section">
                        <div className="pricing-box">
                            <div className="pricing-box__title heading-h4">Trening personalny</div>
                            <ul className="pricing-box__ul">
                                <li className="pricing-box__ul__li text-medium-normal">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    1 trening 60min - 150zł
                                </li>
                                <li className="pricing-box__ul__li text-medium-normal">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 4 treningów - 560zł
                                </li>
                                <li className="pricing-box__ul__li text-medium-normal">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 8 treningów - 1080zł
                                </li>
                                <li className="pricing-box__ul__li text-medium-normal">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 12 treningów - 1560zł
                                </li>
                            </ul>
                            <div className="pricing-box__button ">
                                <button
                                    data-dialog="dialogOne"
                                    className="text-white bg-black px-4 py-2 text-medium-bold"
                                    onClick={openModal}
                                >
                                    Zarezerwuj
                                </button>
                            </div>
                        </div>
                        <div className="pricing-box">
                            <div className="pricing-box__title heading-h4">Trening w parach</div>
                            <ul className="pricing-box__ul">
                                <li className="pricing-box__ul__li text-medium-normal">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    1 trening 60min - 220zł
                                </li>
                                <li className="pricing-box__ul__li text-medium-normal">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 4 treningów - 840zł
                                </li>
                                <li className="pricing-box__ul__li text-medium-normal">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 8 treningów - 1640zł
                                </li>
                                <li className="pricing-box__ul__li text-medium-normal">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 12 treningów - 2400zł
                                </li>
                            </ul>
                            <div className="pricing-box__button ">
                                <button onClick={openModal} className="text-medium-bold">Zarezerwuj</button>
                            </div>
                        </div>
                        <div className="pricing-box">
                            <div className="pricing-box__title heading-h4">Zajęcia w małych grupach</div>
                            <ul className="pricing-box__ul">
                                <li className="pricing-box__ul__li text-medium-normal">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Wejście na zajęcia 70zł (cena stała)
                                </li>
                            </ul>
                            <div className="pricing-box__button ">
                                <button onClick={openModal} className="text-medium-bold">Zarezerwuj</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Massage Pricing */}
            <section className="testimonials testimonials--training">
                <div className="wrapper">
                    <div className="testimonials__heading">
                        <p className="text-medium-light">Cennik masaży </p>
                        <h2 className="heading-h3">Zarezerwuj swój masaż</h2>
                    </div>
                    <div className="pricing-section">
                        <div className="pricing-box">
                            <div className="pricing-box__title heading-h4">Data i czas</div>
                            <div className="pricing-box__button ">
                                <a
                                    href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
                                    title="Zarezerwuj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-medium-bold"
                                >
                                    Zarezerwuj
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
