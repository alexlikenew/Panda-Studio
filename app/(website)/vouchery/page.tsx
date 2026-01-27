import { Metadata } from "next";
import Image from "next/image";
import { getVoucherPageData } from "@/features/vouchers/services/voucherService";
import { urlFor } from "@/sanity/lib/image";
import { Phone, Clock, MapPin, CreditCard, Gift, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
    title: "Voucher Prezentowy (Boutique) - Panda Studio",
    description: "Ekskluzywny prezent w formie fizycznego vouchera na wybrane zabiegi w Panda Studio.",
};

export default async function VoucheryPage() {
    const data = await getVoucherPageData();

    if (!data) return <div className="wrapper" style={{ paddingTop: '120px', textAlign: 'center' }}>Ładowanie oferty boutique...</div>;

    // Helper to assign icons based on text content (simple heuristic)
    const getIcon = (text: string) => {
        const t = text.toLowerCase();
        if (t.includes("czas") || t.includes("minut")) return <Clock size={24} className="feature-icon" />;
        if (t.includes("ważność") || t.includes("miesiące")) return <Gift size={24} className="feature-icon" />; // Or Calendar
        if (t.includes("odbiór") || t.includes("adres")) return <MapPin size={24} className="feature-icon" />;
        if (t.includes("płatność") || t.includes("gotówk")) return <CreditCard size={24} className="feature-icon" />;
        return <Gift size={24} className="feature-icon" />;
    };

    return (
        <div className="voucher-boutique">
            <div className="wrapper">

                {/* 1. Header Section */}
                <header className="voucher-boutique__header">
                    <span className="voucher-boutique__subtitle">Edycja Limitowana</span>
                    <h1 className="heading-h2 voucher-boutique__title">{data.title}</h1>
                    <p className="text-medium-normal voucher-boutique__description">
                        {data.description}
                    </p>
                </header>

                {/* 2. Visual Showcase (Floating Cards) */}
                <div className="voucher-boutique__showcase">
                    {/* Back Card (Layer 1) */}
                    {data.imageBack && (
                        <div className="voucher-card-layer voucher-card-layer--back">
                            <Image
                                src={urlFor(data.imageBack).width(800).url()}
                                alt="Voucher Rewers"
                                width={600}
                                height={400} // Aspect ratio approximation
                                className="voucher-img"
                                priority
                            />
                        </div>
                    )}

                    {/* Front Card (Layer 2 - Prominent) */}
                    {data.imageFront && (
                        <div className="voucher-card-layer voucher-card-layer--front">
                            <Image
                                src={urlFor(data.imageFront).width(800).url()}
                                alt="Voucher Awers"
                                width={600}
                                height={400}
                                className="voucher-img"
                                priority
                            />
                        </div>
                    )}
                </div>

                {/* 3. Info Parameters Grid */}
                {data.infoParams && (
                    <div className="voucher-boutique__features">
                        {data.infoParams.map((param, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-item__icon-wrapper">
                                    {getIcon(param)}
                                </div>
                                <span className="feature-item__text text-regular-medium">{param}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* 4. Call To Action */}
                <div className="voucher-boutique__cta-section">
                    <div className="cta-box">
                        <h3 className="heading-h4 cta-box__title">Jak zdobyć voucher?</h3>
                        <p className="text-medium-normal cta-box__text">
                            Zadzwoń do nas, aby zarezerwować voucher. <br />
                            Odbierzesz go osobiście w naszym studio – pięknie zapakowany, gotowy do wręczenia.
                        </p>
                        <a href={`tel:${data.phoneNumber.replace(/\s/g, '')}`} className="btn-primary cta-box__button">
                            <PhoneCall size={20} className="mr-2" />
                            {data.phoneNumber}
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
