import { getPosts } from "@/features/blog/services/blogService";
import BlogIndexPage from "@/features/blog/BlogIndexPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - FIT Panda Studio",
    description: "Artykuły o treningu, zdrowiu i stylu życia.",
};

export default async function BlogPage() {
    const posts = await getPosts();
    return <BlogIndexPage posts={posts} />;
}