import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { Author } from "../services/authorService";

interface AuthorProfileProps {
    author: Author;
}

export default function AuthorProfile({ author }: AuthorProfileProps) {
    return (
        <div className="author-profile">
            {/* Sidebar (Left Column) */}
            <aside className="author-profile__sidebar">
                <div className="author-profile__image-container">
                    {author.image ? (
                        <Image
                            src={urlFor(author.image).width(400).height(400).url()}
                            alt={author.name}
                            width={300}
                            height={300}
                            className="author-profile__image"
                            priority
                        />
                    ) : (
                        <div className="author-profile__placeholder-image" />
                    )}
                </div>

                <div className="author-profile__identity">
                    <h1 className="author-profile__name heading-h4">{author.name}</h1>
                    <p className="author-profile__job text-tiny-semi-bold">Specjalista Panda Studio</p>
                </div>

                <div className="author-profile__actions">
                    <Link href="/kontakt" className="btn-primary author-profile__cta">
                        Umów wizytę
                    </Link>
                </div>
            </aside>

            {/* Main Content (Right Column) */}
            <div className="author-profile__content">
                {/* Bio Section */}
                {author.bio && (
                    <section className="author-profile__bio">
                        <PortableText value={author.bio} />
                    </section>
                )}

                {/* Articles Section */}
                {author.posts && author.posts.length > 0 && (
                    <section className="author-profile__articles">
                        <h2 className="author-profile__section-title heading-h5">Ostatnie artykuły autora</h2>
                        <div className="author-profile__posts-grid">
                            {author.posts.map((post) => (
                                <Link href={`/blog/${post.slug}`} key={post.slug} className="author-article-card">
                                    {post.image && (
                                        <div className="author-article-card__image-wrapper">
                                            <Image
                                                src={urlFor(post.image).width(600).height(400).url()}
                                                alt={post.title}
                                                fill
                                                className="author-article-card__image"
                                            />
                                        </div>
                                    )}
                                    <div className="author-article-card__content">
                                        <h3 className="author-article-card__title heading-h6">{post.title}</h3>
                                        <time className="author-article-card__date text-small-normal">
                                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }) : ""}
                                        </time>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
