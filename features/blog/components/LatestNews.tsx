import { getLatestPosts } from "../services/blogService";
import BlogCard from "./BlogCard";

export default async function LatestNews() {
    const posts = await getLatestPosts(3);

    return (
        <section className="latest-news">
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
