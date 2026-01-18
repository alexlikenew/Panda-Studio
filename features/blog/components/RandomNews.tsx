import { getRandomBlogPosts } from "../services/blogService";
import BlogCard from "./BlogCard";

export default async function RandomNews() {
    const posts = await getRandomBlogPosts(3);

    // Safety check just in case
    if (!posts || posts.length === 0) {
        return null;
    }

    return (
        <section className="random-news">
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
