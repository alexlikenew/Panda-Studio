"use client";

import Image from "next/image";
import Link from "next/link";
import { useUIContext } from "@/providers/UIContext";

export default function Hero() {
  const { openModal } = useUIContext();

  return (
    <header className="header">
      <div className="bg-box"></div>
      <div className="wrapper">
        <div className="header__text-box">
          <h1 className="header__text-box__title--training">
            TRENING
            <br />
            MASAŻ
          </h1>
          <h2 className="header__text-box__title">UWOLNIJ</h2>
          <h2 className="header__text-box__title header__text-box__title--green">
            SPORTOWCA
          </h2>
          <h2 className="header__text-box__title">ZRELAKSUJ</h2>
          <h2 className="header__text-box__title header__text-box__title--orange">
            UMYSŁ
          </h2>
          <button
            aria-label="SPRÓBUJ TERAZ"
            className="header__text-box__button"
            data-dialog="dialogOne"
            onClick={openModal}
          >
            SPRÓBUJ TERAZ
          </button>
          <div className="header__text-box__more-info">
            {/* 
            <div className="header__text-box__more-info__image">
                <img alt="Ikonka informacji szczegowolych" src="./img/panda_studio_more-info.png">
                <a href="">
                    <img alt="Przycisk odtwarzania" src="./img/panda_studio-play-icon.png">
                </a>
            </div> 
            */}
            <p>
              Moje studio to <span>kameralna</span> przestrzeń wyposażona w
              wolne ciężary i wszystko, czego potrzeba, by skutecznie dbać o
              sylwetkę i zdrowie – z fizjoterapeutycznym podejściem do ruchu
              jako fundamentu dobrego samopoczucia.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
