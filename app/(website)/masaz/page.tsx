import type { Metadata } from "next";
import MassageHero from "@/components/sections/masaz/MassageHero";
import MassageWelcome from "@/components/sections/masaz/MassageWelcome";
import MassageOffer from "@/components/sections/masaz/MassageOffer";
import MassageBenefits from "@/components/sections/masaz/MassageBenefits";

export const metadata: Metadata = {
    title: "Masaż Rzeszów - FIT Panda Studio Treningu",
    description: "Panda Studio Team – profesjonalne studio treningowe w Rzeszowie. Masaż leczniczy, sportowy i relaksacyjny.",
    keywords: "studio treningowe Rzeszów, masaż Rzeszów, masaż leczniczy, masaż sportowy, rehabilitacja ruchowa Rzeszów",
};

export default function MassagePage() {
    return (
        <main>
            <MassageHero />
            <MassageWelcome />
            <MassageOffer />
            <MassageBenefits />
        </main>
    );
}
