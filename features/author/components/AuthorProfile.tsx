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
            <div className="author-profile__header">
                {author.image && (
                    <div className="author-profile__image-wrapper">
                        <Image
                            src={urlFor(author.image).url()}
                            alt={author.name}
                            width={300}
                            height={300}
                            className="author-profile__image"
                            priority
                        />
                    </div>
                )}
                <div className="author-profile__info">
                    <h1 className="heading-h2 author-profile__name">{author.name}</h1>
                    {author.bio && (
                        <div className="author-profile__bio text-medium-normal">
                            <PortableText value={author.bio} />
                        </div>
                    )}
                </div>
            </div>

            {author.posts && author.posts.length > 0 && (
                <div className="author-profile__posts">
                    <h2 className="heading-h3 author-profile__posts-title">Ostatnie artykuły</h2>
                    <div className="author-profile__posts-grid">
                        {author.posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="author-profile__post-card">
                                {post.image && (
                                    <div className="author-profile__post-image">
                                        <Image
                                            src={urlFor(post.image).width(400).height(250).url()}
                                            alt={post.title}
                                            width={400}
                                            height={250}
                                        />
                                    </div>
                                )}
                                <div className="author-profile__post-content">
                                    <h3 className="heading-h4 author-profile__post-title">{post.title}</h3>
                                    <span className="text-small-normal author-profile__post-date">
                                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }) : ""}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
