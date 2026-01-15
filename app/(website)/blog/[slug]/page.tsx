import { getPost } from "@/features/blog/services/blogService";
import BlogPostPage from "@/features/blog/BlogPostPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) {
        return {
            title: "Artykuł nie znaleziony - FIT Panda Studio",
        };
    }
    return {
        title: `${post.title} - Blog Panda Studio`,
        description: `Przeczytaj artykuł ${post.title} na blogu FIT Panda Studio.`
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return <BlogPostPage post={post} />;
}