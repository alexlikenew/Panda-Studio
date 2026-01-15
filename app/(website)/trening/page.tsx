import type { Metadata } from "next";
import TrainingHero from "@/components/sections/trening/TrainingHero";
import TrainingOffer from "@/components/sections/trening/TrainingOffer";

export const metadata: Metadata = {
    title: "Trening Rzeszów - FIT Panda Studio",
    description: "Panda Studio Team – profesjonalne studio treningowe w Rzeszowie. Treningi personalne, grupowe i funkcjonalne. Zadbaj o formę z doświadczonym trenerem!",
    keywords: "studio treningowe Rzeszów, trener personalny, siłownia Rzeszów, trening funkcjonalny, trening w parach",
};

export default function TrainingPage() {
    return (
        <main>
            <TrainingHero />
            <TrainingOffer />
        </main>
    );
}
