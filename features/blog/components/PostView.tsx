import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "../types";

export default function PostView({ post }: { post: Post }) {
    return (
        <article className="blog-post">
            <header className="blog-post__header">
                <h1 className="blog-post__title">{post.title}</h1>
                <div className="blog-post__meta">
                    <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        })}
                    </time>
                    {post.categories && (
                        <span className="blog-post__categories">
                            {post.categories.map((cat, index) => (
                                <span key={index} className="blog-post__category">
                                    {cat.title}
                                </span>
                            ))}
                        </span>
                    )}
                </div>
            </header>

            <div className="blog-post__separator"></div>

            {post.mainImage && (
                <div className="blog-post__image">
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        title={post.title}
                        width={800}
                        height={500}
                        priority
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            )}

            <div className="blog-post__content">
                <PortableText value={post.body} />
            </div>
        </article>
    );
}
