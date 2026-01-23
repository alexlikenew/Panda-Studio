import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/features/contact/components/ContactForm";
import ContactContent from "@/components/sections/contact/ContactContent";
import RandomNews from "@/features/blog/components/RandomNews";
import RandomDictionaryEntries from "@/features/dictionary/components/RandomDictionaryEntries";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Kontakt - FIT Panda Studio",
    description: "Panda Studio Team – profesjonalne studio treningowe w Rzeszowie. Skontaktuj się z nami!",
    keywords: "studio treningowe Rzeszów, kontakt, telefon, adres, godziny otwarcia",
};

const faqItems = [
    {
        question: "Gdzie mogę zaparkować samochód?",
        answer: "Dla naszych klientów dostępne są bezpłatne miejsca parkingowe bezpośrednio przed budynkiem studia. Nie musisz martwić się o strefę płatnego parkowania."
    },
    {
        question: "W jakich godzinach otwarte jest studio?",
        answer: "Panda Studio działa od poniedziałku do soboty w godzinach 08:00 – 16:00 (oraz wieczorami wg umówionych wizyt). W niedziele odpoczywamy."
    },
    {
        question: "Czy honorujecie karty Multisport?",
        answer: "Nie honorujemy kart systemowych (Multisport, Medicover). Jesteśmy kameralnym studiem premium, stawiającym na indywidualną opiekę, co wykracza poza model sieciówek."
    },
    {
        question: "Czy można płacić kartą?",
        answer: "Tak, w obu naszych lokalizacjach akceptujemy płatności wszystkimi kartami, BLIKiem oraz gotówką. Wystawiamy również faktury."
    },
    {
        question: "Jak trafić do gabinetu masażu (Podkarpacka)?",
        answer: "Gabinet masażu znajduje się w innej lokalizacji niż studio treningowe. Wejście jest od strony głównej ulicy, na parterze. Szukaj logotypu Panda Masaż na witrynie."
    },
    {
        question: "Czy muszę się wcześniej umawiać?",
        answer: "Tak, działamy wyłącznie na zapisy. Dzięki temu gwarantujemy, że podczas Twojej wizyty cała uwaga trenera lub masażysty jest skupiona tylko na Tobie."
    },
    {
        question: "Wystawiacie faktury VAT?",
        answer: "Tak. Jeśli potrzebujesz faktury na firmę, poinformuj nas o tym przed dokonaniem płatności."
    },
    {
        question: "Czy macie klimatyzację?",
        answer: "Tak, wszystkie nasze sale treningowe i gabinety są klimatyzowane, co zapewnia komfort ćwiczeń nawet w upalne dni."
    },
    {
        question: "Jak długo ważny jest voucher prezentowy?",
        answer: "Vouchery są ważne przez 3 miesiące od daty zakupu. To wystarczający czas, aby obdarowana osoba znalazła dogodny termin."
    },
    {
        question: "Czy mogę odwołać wizytę SMS-em?",
        answer: "Tak, akceptujemy odwołania telefoniczne i SMS-owe. Pamiętaj jednak o zachowaniu 24-godzinnego wyprzedzenia, aby uniknąć utraty wejściówki."
    },
    {
        question: "Czy jest dostępna woda do picia?",
        answer: "Tak, zapewniamy nielimitowany dostęp do wody filtrowanej dla naszych podopiecznych. Pamiętaj tylko o zabraniu swojego bidonu (dbamy o ekologię!)."
    },
    {
        question: "Gdzie znajdę cennik usług?",
        answer: "Pełny cennik treningów i masaży znajduje się na naszej stronie internetowej w zakładce „Cennik”."
    },
    {
        question: "Czy są u was szatnie zamykane na klucz?",
        answer: "Posiadamy kameralne przebieralnie. Ze względu na prywatny charakter studia (wchodzą tylko umówione osoby), Twoje rzeczy są u nas w pełni bezpieczne."
    },
    {
        question: "Czy prowadzicie zajęcia grupowe?",
        answer: "Naszą specjalizacją są treningi indywidualne i w parach (duo). Okazjonalnie organizujemy warsztaty w małych grupach – obserwuj nas na Instagramie, by być na bieżąco."
    },
    {
        question: "Jak najszybciej się z wami skontaktować?",
        answer: "Najszybciej odpowiadamy telefonicznie. Jeśli nie odbieramy (prawdopodobnie prowadzimy trening), wyślij SMS – oddzwonimy w pierwszej wolnej chwili."
    }
];
export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactContent />
            <FaqSection items={faqItems} />
            <RandomNews />
            <RandomDictionaryEntries />
        </main>
    );
}
