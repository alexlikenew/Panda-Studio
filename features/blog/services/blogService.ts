import { client } from "@/sanity/lib/client";
import { Post } from "../types";

export const revalidate = 3600; // 1 hour

export async function getPosts(): Promise<Post[]> {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title
  }`;

    return client.fetch(query, {}, { next: { revalidate } });
}

export async function getPost(slug: string): Promise<Post | null> {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    "author": author->{name, image},
    "categories": categories[]->title
  }`;

    return client.fetch(query, { slug }, { next: { revalidate } });
}
