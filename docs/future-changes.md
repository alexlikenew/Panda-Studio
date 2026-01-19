1. 🛠️ Optymalizacja i "Dług Techniczny" (Do zrobienia "na wczoraj")
A. Przeniesienie Opinii do Sanity (Kluczowe) Obecnie opinie są "wryte" na stałe w kodzie w pliku ReviewsSection.tsx.

Problem: Aby dodać nową opinię, musisz angażować programistę.

Rozwiązanie: Stworzyć schemat review w Sanity (autor, rola, treść, data, ocena).

Zysk: Klient sam dodaje opinie z panelu. Możesz wtedy sortować je po dacie lub wybierać "Wyróżnione na stronę główną".

B. Optymalizacja Wideo (Community Reels) W CommunitySlider.tsx widzę "hack" z currentTime = 1, żeby pokazać klatkę wideo, jeśli nie ma miniatury.

Problem: To obciąża przeglądarkę (musi pobrać fragment wideo dla każdego slajdu).

Rozwiązanie: Wymusić w Sanity (Validation Rule) dodanie obrazka thumbnail dla każdego Reels'a. Wtedy ładujesz tylko lekkie .webp zamiast ciężkich plików wideo przy inicjalnym ładowaniu strony.

C. Inteligentne Linkowanie Wewnętrzne (SEO Power Move) Masz świetną Baze Wiedzy (dictionary) i Blog.

Pomysł: Stwórz komponent (lub serializer PortableText), który automatycznie wykrywa słowa kluczowe w treści artykułów blogowych (np. "hipertrofia") i automatycznie linkuje je do definicji w Bazie Wiedzy.

Zysk: Ogromny boost dla SEO (link juice) i zatrzymanie użytkownika na stronie.

2. 🚀 Nowe Funkcjonalności (Rozwój Biznesowy)
A. Sekcja "Nasz Zespół" (Team) w Sanity Trening personalny opiera się na zaufaniu do trenera. Brakuje sekcji, gdzie klient pozna zespół.

Feature: Nowy typ dokumentu author w Sanity (już istnieje w strukturze, ale warto go rozbudować o "Bio", "Specjalizacje", "Link do rezerwacji Booksy danego trenera").

UI: Karty trenerów na stronie głównej lub podstronie /trening, które po kliknięciu prowadzą do ich indywidualnych profili.

B. Lead Magnet / Newsletter (Wykorzystaj Resend) Masz już skonfigurowany Resend do formularza kontaktowego.

Pomysł: Dodaj prosty formularz w stopce lub w sekcji bloga: "Pobierz darmowy plan rozgrzewki PDF".

Mechanizm: Zapisujesz maila w bazie (Resend Audiences) i automatycznie wysyłasz maila zwrotnego z plikiem PDF (hosted on Sanity). Budujesz bazę mailingową przyszłych klientów.

C. Breadcrumbs (Okruszki Chleba) - JSON-LD Wdrożyłeś dużo JSON-LD, ale brakuje BreadcrumbList.

Gdzie: Na podstronach głębokich, np. /baza-wiedzy/hipertrofia.

Zysk: Google wyświetla ładną ścieżkę w wynikach wyszukiwania (Home > Baza Wiedzy > Hipertrofia zamiast surowego URL), co zwiększa CTR.

3. ✨ UX/UI i "Efekt Premium"
A. Page Transitions (Przejścia) Jako studio "Premium", przejścia między stronami nie powinny być "twarde".

Rozwiązanie: Użyj lekkiej biblioteki (np. framer-motion z template.tsx w Next.js), aby zrobić delikatne fade-in przy zmianie podstron.

B. Sticky CTA na Mobile Na telefonie przycisk "Umów wizytę" powinien być zawsze pod ręką.

Rozwiązanie: Pasek na dole ekranu (tylko mobile), który pojawia się po przescrollowaniu sekcji Hero, z przyciskami "Zadzwoń" i "Booksy".

C. FAQ Schema W strukturze widzę FaqSection.tsx.

Zadanie: Upewnij się, że ta sekcja również generuje JSON-LD typu FAQPage. To często daje tzw. "rozszerzone wyniki" w Google (pytania i odpowiedzi widoczne bezpośrednio w wyszukiwarce).

4. 🛡️ Stabilność i Jakość Kodu
A. Testy E2E (Playwright) Projekt rośnie. Warto dodać chociaż podstawowe testy krytycznych ścieżek:

Czy strona główna się ładuje?

Czy formularz kontaktowy wysyła request?

Czy linki do Booksy działają?

B. Storybook (Opcjonalnie) Jeśli planujesz dodawać więcej "reusable components" (przyciski, karty, inputy), Storybook pozwoli Ci budować UI w izolacji, bez konieczności uruchamiania całej aplikacji i "klikania" po stronach.

Podsumowanie - Co robić w pierwszej kolejności?
Migracja Opinii do Sanity (to uwolni Cię od grzebania w kodzie przy każdej nowej recenzji).

Wdrożenie seoSection na każdej podstronie (wykorzystaj ten nowy ficzer masowo).

Cross-linking Blog <-> Słownik (dla SEO).

