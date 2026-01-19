import DialogOne from "@/components/sections/DialogOne";
import Hero from "@/components/sections/Hero";
import TransformLife from "@/components/sections/TransformLife";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import LatestNews from "@/features/blog/components/LatestNews";
import Locations from "@/components/sections/home/Locations";
import CommunityReels from "@/components/sections/home/CommunityReels";
import BooksyCTA from "@/components/sections/home/BooksyCTA";
import ClassesCategorySection from "@/components/sections/home/ClassesCategorySection";
import NutritionTipsSection from "@/components/sections/home/NutritionTipsSection";
import ImpactStatsSection from "@/components/sections/home/ImpactStatsSection";
import ReviewsSection from "@/components/sections/home/ReviewsSection";
import ServicesAccordionSection from "@/components/sections/home/ServicesAccordionSection";
import KnowledgeBase from "@/features/dictionary/components/KnowledgeBase";
import { getSeoSection } from "@/features/seo-content/services/seoService";
import SeoContentBlock from "@/features/seo-content/components/SeoContentBlock";

export default async function Home() {
  const seoData = await getSeoSection("home-page-seo");

  return (
    <main>
      <Hero />
      <TransformLife />
      <ServicesAccordionSection />
      <ClassesCategorySection />
      <CommunityReels />
      <ImpactStatsSection />
      <BooksyCTA />
      <ReviewsSection />
      <LatestNews />
      <Locations />
      <KnowledgeBase />
      <SeoContentBlock data={seoData} />
      {/* <DialogOne /> */}
    </main >
  );
}