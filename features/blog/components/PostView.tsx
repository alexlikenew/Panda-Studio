import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "../types";

import { calculateReadingTime } from "../services/blogService";

export default function PostView({ post }: { post: Post }) {
    const readingTime = calculateReadingTime(post.body);

    return (
        <article className="blog-post-page">
            <div className="wrapper">
                {/* Back Link */}
                <Link href="/blog" className="back-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                    Wróć do artykułów
                </Link>

                {/* Hero Section */}
                <header className="post-hero">
                    <div className="post-hero__content">
                        {/* Categories (Badges) */}
                        {post.categories && post.categories.length > 0 && (
                            <div className="post-hero__badges">
                                {post.categories.map((cat, index) => (
                                    <span key={index} className="post-hero__badge">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="post-hero__title">{post.title}</h1>

                        <div className="post-hero__meta">
                            {/* Author */}
                            {post.author && (
                                <div className="post-hero__meta-item">
                                    {post.author.image && (
                                        <div className="post-hero__author-image">
                                            <Image
                                                src={urlFor(post.author.image).width(64).height(64).url()}
                                                alt={post.author.name}
                                                title={post.author.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase text-gray-400 tracking-wider">Autor</span>
                                        <span className="font-bold text-white">{post.author.name}</span>
                                    </div>
                                </div>
                            )}

                            <div className="post-hero__separator"></div>

                            {/* Date */}
                            <div className="post-hero__meta-item">
                                <span className="text-xs uppercase text-gray-400 tracking-wider">Data</span>
                                <time dateTime={post.publishedAt} className="text-white">
                                    {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </time>
                            </div>

                            <div className="post-hero__separator"></div>

                            {/* Reading Time */}
                            <div className="post-hero__meta-item">
                                <span className="text-xs uppercase text-gray-400 tracking-wider">Czas</span>
                                <span className="text-white flex items-center gap-2">
                                    {readingTime}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Main Image */}
                    {post.mainImage && (
                        <div className="post-hero__image-wrapper">
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                title={post.title}
                                fill
                                priority
                                className="post-hero__image"
                            />
                        </div>
                    )}
                </header>

                {/* Content Section */}
                <div className="post-content">
                    <PortableText value={post.body} />

                    {/* Footer / Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <footer className="post-footer">
                            <div className="post-footer__tags">
                                {post.tags.map(tag => (
                                    <span key={tag} className="post-footer__tag">#{tag}</span>
                                ))}
                            </div>
                        </footer>
                    )}
                </div>
            </div>
        </article>
    );
}
