import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 3600; // 1 hour

export interface Voucher {
    title: string;
    image: any;
    description: string;
    price: string;
    buyLink: string;
}

export async function getVouchers(): Promise<Voucher[]> {
    const query = groq`*[_type == "voucher"] {
    title,
    image,
    description,
    price,
    buyLink
  }`;

    return client.fetch(query, {}, { next: { revalidate } });
}
