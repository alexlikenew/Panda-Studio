import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/features/blog/services/blogService";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - FIT Panda Studio",
    description: "Artykuły o treningu, zdrowiu i stylu życia.",
};

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="blog-listing">
            <div className="blog-listing__heading">
                <h1>Nasze Artykuły</h1>
            </div>

            <div className="blog-listing__grid">
                {posts.map((post) => (
                    <Link href={`/blog/${post.slug.current}`} key={post._id} className="blog-card">
                        <div className="blog-card__image">
                            {post.mainImage ? (
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.title}
                                    width={400}
                                    height={200}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            ) : (
                                <div style={{ width: "100%", height: "100%", backgroundColor: "#eee" }} />
                            )}
                        </div>
                        <div className="blog-card__content">
                            <h2 className="blog-card__title">{post.title}</h2>
                            <div className="blog-card__date">
                                {new Date(post.publishedAt).toLocaleDateString('pl-PL', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}