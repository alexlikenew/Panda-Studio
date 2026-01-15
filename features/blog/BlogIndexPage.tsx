import { Post } from "./types";
import BlogCard from "./components/BlogCard";

interface BlogIndexPageProps {
    posts: Post[];
}

export default function BlogIndexPage({ posts }: BlogIndexPageProps) {
    return (
        <main className="blog-listing">
            <div className="wrapper">
                <div className="blog-listing__header">
                    <h1 className="blog-listing__title">
                        Nasze <span>Artykuły</span>
                    </h1>
                    <p className="blog-listing__subtitle">
                        Wiedza, porady i inspiracje ze świata treningu, masażu i zdrowego stylu życia.
                    </p>
                </div>

                <div className="blog-listing__grid">
                    {posts.map((post) => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </main>
    );
}
