"use client";

import Image from "next/image";
import Link from "next/link";
import { useUIContext } from "@/providers/UIContext";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <Image
          src="/img/panda-masaz-ivan-mishchenko-glowna.webp"
          alt="Panda Studio - Trening, Masaż, Fizjoterapia"
          fill
          priority
          // Opcja 1 (Najpewniejsza dla jakości): Wyłącza optymalizację Next.js.
          // Obrazek będzie taki sam jak oryginał na dysku.
          unoptimized

          // Opcja 2 (Alternatywa): Jeśli chcesz zachować optymalizację rozmiaru,
          // ale chcesz maksymalną jakość JPG/WEBP, użyj quality={100}.
          // quality={100} 

          sizes="100vw"
          style={{ objectFit: "cover" }} // Dodatkowe zabezpieczenie styli
        />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__content__titles">
            <h1 className="hero-title-functional heading-h1 hero-title-functional--outline delay-1">
              TRENING
            </h1>
            <h1 className="hero-title-functional heading-h1 hero-title-functional--filled delay-2">
              MASAŻ
            </h1>
            <h1 className="hero-title-functional heading-h1 hero-title-functional--outline delay-3">
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