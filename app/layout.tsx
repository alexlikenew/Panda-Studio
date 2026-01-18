import type { Metadata } from "next";
import "@/styles/main.scss";

export const metadata: Metadata = {
    title: "Panda Studio - Trening Personalny i Masaż Rzeszów",
    description: "Twoje miejsce na mapie Rzeszowa. Treningi personalne, masaż, fizjoterapia. Zadbaj o swoje zdrowie z profesjonalistami.",
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
            <body className="antialiased">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
