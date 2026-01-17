import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/styles/main.scss";
import Navbar from "@/widgets/Navbar";
import Footer from "@/widgets/Footer";
import ClientProviders from "@/providers/ClientProviders";

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
};

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} ${poppins.variable} antialiased`}>
      <ClientProviders>
        <Navbar />
        {children}
        <Footer />
      </ClientProviders>
    </div>
  );
}
