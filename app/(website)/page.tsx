import DialogOne from "@/components/sections/DialogOne";
import Hero from "@/components/sections/Hero";
import TransformLife from "@/components/sections/TransformLife";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import LatestNews from "@/features/blog/components/LatestNews";
import Locations from "@/features/home/components/Locations";
import CommunityReels from "@/features/home/components/CommunityReels";
import BooksyCTA from "@/features/home/components/BooksyCTA";
import ClassesCategorySection from "@/features/home/components/ClassesCategorySection";
import NutritionTipsSection from "@/features/home/components/NutritionTipsSection";
import ImpactStatsSection from "@/features/home/components/ImpactStatsSection";
import ReviewsSection from "@/features/home/components/ReviewsSection";
import ServicesAccordionSection from "@/features/home/components/ServicesAccordionSection";
import KnowledgeBase from "@/features/home/components/KnowledgeBase";

export default function Home() {
  return (
    <main>
      <Hero />
      <TransformLife />
      <ServicesAccordionSection />
      {/* <Services /> */}
      <ClassesCategorySection />
      <CommunityReels />
      {/* <NutritionTipsSection /> */}
      <ImpactStatsSection />
      <BooksyCTA />
      <ReviewsSection />

      <LatestNews />
      <Locations />
      {/* <Testimonials /> */}
      {/* <DialogOne /> */}
      <KnowledgeBase />
    </main>
  );
}