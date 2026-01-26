import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAuthorBySlug } from "@/features/author/services/authorService";
import AuthorProfile from "@/features/author/components/AuthorProfile";
import { urlFor } from "@/sanity/lib/image";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const author = await getAuthorBySlug(slug);

    if (!author) {
        return {
            title: "Autor nie znaleziony",
        };
    }

    // Extract plain text from bio for description (simple approximation)
    const bioText = author.bio
        ? author.bio
            .map((block: any) =>
                block.children ? block.children.map((child: any) => child.text).join("") : ""
            )
            .join(" ")
            .slice(0, 160) + "..."
        : `Profil specjalisty ${author.name} w Panda Studio.`;

    return {
        title: `${author.name} - Specjalista Panda Studio`,
        description: bioText,
        openGraph: {
            title: `${author.name} - Specjalista Panda Studio`,
            description: bioText,
            images: author.image ? [urlFor(author.image).width(1200).height(630).url()] : [],
        },
    };
}

export default async function AuthorPage({ params }: Props) {
    const { slug } = await params;
    const author = await getAuthorBySlug(slug);

    if (!author) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: author.name,
        image: author.image ? urlFor(author.image).url() : undefined,
        jobTitle: "Ekspert Panda Studio",
        worksFor: {
            "@type": "Organization",
            name: "Panda Studio",
        },
        url: `https://pandastudioteam.com/autor/${author.slug}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="wrapper">
                <AuthorProfile author={author} />
            </div>
        </>
    );
}
