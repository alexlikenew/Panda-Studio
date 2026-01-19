import { getLatestPosts } from "../services/blogService";
import BlogCard from "./BlogCard";
import { urlFor } from "@/sanity/lib/image";

export default async function LatestNews() {
    const posts = await getLatestPosts(3);

    // Generate JSON-LD for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": posts.map((post, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "BlogPosting",
                "headline": post.title,
                "url": `https://pandastudioteam.com/blog/${post.slug.current}`,
                "datePublished": post.publishedAt,
                "image": post.mainImage ? urlFor(post.mainImage).url() : undefined
            }
        }))
    };

    return (
        <section className="latest-news">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="wrapper">
                <h2 className="latest-news__header heading-h3">
                    Ostatnie <span>Aktualności</span>
                </h2>

                <div className="latest-news__grid">
                    {posts.map((post) => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
