import Link from "next/link";
import Image from "next/image";
import { Post } from "../types";
import { urlFor } from "@/sanity/lib/image";
import { calculateReadingTime } from "../services/blogService";

interface BlogCardProps {
    post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
    const readingTime = calculateReadingTime(post.body);

    return (
        <article className="blog-card">
            <Link href={`/blog/${post.slug.current}`} className="blog-card__link">
                <div className="blog-card__image-box">
                    {post.mainImage ? (
                        <Image
                            src={urlFor(post.mainImage).width(800).height(500).url()}
                            alt={post.title}
                            title={post.title}
                            fill
                            className="blog-card__image"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="blog-card__placeholder">
                            <span>Brak zdjęcia</span>
                        </div>
                    )}

                    {/* Category Badge */}
                    {post.categories && post.categories.length > 0 && (
                        <div className="blog-card__badges">
                            <span className="blog-card__badge text-tiny-semi-bold">
                                {post.categories[0]}
                            </span>
                        </div>
                    )}
                </div>

                <div className="blog-card__content">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="blog-card__tags text-tiny-normal">
                            {post.tags.map(tag => <span key={tag}>#{tag}</span>)}
                        </div>
                    )}

                    <h2 className="blog-card__title heading-h5">
                        {post.title}
                    </h2>

                    <div className="blog-card__meta text-small-normal">
                        {/* Author */}
                        {post.author && (
                            <div className="blog-card__author">
                                {post.author.image && (
                                    <div className="blog-card__author-image">
                                        <Image
                                            src={urlFor(post.author.image).width(48).height(48).url()}
                                            alt={post.author.name}
                                            title={post.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <span className="blog-card__author-name text-small-medium">{post.author.name}</span>
                            </div>
                        )}

                        {/* Date & Reading Time */}
                        <div className="blog-card__info">
                            <time dateTime={post.publishedAt}>
                                {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </time>
                            <span className="blog-card__separator">|</span>
                            <span className="blog-card__reading-time">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                                </svg>
                                {readingTime}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}
