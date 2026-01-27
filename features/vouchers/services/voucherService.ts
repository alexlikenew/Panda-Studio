import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 3600;

export interface VoucherPageData {
  title: string;
  description: string;
  imageFront: any;
  imageBack: any;
  infoParams: string[];
  phoneNumber: string;
}

export async function getVoucherPageData(): Promise<VoucherPageData> {
  const query = groq`*[_type == "voucherPage"][0] {
        title,
        description,
        imageFront,
        imageBack,
        infoParams,
        phoneNumber
    }`;

  return client.fetch(query, {}, { next: { revalidate } });
}
