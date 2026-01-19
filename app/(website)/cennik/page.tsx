import type { Metadata } from "next";
import PricingHero from "@/components/sections/cennik/PricingHero";
import PricingTables from "@/components/sections/home/PricingTables";
import RandomNews from "@/features/blog/components/RandomNews";
import RandomDictionaryEntries from "@/features/dictionary/components/RandomDictionaryEntries";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Cennik - FIT Panda Studio Rzeszów",
    description: "Sprawdź ceny treningów personalnych, masażu oraz zajęć w małych grupach.",
};

const faqItems = [
    {
        question: "Czy muszę podpisywać długoterminową umowę?",
        answer: "Nie. W Panda Studio cenimy Twoją wolność. Działamy w modelu pakietowym lub „płać za wejście”. Nie wymagamy podpisywania rocznych umów członkowskich."
    },
    {
        question: "Co zawiera cena treningu personalnego?",
        answer: "Cena obejmuje pełną, indywidualną opiekę trenerską, wodę, ręcznik oraz dostęp do prywatnej przestrzeni treningowej. Nie ponosisz żadnych dodatkowych opłat za wejście do klubu."
    },
    {
        question: "Czy honorujecie karty typu Multisport / Medicover?",
        answer: "Jako butikowe studio nastawione na najwyższą jakość i prywatność, nie honorujemy kart systemowych. Gwarantujemy w zamian indywidualne podejście, którego nie znajdziesz w sieciowych siłowniach."
    },
    {
        question: "Jestem osobą początkującą. Czy poradzę sobie na treningu?",
        answer: "Oczywiście! To nasza specjalność. Każdy trening dopasowujemy w 100% do Twojej aktualnej kondycji i możliwości. Zaczynamy od podstaw i diagnostyki, abyś czuł się bezpiecznie."
    },
    {
        question: "Co jeśli muszę odwołać umówiony trening?",
        answer: "Rozumiemy, że zdarzają się sytuacje losowe. Prosimy o jak najszybszy kontakt z trenerem lub recepcją, abyśmy mogli znaleźć nowy termin dogodny dla obu stron."
    },
    {
        question: "Czy mogę trenować z drugą osobą (w parze)?",
        answer: "Tak! Posiadamy specjalną ofertę „Trening w Parach”. To świetny sposób na wspólną motywację i obniżenie kosztu treningu na osobę. Szczegóły znajdziesz w tabeli cenowej."
    },
    {
        question: "Czy w ramach treningu otrzymam dietę?",
        answer: "Współpraca trenerska obejmuje porady żywieniowe i wskazówki, jak jeść zdrowo. Jeśli potrzebujesz klinicznego jadłospisu rozpisanego co do grama, jest to usługa dodatkowa."
    },
    {
        question: "Jakie formy płatności akceptujecie?",
        answer: "Akceptujemy wszystkie standardowe formy płatności: karty płatnicze, gotówkę oraz BLIK. Płatność zazwyczaj następuje przed rozpoczęciem treningu lub pakietu."
    },
    {
        question: "Co muszę zabrać na pierwszy trening?",
        answer: "Wystarczy wygodny strój sportowy, zmienne obuwie i pozytywne nastawienie. O resztę (wodę, ręcznik, sprzęt) zadbamy my."
    },
    {
        question: "Czy mogę kupić voucher na prezent?",
        answer: "Tak, voucher na trening lub masaż w Panda Studio to doskonały prezent. Skontaktuj się z nami, a przygotujemy eleganckie zaproszenie do wręczenia."
    },
    {
        question: "Czy pakiety mają termin ważności?",
        answer: "Tak, pakiety posiadają okres ważności, aby motywować Cię do regularnych ćwiczeń, co jest kluczem do efektów. O szczegóły zapytaj swojego trenera przy zakupie."
    },
    {
        question: "Czy muszę mieć własny plan treningowy?",
        answer: "Nie. To rola trenera. Na podstawie Twoich celów (schudnięcie, budowa siły, zdrowie) przygotujemy dla Ciebie kompletny plan działania."
    }
];

export default function PricingPage() {
    return (
        <main>
            <PricingHero />
            <PricingTables />
            <FaqSection items={faqItems} />
            <RandomNews />
            <RandomDictionaryEntries />
        </main>
    );
}
