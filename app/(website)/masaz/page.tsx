import type { Metadata } from "next";
import MassageHero from "@/components/sections/masaz/MassageHero";
import MassageWelcome from "@/components/sections/masaz/MassageWelcome";
import MassageOffer from "@/components/sections/masaz/MassageOffer";
import MassageBenefits from "@/components/sections/masaz/MassageBenefits";
import RandomNews from "@/features/blog/components/RandomNews";
import RandomDictionaryEntries from "@/features/dictionary/components/RandomDictionaryEntries";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Masaż Rzeszów - FIT Panda Studio Treningu",
    description: "Panda Studio Team – profesjonalne studio treningowe w Rzeszowie. Masaż leczniczy, sportowy i relaksacyjny.",
    keywords: "studio treningowe Rzeszów, masaż Rzeszów, masaż leczniczy, masaż sportowy, rehabilitacja ruchowa Rzeszów",
};
const faqItems = [
    {
        question: "Czy masaż tkanek głębokich bardzo boli?",
        answer: "Masaż głęboki może wiązać się z dyskomfortem (tzw. 'dobry ból'), ale nigdy nie przekraczamy granicy Twojej wytrzymałości. Terapeuta dostosowuje siłę nacisku, aby zabieg był skuteczny, ale bezpieczny."
    },
    {
        question: "Jak przygotować się do wizyty u masażysty?",
        answer: "Unikaj obfitych posiłków na godzinę przed wizytą. Warto wziąć ciepły prysznic, by rozluźnić mięśnie. Jeśli masz aktualne wyniki badań obrazowych (RTG, rezonans), zabierz je ze sobą."
    },
    {
        question: "Czy muszę się całkowicie rozebrać?",
        answer: "Twój komfort jest priorytetem. Do masażu zostajesz w bieliźnie, a części ciała, które nie są masowane, są cały czas przykryte ręcznikiem. Szanujemy Twoją intymność."
    },
    {
        question: "Czy po masażu mogę iść na trening?",
        answer: "Zalecamy, aby po intensywnym masażu (sportowym, leczniczym) dać ciału odpocząć resztę dnia. Mięśnie potrzebują czasu na regenerację. Lekki spacer jest jak najbardziej wskazany."
    },
    {
        question: "Jakie są przeciwwskazania do masażu?",
        answer: "Główne przeciwwskazania to: ostre stany zapalne, gorączka, przerwanie ciągłości skóry, świeże urazy oraz niektóre choroby układu krążenia i nowotworowe. W razie wątpliwości zapytaj nas przed wizytą."
    },
    {
        question: "Ile trwa wizyta?",
        answer: "W zależności od wybranej usługi, masaż trwa zazwyczaj 30, 60 lub 90 minut. Czas ten jest w pełni poświęcony na terapię."
    },
    {
        question: "Czy wykonujecie masaż kobiet w ciąży?",
        answer: "Tak, ale tylko w przypadku ciąży niezagrożonej i po I trymestrze. Zawsze wymagamy zgody lekarza prowadzącego na masaż prenatalny."
    },
    {
        question: "Czy po masażu mogą pojawić się siniaki?",
        answer: "Po intensywnych terapiach manualnych lub bańce chińskiej mogą pojawić się drobne wybroczyny, które znikają po kilku dniach. Jest to normalna reakcja tkanki na silny bodziec."
    },
    {
        question: "Czym różni się masaż sportowy od relaksacyjnego?",
        answer: "Relaksacyjny jest delikatniejszy, płynny i ma na celu wyciszenie układu nerwowego. Sportowy jest mocniejszy, szybszy i skupia się na konkretnych grupach mięśniowych, by przyspieszyć ich regenerację."
    },
    {
        question: "Czy oferujecie oklejanie taśmami (Kinesiotaping)?",
        answer: "Tak, nasi fizjoterapeuci często stosują taping jako uzupełnienie terapii, aby przedłużyć efekt masażu i odciążyć bolące miejsca."
    },
    {
        question: "Boli mnie głowa od pracy przy biurku. Jaki masaż wybrać?",
        answer: "Najlepszy będzie masaż leczniczy odcinka szyjnego lub masaż tkanek głębokich. Skupimy się na rozluźnieniu karku, potylicy i barków."
    },
    {
        question: "Czy podczas masażu można rozmawiać?",
        answer: "To zależy od Ciebie. Jeśli masz ochotę porozmawiać – śmiało. Jeśli wolisz ciszę i pełny relaks – terapeuta to uszanuje i nie będzie inicjował rozmowy."
    },
    {
        question: "Co jeśli spóźnię się na wizytę?",
        answer: "Szanujemy czas kolejnych pacjentów, dlatego spóźnienie może skutkować skróceniem czasu Twojego zabiegu. Prosimy o przybycie 5 minut przed czasem."
    },
    {
        question: "Czy stosujecie bańki ogniowe/bezogniowe?",
        answer: "Tak, stosujemy terapię próżniową (bańki) jako skuteczną metodę na rozluźnienie powięzi i poprawę ukrwienia tkanek."
    },
    {
        question: "Jak często powinienem chodzić na masaż?",
        answer: "Profilaktycznie raz na 3-4 tygodnie. W stanach bólowych lub przy intensywnym treningu terapeuta może zalecić częstsze wizyty (np. raz w tygodniu)."
    }
];
export default function MassagePage() {
    return (
        <main>
            <MassageHero />
            <MassageWelcome />
            <MassageOffer />
            <MassageBenefits />
            <FaqSection items={faqItems} />
            <RandomNews />
            <RandomDictionaryEntries />
        </main>
    );
}
