import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 3600; // 1 hour

export interface Author {
    name: string;
    slug: string;
    image: any;
    bio: any[];
    posts: {
        title: string;
        slug: string;
        publishedAt: string;
        image: any;
    }[];
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
    const query = groq`*[_type == "author" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    image,
    bio,
    "posts": *[_type == "blog" && references(^._id)] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      publishedAt,
      image
    }
  }`;

    return client.fetch(query, { slug }, { next: { revalidate } });
}
