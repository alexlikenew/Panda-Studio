import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/features/contact/components/ContactForm";

export const metadata: Metadata = {
    title: "Kontakt - FIT Panda Studio",
    description: "Panda Studio Team – profesjonalne studio treningowe w Rzeszowie. Skontaktuj się z nami!",
    keywords: "studio treningowe Rzeszów, kontakt, telefon, adres, godziny otwarcia",
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactForm />
        </main>
    );
}
