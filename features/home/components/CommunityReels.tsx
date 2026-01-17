import { getSocialReels } from '../services/homeService';
import CommunitySlider from './CommunitySlider';

export default async function CommunityReels() {
    const reels = await getSocialReels();

    if (!reels || reels.length === 0) {
        return null;
    }

    return (
        <section className="community-reels">
            <div className="wrapper">
                <header className="community-reels__header">
                    <h2 className="heading-h2">FS8 COMMUNITY</h2>
                    <p className="text-large-normal community-reels__description">
                        Zobacz, jak nasi klienci osiągają swoje cele fitness i dzielą się swoimi sukcesami.
                    </p>
                </header>
            </div>
            <CommunitySlider reels={reels} />
        </section >
    );
}
