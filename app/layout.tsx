import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google"; // Added fonts

import ClientProviders from "@/providers/ClientProviders"; // Added Providers

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const viewport: Viewport = {
    themeColor: "#0c0c0d",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://pandastudioteam.com"),
    title: {
        default: "Panda Studio Rzeszów – Trening Personalny i Masaż",
        template: "%s | Panda Studio Rzeszów",
    },
    description:
        "Profesjonalny trening personalny, fizjoterapia i masaż w Rzeszowie. Zadbaj o zdrowie i sylwetkę pod okiem ekspertów w kameralnej atmosferze. Umów wizytę!",
    keywords: [
        // 1. MARKA & LOKALIZACJA (Brand)
        "Panda Studio Rzeszów",
        "Panda Studio Team",
        "studio treningowe Rzeszów",
        "siłownia Rzeszów",
        "kameralna siłownia Rzeszów",

        // 2. MASAŻ - NAJPOPULARNIEJSZE (High Volume)
        "masaż Rzeszów",
        "masażysta Rzeszów",
        "dobry masażysta Rzeszów",
        "salon masażu Rzeszów",
        "gabinet masażu Rzeszów",
        "kręgarz Rzeszów",
        "nastawianie kręgosłupa",

        // 3. RODZAJE MASAŻU (Specific Types)
        "masaż relaksacyjny",
        "masaż sportowy",
        "masaż leczniczy",
        "masaż klasyczny",
        "masaż tkanek głębokich",
        "masaż powięziowy",
        "masaż antycellulitowy",
        "masaż bańką chińską",
        "drenaż limfatyczny",
        "masaż limfatyczny",
        "masaż dla par Rzeszów",

        // 4. TRENING & SYLWETKA (Fitness)
        "trener personalny Rzeszów",
        "trening personalny",
        "trening funkcjonalny",
        "trening medyczny",
        "trening w parze",
        "przygotowanie motoryczne",
        "powrót do formy",
        "odchudzanie Rzeszów",
        "modelowanie sylwetki",

        // 5. ZDROWIE & FIZJOTERAPIA (Health)
        "fizjoterapia Rzeszów",
        "fizjoterapeuta Rzeszów",
        "rehabilitacja ruchowa",
        "rehabilitacja powypadkowa",
        "zdrowy kręgosłup",
        "ból pleców",
        "rwa kulszowa",
        "korekcja wad postawy",
        "terapia manualna",

        // 6. PREZENTY (Commercial Intent)
        "voucher na masaż Rzeszów",
        "bon podarunkowy na masaż"
    ],
    authors: [{ name: "Panda Studio Team" }],
    creator: "Panda Studio Team",
    publisher: "Panda Studio Team",
    openGraph: {
        type: "website",
        locale: "pl_PL",
        url: "https://pandastudioteam.com",
        siteName: "FIT Panda Studio",
        title: "FIT Panda Studio Treningu & Masażu Rzeszów",
        description:
            "Panda Studio Team – profesjonalne studio treningowe w Rzeszowie. Treningi personalne, grupowe i funkcjonalne.",
        images: [
            {
                url: "/img/panda_studio_og_image_rzeszow.png",
                width: 1200,
                height: 630,
                alt: "Panda Studio Team Rzeszów",
            },
        ],
    },
    icons: {
        icon: "/favicon/favicon-32x32.png",
        apple: "/favicon/apple-touch-icon.png",
    },
    other: {
        "og:logo": "/img/pandastuio_logo_png.png",
        "geo.region": "PL-PK",
        "geo.placename": "Rzeszów",
        "geo.position": "50.0413;21.9990",
        ICBM: "50.0413, 21.9990",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://pandastudioteam.com/#organization",
                "name": "Panda Studio",
                "url": "https://pandastudioteam.com",
                "logo": "https://pandastudioteam.com/img/logo.png",
                "email": "kontakt@fitpandastudio.pl",
                "telephone": "+48694906749",
                "sameAs": [
                    "https://www.instagram.com/fitpandastudio",
                    "https://www.facebook.com/fitpandastudio"
                ]
            },
            {
                "@type": "SportsActivityLocation",
                "@id": "https://pandastudioteam.com/#gym",
                "parentOrganization": { "@id": "https://pandastudioteam.com/#organization" },
                "name": "Panda Studio - Trening Personalny",
                "image": "https://pandastudioteam.com/img/hero-training.jpg",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "ul. Myśliwska 255",
                    "addressLocality": "Rzeszów",
                    "postalCode": "35-242",
                    "addressCountry": "PL"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 50.013270,
                    "longitude": 21.811609
                },
                "telephone": "+48694906749",
                "priceRange": "$$",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        "opens": "08:00",
                        "closes": "16:00"
                    }
                ]
            },
            {
                "@type": "HealthAndBeautyBusiness",
                "@id": "https://pandastudioteam.com/#massage",
                "parentOrganization": { "@id": "https://pandastudioteam.com/#organization" },
                "name": "Panda Studio - Masaż i Fizjoterapia",
                "image": "https://pandastudioteam.com/img/masaz-welcome.jpg",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "ul. Podkarpacka 12a",
                    "addressLocality": "Rzeszów",
                    "postalCode": "35-082",
                    "addressCountry": "PL"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 50.026914,
                    "longitude": 21.959003
                },
                "telephone": "+48694906749",
                "priceRange": "$$",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        "opens": "08:00",
                        "closes": "16:00"
                    }
                ]
            }
        ]
    };

    return (
        <html lang="pl">
            <body className={`${inter.variable} ${poppins.variable} antialiased`}>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-99JXQ7S6FC"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-99JXQ7S6FC');
                    `}
                </Script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientProviders>

                    {children}

                </ClientProviders>
            </body>
        </html>
    );
}
