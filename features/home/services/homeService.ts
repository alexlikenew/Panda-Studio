import { client } from "@/sanity/lib/client";

export async function getSocialReels() {
  const query = `*[_type == "socialReel"] | order(publishedAt desc) {
    _id,
    caption,
    username,
    platform,
    link,
    "thumbnail": thumbnail.asset->url,
    "thumbnailAlt": thumbnail.alt,
    "videoUrl": videoFile.asset->url,
    publishedAt
  }`;

  return await client.fetch(query);
}
