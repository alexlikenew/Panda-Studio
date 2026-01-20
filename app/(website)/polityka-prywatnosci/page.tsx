import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Polityka Prywatności | Panda Studio Rzeszów",
    description: "Polityka prywatności i plików cookies serwisu Panda Studio Team.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="privacy-policy">
            <div className="privacy-policy__wrapper">
                <h1 className="privacy-policy__title heading-h2">
                    Polityka <span>Prywatności</span>
                </h1>

                <section>
                    <p><strong>Data ostatniej aktualizacji:</strong> 20.01.2026</p>
                    <p>
                        Zgodnie z art. 13 ust. 1 i ust. 2 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE („RODO”), informujemy, iż administratorem danych osobowych klienta jest <strong>Panda Studio Team</strong> z siedzibami w Rzeszowie:
                    </p>
                    <ul>
                        <li>ul. Myśliwska 255, 35-213 Rzeszów (Studio Treningowe)</li>
                        <li>ul. Podkarpacka 12a, 35-082 Rzeszów (Gabinet Masażu)</li>
                    </ul>
                    <p>
                        [NIP: DO UZUPEŁNIENIA], [REGON: DO UZUPEŁNIENIA].
                    </p>
                    <p>
                        Kontakt w celu przedstawienia oferty na <strong>usługi treningu personalnego, fizjoterapii i masażu</strong>: adres e-mail: <strong>kontakt@pandastudioteam.com</strong>, tel: +48 694 906 749 („Administrator”).
                    </p>
                    <p>
                        Administrator gwarantuje ochronę danych osobowych i przetwarzanie danych osobowych zgodnie z RODO.
                    </p>
                </section>

                <section>
                    <h3>Cele i podstawy prawne przetwarzania</h3>
                    <p>Przetwarzanie danych osobowych odbywa się w poniższych celach w oparciu o poniższe podstawy prawne:</p>
                    <ol>
                        <li>w zakresie odbierania i archiwizowania oświadczeń woli klienta, jako realizacji praw osób korzystających z usług świadczonych przez Administratora, korzystania z portalu i nabywania usług sprzedawanych przez Administratora – art. 6 ust. 1 lit. b, c oraz f RODO (wykonanie umowy, wykonanie obowiązku prawnego ciążącego na administratorze i prawnie usprawiedliwiony cel/uzasadniony interes Administratora),</li>
                        <li>w celu rozpatrzenia ewentualnych reklamacji lub zgłoszonych roszczeń – art. 6 ust. 1 lit. b oraz f RODO (wykonanie umowy, prawnie usprawiedliwiony cel/uzasadniony interes Administratora),</li>
                        <li>w zakresie dochodzenia roszczeń z tytułu prowadzonej działalności gospodarczej – art. 6 ust. 1 lit. f RODO (prawnie usprawiedliwiony cel/uzasadniony interes Administratora),</li>
                        <li>w zakresie prowadzenia ksiąg rachunkowych oraz rozliczeń z tytułu realizacji zawartej umowy – art. 6 ust. 1 lit. b, c oraz f RODO (wykonanie umowy, wykonanie obowiązku prawnego ciążącego na administratorze i prawnie usprawiedliwiony cel/uzasadniony interes Administratora).</li>
                        <li>w celach analitycznych (doboru usług do potrzeb naszych klientów, optymalizacji naszych usług w oparciu także o uwagi klienta na ich temat i zainteresowanie klienta, optymalizacji procesów obsługi w oparciu o przebieg procesów obsługi sprzedaży i posprzedażowej w tym reklamacji, itp.) będącego realizacją naszego prawnie uzasadnionego w tym interesu (art. 6 ust. 1 lit. f RODO);</li>
                        <li>w celach archiwalnych (dowodowych) będących realizacją naszego prawnie uzasadnionego interesu zabezpieczenia informacji na wypadek prawnej potrzeby wykazania faktów (art. 6 ust. 1 lit. f RODO);</li>
                        <li>w celu badania satysfakcji klientów będącego realizacją naszego prawnie uzasadnionego interesu określania jakości naszej obsługi oraz poziomu zadowolenia naszych klientów z usług (podstawa z art. 6 ust. 1 lit. f RODO);</li>
                        <li>w celu oferowania przez nas usług bezpośrednio (marketing bezpośredni), w tym dobierania ich pod kątem potrzeb klienta, będącego realizacją naszego prawnie uzasadnionego w tym interesu (podstawa z art. 6 ust. 1 lit. a i f RODO) – jeżeli klient wyrazi na to zgodę;</li>
                        <li>w celu oferowania bezpośrednio (marketing bezpośredni) produktów i usług firm z nami współpracujących (naszych partnerów), np. w formie kuponów rabatowych, w tym dobierania ich pod kątem potrzeb klienta, będącego realizacją prawnie uzasadnionego w tym interesu naszego i naszych partnerów (podstawa z art. 6 ust. 1 lit. a i f RODO) – jeżeli klient wyrazi na to zgodę;</li>
                        <li>w celu wykonania umowy o wykonywanie usług elektronicznych, a więc w celu umożliwienia założenia konta, utrzymywania konta i jego funkcjonalności, wysyłki newsletterów i wykonywania pozostałych usług elektronicznych, jak również w celu wykonywania umów, których stroną jest klient lub podjęcia działań na żądanie klienta przed zawarciem umowy (art. 6 ust. 1 lit. b) RODO);</li>
                        <li>Po wyrażeniu odrębnej zgody, na podstawie art. 6 ust. 1 lit. a) RODO, dane mogą być przetwarzane również w celu przesyłania newsletterów (w tym także w postaci smsów/mmsów wysyłanych na podany przez klienta numer telefonu).</li>
                    </ol>
                </section>

                <section>
                    <h3>Okres przechowywania danych</h3>
                    <p>Administrator przechowuje dane osobowe przetwarzane:</p>
                    <ol>
                        <li>w celach opisanych w pkt 1-3 i 6 powyżej przez okres przedawnienia roszczeń z tytułu prowadzonej przez Administratora działalności gospodarczej lub dochodzenia roszczeń przez klienta określony przepisami prawa, w szczególności kodeksu cywilnego;</li>
                        <li>w przypadku przetwarzania danych w celu, o którym mowa w pkt 4 powyżej – przez okres wymagany przepisami prawa nakazującymi Administratorowi przechowywanie ksiąg rachunkowych, jednak nie krócej niż przez termin przedawnienia roszczeń z tytułu działalności prowadzonej przez Administratora;</li>
                        <li>w celach opisanych w pkt 5, 7 powyżej przez czas prowadzenia przez Administratora działalności gospodarczej;</li>
                        <li>w celach opisanych w pkt 8-11 powyżej przez czas prowadzenia przez Administratora działalności gospodarczej, chyba że wcześniej cofniesz zgodę na przetwarzanie danych w tym zakresie;</li>
                    </ol>
                </section>

                <section>
                    <h3>Odbiorcy danych</h3>
                    <p>
                        Dane osobowe klienta mogą zostać udostępnione pracownikom/współpracownikom Administratora upoważnionym do ich przetwarzania na polecenie Administratora, a także podmiotom, którym Administrator powierza przetwarzanie danych osobowych, w tym dostawcom usług technicznych, księgowych, informatycznych, marketingowych i organizacyjnych umożliwiających Administratorowi prowadzenie kampanii marketingowych, prowadzenie serwisu internetowego, przygotowanie i dystrybucję newslettera oraz właściwym organom (Policji, Prokuraturze, Sądom, etc.) w zakresie realizowania przez nie ustawowych zadań, na ich żądanie z zachowaniem wszelkich gwarancji zapewniających bezpieczeństwo przekazywanych danych.
                    </p>
                </section>

                <section>
                    <h3>Prawa osoby, której dane dotyczą</h3>
                    <p>
                        Masz prawo żądania dostępu do swoich danych osobowych oraz do ich sprostowania, usunięcia lub ograniczenia przetwarzania lub prawo do wniesienia sprzeciwu wobec przetwarzania, a także prawo do przenoszenia danych – na zasadach określonych w art. 16 – 21 RODO.
                    </p>
                    <p>
                        Podanie danych jest dobrowolne, ale w zakresie innym niż w celu otrzymywania newslettera lub marketingu bezpośredniego, niezbędne do świadczenia usług. Brak podania danych osobowych będzie powodował niemożliwość świadczenia usług w ww. zakresie.
                    </p>
                </section>

                <section>
                    <h3>Polityka Cookies</h3>
                    <ol>
                        <li>Korzystamy z technologii przechowującej i uzyskującej dostęp do informacji na komputerze bądź innym urządzeniu końcowym użytkownika podłączonym do sieci Internet. Wykorzystujemy cookies. Cookies to niewielkie informacje tekstowe o sposobie korzystania z aplikacji, które przechowywane są po stronie przeglądarki osoby odwiedzającej stronę.</li>
                        <li>W celu identyfikacji i analizy potrzeb naszych klientów korzystamy z kodu Google Analytics. Jest to narzędzie do analityki internetowej, które pomaga nam udoskonalać funkcjonalność strony. Usługa Google Analytics gromadzi anonimowe informacje, odnotowuje tendencje występujące w witrynie bez identyfikowania poszczególnych Użytkowników. Podobnie jak wiele innych usług, narzędzie Google Analytics korzysta z własnych plików cookies do analizowania działań Użytkowników. Pliki te służą do przechowywania informacji, np. czasu rozpoczęcia bieżących odwiedzin oraz tego, czy Użytkownik był już kiedyś na naszej stronie, z jakiej witryny trafił do niej, jakiej rozdzielczości ekranu jest jego urządzenie, jakie zakładki przeglądał i na stronie internetowej etc. Korzystamy także z integracji z kanałami social media (Facebook, Instagram), które pozwalają wyświetlać reklamy osobom, które już raz odwiedziły naszą stronę.</li>
                        <li>Każda osoba przeglądająca Serwis może poprzez modyfikację ustawień swojej przeglądarki internetowej uniemożliwić zapisywanie plików cookies na swoim urządzeniu bądź zapisane pliki trwale usunąć. O przetwarzaniu cookies decydujesz poprzez ustawienia swojej przeglądarki internetowej.</li>
                        <li>Informujemy, że ograniczenia stosowania cookies mogą negatywnie wpłynąć na prawidłowość i wygodę działania Serwisu dla Użytkowników.</li>
                        <li>Niniejszy dokument obowiązuje od dnia 20.01.2026 r. Zastrzegamy sobie prawo do wprowadzania zmian w Polityce Prywatności.</li>
                    </ol>
                </section>
            </div>
        </main>
    );
}
