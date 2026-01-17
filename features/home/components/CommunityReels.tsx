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
