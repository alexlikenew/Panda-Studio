import { getSocialReels } from '@/services/homeService';
import CommunitySlider from './CommunitySlider';

export default async function CommunityReels() {
    const reels = await getSocialReels();

    if (!reels || reels.length === 0) {
        return null;
    }

    // SEO: Generate Video Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": reels
            .filter((reel: any) => reel.videoUrl) // Only index actual videos
            .map((reel: any, index: number) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "VideoObject",
                    "name": reel.caption ? reel.caption.substring(0, 100) : "Panda Studio Reel",
                    "description": `Trening i motywacja z Panda Studio Rzeszów. Wideo autorstwa: ${reel.username}.`,
                    "thumbnailUrl": [
                        reel.thumbnail
                            ? reel.thumbnail
                            : "https://pandastudioteam.com/img/og-image.jpg"
                    ],
                    "uploadDate": reel.publishedAt,
                    "contentUrl": reel.videoUrl,
                    "interactionStatistic": {
                        "@type": "InteractionCounter",
                        "interactionType": { "@type": "WatchAction" },
                        "userInteractionCount": 0 // Optional, but structure is good
                    }
                }
            }))
    };

    return (
        <section className="community-reels">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="wrapper">
                <header className="community-reels__header">
                    <h2 className="heading-h2">PANDA COMMUNITY</h2>
                    <p className="text-large-normal community-reels__description">
                        Dołącz do nas online. Zobacz, jak trenujemy, regenerujemy i budujemy formę każdego dnia
                    </p>
                </header>
            </div>
            <CommunitySlider reels={reels} />
        </section >
    );
}
