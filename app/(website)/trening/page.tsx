import type { Metadata } from "next";
import TrainingHero from "@/components/sections/trening/TrainingHero";
import TrainingOffer from "@/components/sections/trening/TrainingOffer";
import ServicesAccordionSection from "@/components/sections/home/ServicesAccordionSection";
import NutritionTipsSection from "@/components/sections/home/NutritionTipsSection";
import ClassesCategorySection from "@/components/sections/home/ClassesCategorySection";
import RandomNews from "@/features/blog/components/RandomNews";
import RandomDictionaryEntries from "@/features/dictionary/components/RandomDictionaryEntries";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Trening Rzeszów - FIT Panda Studio",
    description: "Panda Studio Team – profesjonalne studio treningowe w Rzeszowie. Treningi personalne, grupowe i funkcjonalne. Zadbaj o formę z doświadczonym trenerem!",
    keywords: "studio treningowe Rzeszów, trener personalny, siłownia Rzeszów, trening funkcjonalny, trening w parach",
};
const faqItems = [
    {
        question: "Nigdy nie byłem/am na siłowni. Czy sobie poradzę?",
        answer: "Absolutnie tak! Panda Studio to idealne miejsce na start. Specjalizujemy się w pracy z osobami początkującymi. Nie oceniamy, tylko uczymy od podstaw, dbając o Twoje bezpieczeństwo i komfort psychiczny."
    },
    {
        question: "Co muszę zabrać ze sobą na pierwszy trening?",
        answer: "Wystarczy wygodny strój sportowy, czyste obuwie na zmianę i butelka wody. Ręcznik i niezbędny sprzęt otrzymasz na miejscu. O resztę zadba Twój trener."
    },
    {
        question: "Jak często powinienem trenować, żeby widzieć efekty?",
        answer: "Dla osób początkujących optymalne są 2-3 treningi w tygodniu. Taka częstotliwość pozwala na skuteczną naukę ruchu i budowanie formy, zapewniając jednocześnie czas na niezbędną regenerację."
    },
    {
        question: "Czy trening personalny pomoże mi schudnąć?",
        answer: "Tak. Trening siłowy i metaboliczny to najskuteczniejsze narzędzia w walce z tkanką tłuszczową. Pomożemy Ci nie tylko spalić kalorie na sesji, ale też doradzimy, jak zmienić nawyki żywieniowe."
    },
    {
        question: "Czy muszę robić badania lekarskie przed rozpoczęciem?",
        answer: "Jeśli masz zdiagnozowane przewlekłe choroby lub stare kontuzje, warto skonsultować się z lekarzem. Na pierwszym spotkaniu przeprowadzamy też dokładny wywiad zdrowotny, aby wykluczyć przeciwwskazania."
    },
    {
        question: "Ile trwa jeden trening?",
        answer: "Standardowa sesja treningowa trwa 60 minut. To optymalny czas, aby przeprowadzić rozgrzewkę, część główną treningu oraz wyciszenie (cool-down)."
    },
    {
        question: "Czy dieta jest wliczona w cenę treningu?",
        answer: "W cenie treningu otrzymujesz wskazówki żywieniowe i opiekę mentorską. Jeśli potrzebujesz klinicznego jadłospisu rozpisanego co do grama, oferujemy to jako usługę dodatkową lub polecamy zaufanych dietetyków."
    },
    {
        question: "Czy mogę trenować z koleżanką/partnerem?",
        answer: "Oczywiście! Oferujemy opcję „Trening w Parach”. To świetny sposób na wzajemną motywację oraz obniżenie kosztów treningu na jedną osobę."
    },
    {
        question: "Mam kontuzję kręgosłupa. Czy mogę ćwiczyć?",
        answer: "W większości przypadków tak, a nawet jest to wskazane! Nasi trenerzy mają wiedzę z zakresu fizjoterapii i dobiorą ćwiczenia tak, by wzmocnić gorset mięśniowy bez obciążania bolących miejsc."
    },
    {
        question: "Czy muszę płacić dodatkowo za karnet na siłownię?",
        answer: "Nie. W Panda Studio nie ma ukrytych opłat członkowskich. Płacisz tylko za opiekę trenera, a wejście do naszego prywatnego studia jest już w cenie."
    },
    {
        question: "Czy trenerzy mówią po angielsku?",
        answer: "Tak, prowadzimy treningi również w języku angielskim. Zapraszamy obcokrajowców mieszkających w Rzeszowie."
    },
    {
        question: "Czy mogę przyjść na trening próbny?",
        answer: "Tak, pierwsze spotkanie traktujemy jako trening diagnostyczny. Obowiązuje na nie standardowa stawka za pojedyncze wejście, ale jeśli zdecydujesz się na pakiet, ta kwota zostanie w niego wliczona."
    },
    {
        question: "Dla jakich grup wiekowych prowadzicie zajęcia?",
        answer: "Trenujemy dorosłych w każdym wieku (nasi najstarsi podopieczni mają ponad 70 lat!) oraz młodzież pod opieką rodziców. Wiek to tylko liczba, dostosujemy obciążenia do Twoich możliwości."
    },
    {
        question: "Czy są u Was prysznice?",
        answer: "Tak, do dyspozycji klientów jest w pełni wyposażona łazienka z prysznicem, dzięki czemu możesz komfortowo odświeżyć się po treningu przed pracą lub spotkaniem."
    },
    {
        question: "Czy muszę brać suplementy?",
        answer: "Nie, suplementy to tylko dodatek. Kluczem do sukcesu jest zbilansowana dieta i trening. Trener doradzi Ci ewentualną suplementację (np. witaminą D3 czy Omega-3) tylko wtedy, gdy będzie to naprawdę potrzebne."
    }
];
export default function TrainingPage() {
    return (
        <main>
            <TrainingHero />
            <ServicesAccordionSection />
            <NutritionTipsSection />
            <ClassesCategorySection />
            <FaqSection items={faqItems} />
            <RandomNews />
            <RandomDictionaryEntries />
        </main>
    );
}
