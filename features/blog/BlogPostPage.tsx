import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "./types";
import { calculateReadingTime } from "./services/blogService";

interface BlogPostPageProps {
    post: Post;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
    const readingTime = calculateReadingTime(post.body);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.mainImage ? urlFor(post.mainImage).url() : undefined,
        "description": post.excerpt || post.title,
        "author": post.author ? {
            "@type": "Person",
            "name": post.author.name
        } : undefined,
        "publisher": {
            "@type": "Organization",
            "name": "Panda Studio",
            "logo": {
                "@type": "ImageObject",
                "url": "https://pandastudio.pl/logo.png" // Replace with actual logo URL
            }
        },
        "datePublished": post.publishedAt,
        ...(post.faq ? {
            "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": post.faq.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            }
        } : {})
    };

    return (
        <article className="blog-post-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
                                    <span key={index} className="post-hero__badge text-tiny-bold">
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
                                                className="post-hero__author-img"
                                            />
                                        </div>
                                    )}
                                    <div className="post-hero__author-col">
                                        <span className="post-hero__label text-tiny-normal">Autor</span>
                                        <span className="post-hero__name text-regular-bold">{post.author.name}</span>
                                    </div>
                                </div>
                            )}

                            <div className="post-hero__separator"></div>

                            {/* Date */}
                            <div className="post-hero__meta-item">
                                <span className="post-hero__label text-tiny-normal">Data</span>
                                <time dateTime={post.publishedAt} className="post-hero__date text-regular-medium">
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
                                <span className="post-hero__label text-tiny-normal">Czas</span>
                                <span className="post-hero__time text-regular-medium">
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

                <div className="post-content">
                    {/* Excerpt as Lead */}
                    {post.excerpt && (
                        <p className="post-lead text-large-medium">{post.excerpt}</p>
                    )}

                    <PortableText value={post.body} />

                    {/* Related Services CTA */}
                    {post.relatedServices && post.relatedServices.length > 0 && (
                        <div className="post-cta">
                            <h3 className="post-cta__title heading-h3">Sprawdź również naszą ofertę</h3>
                            <div className="post-cta__items">
                                {post.relatedServices.map((service, index) => (
                                    <div key={index} className="post-cta__item">
                                        <span className="post-cta__service text-medium-medium">{service.title}</span>
                                        <a href={service.url} className="post-cta__button text-small-bold">
                                            Zobacz
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQ Section */}
                    {post.faq && post.faq.length > 0 && (
                        <div className="post-faq">
                            <h3 className="post-faq__title heading-h3">FAQ - Częste pytania</h3>
                            <div className="post-faq__list">
                                {post.faq.map((item, index) => (
                                    <details key={index} className="post-faq__item">
                                        <summary className="post-faq__question text-large-semi-bold">
                                            {item.question}
                                            <span className="post-faq__icon">+</span>
                                        </summary>
                                        <div className="post-faq__answer text-medium-normal">
                                            {item.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Footer / Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <footer className="post-footer">
                            <div className="post-footer__tags">
                                {post.tags.map(tag => (
                                    <span key={tag} className="post-footer__tag text-small-medium">#{tag}</span>
                                ))}
                            </div>
                        </footer>
                    )}
                </div>
            </div>
        </article>
    );
}
