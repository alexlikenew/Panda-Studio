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
                    <h2 className="heading-h3">Trening</h2>
                    <Image
                        alt="Dziewczyna trenuje Crossfit"
                        title="Trening funkcjonalny - Panda Studio"
                        className="showElement"
                        src="/img/panda_studio_spalania.png"
                        width={200}
                        height={200}
                    />
                    <div className="text">
                        <p className="text__title text-small-bold">Adres:</p>
                        <p className="text__content text-medium-normal">
                            <a href="https://g.co/kgs/P3n3EtW" title="Zobacz treningi w Mapach Google">
                                Myśliwska 255, Rzeszów, PL 35-242
                            </a>
                        </p>
                    </div>
                    <div className="text">
                        <p className="text__title text-small-bold">Telefon:</p>
                        <a
                            className="text__content text-medium-normal"
                            href="tel:694906749"
                            title="Zadzwoń do nas: 694 906 749"
                        >
                            694 906 749
                        </a>
                    </div>
                    <Link
                        className="btn-reservation text-medium-bold"
                        href="/kontakt"
                        title="Zarezerwuj"
                        onClick={closeModal}
                    >
                        Zarezerwuj
                    </Link>
                </div>
                <div className="showElement dialogOne__info__line"></div>
                <div className="dialogOne__info__massage">
                    <h2 className="heading-h3">Masaż</h2>
                    <Image
                        alt="Zdjecie masazu mezczyzny"
                        title="Masaż relaksacyjny i leczniczy - Panda Studio"
                        className="showElement"
                        src="/img/panda_studio_massage_mini_268.jpg"
                        width={200}
                        height={200}
                    />
                    <div className="text">
                        <p className="text__title text-small-bold">Adres:</p>
                        <p className="text__content text-medium-normal">
                            <a href="https://g.co/kgs/MBEjdC3" title="Zobacz masaże w Mapach Google">
                                Podkarpacka 12a, Rzeszów, PL 35-082
                            </a>
                        </p>
                    </div>
                    <div className="text">
                        <p className="text__title text-small-bold">Telefon:</p>
                        <a
                            className="text__content text-medium-normal"
                            href="tel:694906749"
                            title="Zadzwoń do nas: 694 906 749"
                        >
                            694 906 749
                        </a>
                    </div>
                    <a
                        className="btn-reservation text-medium-bold"
                        href="http://pandamasaz.booksy.com/a/"
                        title="Zarezerwuj wizytę na Booksy"
                    >
                        Zarezerwuj
                    </a>
                </div>
            </div>
            <button
                aria-label="Zamknij"
                className="closeDialog text-medium-bold"
                onClick={closeModal}
            >
                Zamknij
            </button>
        </dialog>
    );
}
