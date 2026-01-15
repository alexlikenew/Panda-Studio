import DialogOne from "@/components/sections/DialogOne";
import Hero from "@/components/sections/Hero";
import TransformLife from "@/components/sections/TransformLife";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <DialogOne />
      <Hero />
      <TransformLife />
      <Services />
      <Testimonials />
    </main>
  );
}