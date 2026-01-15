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
                        <p>Cennik treningów </p>
                        <h2>Zarezerwuj swój trening</h2>
                    </div>
                    <div className="pricing-section">
                        <div className="pricing-box">
                            <div className="pricing-box__title">Trening personalny</div>
                            <ul className="pricing-box__ul">
                                <li className="pricing-box__ul__li">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    1 trening 60min - 150zł
                                </li>
                                <li className="pricing-box__ul__li">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 4 treningów - 560zł
                                </li>
                                <li className="pricing-box__ul__li">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 8 treningów - 1080zł
                                </li>
                                <li className="pricing-box__ul__li">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 12 treningów - 1560zł
                                </li>
                            </ul>
                            <div className="pricing-box__button ">
                                <button
                                    data-dialog="dialogOne"
                                    className="text-white bg-black px-4 py-2" // Note: existing button had styles but here we use button, verify existing class "text"? No, generic styles.
                                    // Wait, legacy HTML used <a> with href="contact.html" and data-dialog.
                                    // But it says "Zarezerwuj".
                                    // Let's stick to the button trigger for consistency with Homepage?
                                    // Or preserve Link to contact?
                                    // The instruction says "Zarezerwuj" in <a> tag.
                                    // If I check `_legacy_reference`, it has `href="contact.html"` AND `data-dialog="dialogOne"`.
                                    // Since we have the modal logic, I will use `onClick={openModal}`.
                                    onClick={openModal}
                                >
                                    Zarezerwuj
                                </button>
                            </div>
                        </div>
                        <div className="pricing-box">
                            <div className="pricing-box__title">Trening w parach</div>
                            <ul className="pricing-box__ul">
                                <li className="pricing-box__ul__li">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    1 trening 60min - 220zł
                                </li>
                                <li className="pricing-box__ul__li">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 4 treningów - 840zł
                                </li>
                                <li className="pricing-box__ul__li">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 8 treningów - 1640zł
                                </li>
                                <li className="pricing-box__ul__li">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Pakiet 12 treningów - 2400zł
                                </li>
                            </ul>
                            <div className="pricing-box__button ">
                                <button onClick={openModal}>Zarezerwuj</button>
                            </div>
                        </div>
                        <div className="pricing-box">
                            <div className="pricing-box__title">Zajęcia w małych grupach</div>
                            <ul className="pricing-box__ul">
                                <li className="pricing-box__ul__li">
                                    <Image alt="" src="/img/check-mark.png" width={20} height={20} />
                                    Wejście na zajęcia 70zł (cena stała)
                                </li>
                            </ul>
                            <div className="pricing-box__button ">
                                <button onClick={openModal}>Zarezerwuj</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Massage Pricing */}
            <section className="testimonials testimonials--training">
                <div className="wrapper">
                    <div className="testimonials__heading">
                        <p>Cennik masaży </p>
                        <h2>Zarezerwuj swój masaż</h2>
                    </div>
                    <div className="pricing-section">
                        <div className="pricing-box">
                            <div className="pricing-box__title">Data i czas</div>
                            <div className="pricing-box__button ">
                                <a
                                    href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
                                    title="Zarezerwuj"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
