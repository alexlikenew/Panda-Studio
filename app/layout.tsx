import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google"; // Added fonts
import "@/styles/main.scss";
import Navbar from "@/widgets/Navbar"; // Added Navbar
import Footer from "@/widgets/Footer"; // Added Footer
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
    metadataBase: new URL("https://pandastudio.rzeszow.pl"),
    title: {
        default: "FIT Panda Studio Treningu & Masażu Rzeszów",
        template: "%s | FIT Panda Studio",
    },
    description:
        "Panda Studio Team – profesjonalne studio treningowe w Rzeszowie. Treningi personalne, grupowe i funkcjonalne. Zadbaj o formę z doświadczonym trenerem! Rehabilitacja ruchowa i masaż.",
    keywords: [
        "studio treningowe Rzeszów",
        "trener personalny",
        "siłownia Rzeszów",
        "Panda Studio Team",
        "odchudzanie Rzeszów",
        "rehabilitacja ruchowa Rzeszów",
        "masaż",
        "fitness",
        "trening funkcjonalny",
        "zdrowy kręgosłup",
    ],
    authors: [{ name: "Panda Studio Team" }],
    creator: "Panda Studio Team",
    publisher: "Panda Studio Team",
    openGraph: {
        type: "website",
        locale: "pl_PL",
        url: "https://panda-studio-puce.vercel.app/",
        siteName: "FIT Panda Studio",
        title: "FIT Panda Studio Treningu & Masażu Rzeszów",
        description:
            "Panda Studio Team – profesjonalne studio treningowe w Rzeszowie. Treningi personalne, grupowe i funkcjonalne.",
        images: [
            {
                url: "/img/og-image.jpg",
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
        "geo.region": "PL-PK",
        "geo.placename": "Rzeszów",
        "geo.position": "50.0413;21.9990",
        ICBM: "50.0413, 21.9990",
    },
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
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
                "@id": "https://fitpandastudio.pl/#organization",
                "name": "Panda Studio",
                "url": "https://fitpandastudio.pl",
                "logo": "https://fitpandastudio.pl/img/logo.png",
                "email": "kontakt@fitpandastudio.pl",
                "telephone": "+48694906749",
                "sameAs": [
                    "https://www.instagram.com/fitpandastudio",
                    "https://www.facebook.com/fitpandastudio"
                ]
            },
            {
                "@type": "SportsActivityLocation",
                "@id": "https://fitpandastudio.pl/#gym",
                "parentOrganization": { "@id": "https://fitpandastudio.pl/#organization" },
                "name": "Panda Studio - Trening Personalny",
                "image": "https://fitpandastudio.pl/img/hero-training.jpg",
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
                "@id": "https://fitpandastudio.pl/#massage",
                "parentOrganization": { "@id": "https://fitpandastudio.pl/#organization" },
                "name": "Panda Studio - Masaż i Fizjoterapia",
                "image": "https://fitpandastudio.pl/img/masaz-welcome.jpg",
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientProviders>
                    <Navbar />
                    {children}
                    <Footer />
                </ClientProviders>
            </body>
        </html>
    );
}
