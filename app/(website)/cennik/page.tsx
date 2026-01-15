import type { Metadata } from "next";
import PricingHero from "@/components/sections/cennik/PricingHero";
import PricingTables from "@/components/sections/cennik/PricingTables";

export const metadata: Metadata = {
    title: "Cennik - FIT Panda Studio Rzeszów",
    description: "Panda Studio Team – profesjonalne studio treningowe w Rzeszowie. Sprawdź nasz cennik treningów personalnych, grupowych i funkcjonalnych.",
    keywords: "studio treningowe Rzeszów, trener personalny, siłownia Rzeszów, cennik treningów, cennik masażu",
};

export default function PricingPage() {
    return (
        <main>
            <PricingHero />
            <PricingTables />
        </main>
    );
}
