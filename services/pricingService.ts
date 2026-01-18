import { client } from "@/sanity/lib/client";

export interface PricingPackage {
    name: string;
    price: string;
    features?: string[];
    isPopular?: boolean;
    _key: string;
}

export interface PricingCategory {
    _id: string;
    title: string;
    subtitle?: string;
    type: 'training' | 'massage';
    bookingUrl?: string;
    packages?: PricingPackage[];
}

export async function getPricingCategories(): Promise<PricingCategory[]> {
    const query = `
    *[_type == "pricingCategory"] | order(_createdAt asc) {
      _id,
      title,
      subtitle,
      type,
      bookingUrl,
      packages
    }
  `;
    return client.fetch(query, {}, { next: { revalidate: 3600 } });
}
