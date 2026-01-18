"use client";

import { useUIContext } from "@/providers/UIContext";
import Link from "next/link";

interface PricingActionProps {
    type: 'training' | 'massage';
    bookingUrl?: string;
    className?: string;
}

export default function PricingAction({ type, bookingUrl, className = "" }: PricingActionProps) {
    const { openModal } = useUIContext();

    if (type === 'massage' && bookingUrl) {
        return (
            <Link
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`pricing-btn ${className}`}
            >
                Zarezerwuj
            </Link>
        );
    }

    return (
        <button
            onClick={openModal}
            className={`pricing-btn ${className}`}
        >
            Zarezerwuj
        </button>
    );
}
