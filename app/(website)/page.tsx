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

export default function Home() {
  return (
    <main>
      {/* <DialogOne /> */}
      {/* <Hero /> */}
      <TransformLife />
      <Services />
      <Testimonials />
      <CommunityReels />
      <BooksyCTA />
      <LatestNews />
      <Locations />
      <ClassesCategorySection />
      <NutritionTipsSection />
      <ImpactStatsSection />
    </main>
  );
}