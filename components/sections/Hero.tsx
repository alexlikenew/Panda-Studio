"use client";

import Image from "next/image";
import Link from "next/link";
import { useUIContext } from "@/providers/UIContext";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <Image
          src="/images/header-main.png"
          alt="Panda Studio - Trening, Masaż, Fizjoterapia"
          fill
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__content__titles">
            <h1 className="hero-title-functional heading-h1 hero-title-functional--outline">
              TRENING
            </h1>
            <h1 className="hero-title-functional heading-h1 hero-title-functional--filled">
              MASAŻ
            </h1>
            <h1 className="hero-title-functional heading-h1 hero-title-functional--outline">
              FIZJOTERAPIA
            </h1>
          </div>

          <div className="hero-slogan">
            <h2 className="heading-h3 text-white">
              TWOJA DROGA DO <span className="text-green">LEPSZEJ SIŁY</span>
            </h2>
          </div>

          <Link href="/kontakt" className="btn-primary text-small-bold">
            SPRÓBUJ TERAZ
          </Link>

          <div className="hero__info-box">
            <p className="text-light-normal">
              Profesjonalne studio treningu personalnego i fizjoterapii w sercu miasta.
              <span className="text-green font-bold"> Pierwszy trening za darmo.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
