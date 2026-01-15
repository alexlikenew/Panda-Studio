"use client";

import Image from "next/image";
import Link from "next/link";
import { useUIContext } from "@/providers/UIContext";

export default function DialogOne() {
    const { isModalOpen, closeModal } = useUIContext();

    return (
        <dialog id="dialogOne" open={isModalOpen}>
            <div className="dialogOne__info">
                <div className="dialogOne__info__training">
                    <h2>Trening</h2>
                    <Image
                        alt="Dziewczyna trenuje Crossfit"
                        className="showElement"
                        src="/img/panda_studio_spalania.png"
                        width={200}
                        height={200}
                    />
                    <div className="text">
                        <p className="text__title">Address:</p>
                        <p className="text__content">
                            <a href="https://g.co/kgs/P3n3EtW">
                                Myśliwska 255, Rzeszów, PL 35-242
                            </a>
                        </p>
                    </div>
                    <div className="text">
                        <p className="text__title">Telefon:</p>
                        <a
                            className="text__content"
                            href="tel:694906749"
                            title="Zarezerwuj"
                        >
                            694 906 749
                        </a>
                    </div>
                    <Link
                        className="btn-reservation"
                        href="/contact"
                        title="Zarezerwuj"
                        onClick={closeModal}
                    >
                        Zarezerwuj
                    </Link>
                </div>
                <div className="showElement dialogOne__info__line"></div>
                <div className="dialogOne__info__massage">
                    <h2>Masaż</h2>
                    <Image
                        alt="Zdjecie masazu mezczyzny"
                        className="showElement"
                        src="/img/panda_studio_massage_mini_268.jpg"
                        width={200}
                        height={200}
                    />
                    <div className="text">
                        <p className="text__title">Address:</p>
                        <p className="text__content">
                            <a href="https://g.co/kgs/P3n3EtW">
                                Myśliwska 255, Rzeszów, PL 35-242
                            </a>
                        </p>
                    </div>
                    <div className="text">
                        <p className="text__title">Telefon:</p>
                        <a
                            className="text__content"
                            href="tel:694906749"
                            title="Zarezerwuj"
                        >
                            694 906 749
                        </a>
                    </div>
                    <a
                        className="btn-reservation"
                        href="https://booksy.com/pl-pl/17197_panda-masaz_masaz_10729_rzeszow"
                        title="Zarezerwuj"
                    >
                        Zarezerwuj
                    </a>
                </div>
            </div>
            <button
                aria-label="Zamknij"
                className="closeDialog"
                onClick={closeModal}
            >
                Zamknij
            </button>
        </dialog>
    );
}
