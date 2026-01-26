import { client } from "@/sanity/lib/client";
import { Post } from "../types";

export const revalidate = 3600; // 1 hour

export function calculateReadingTime(body: any): string {
  if (!body) return "1 min";
  const text = body.map((block: any) => block.children?.map((child: any) => child.text).join(" ")).join(" ");
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min`;
}

export async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    "mainImage": image.asset->{
      _id,
      url,
      altText
    },
    excerpt,
    "categories": categories[]->title,
    "author": author->{name, image},
    publishedAt,
    "categories": categories[]->title,
    "tags": tags,
    "author": author->{name, image, "slug": slug.current},
    body
  }`;

  return client.fetch(query, {}, { next: { revalidate } });
}

export async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    "mainImage": image.asset->{
      _id,
      url,
      altText
    },
    excerpt,
    faq[] { question, answer },
    relatedServices[] { title, url },
    publishedAt,
    body,
    "author": author->{name, image, "slug": slug.current},
    "categories": categories[]->title,
    "tags": tags
  }`;

  return client.fetch(query, { slug }, { next: { revalidate } });
}

export async function getLatestPosts(limit: number = 3): Promise<Post[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    slug,
    "mainImage": image.asset->{
      _id,
      url,
      altText
    },
    excerpt,
    "categories": categories[]->title,
    "tags": tags,
    "author": author->{name, image, "slug": slug.current},
    publishedAt,
    body
  }`;

  return client.fetch(query, { limit }, { next: { revalidate } });
}

export async function getRandomBlogPosts(count: number = 3): Promise<Post[]> {
  // Fetch more posts than needed to ensure randomness
  const limit = 15;
  const query = `*[_type == "blog"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      "mainImage": image.asset->{
        _id,
        url,
        altText
      },
      excerpt,
      "categories": categories[]->title,
      "tags": tags,
      "author": author->{name, image, "slug": slug.current},
      publishedAt,
      body
    }`;

  const posts: Post[] = await client.fetch(query, { limit }, { next: { revalidate: 60 } }); // Lower revalidate for randomness

  if (!posts || posts.length === 0) {
    return [];
  }

  // Shuffle array using Fisher-Yates algorithm
  for (let i = posts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [posts[i], posts[j]] = [posts[j], posts[i]];
  }

  return posts.slice(0, count);
}

export async function getLatestFooterPosts(): Promise<Post[]> {
  const query = `*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc)[0..2] {
    _id,
    title,
    "slug": slug.current,
    publishedAt
  }`;

  return client.fetch(query, {}, { next: { revalidate } });
}
