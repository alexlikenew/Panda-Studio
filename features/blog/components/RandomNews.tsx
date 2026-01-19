import { getRandomBlogPosts } from "../services/blogService";
import BlogCard from "./BlogCard";
import { urlFor } from "@/sanity/lib/image";

export default async function RandomNews() {
    const posts = await getRandomBlogPosts(3);

    // Safety check just in case
    if (!posts || posts.length === 0) {
        return null;
    }

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
        <section className="random-news">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="wrapper">
                <h2 className="random-news__header heading-h3">
                    ZOBACZ <span>RÓWNIEŻ</span>
                </h2>

                <div className="random-news__grid">
                    {posts.map((post) => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
