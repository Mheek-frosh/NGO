import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import FeaturedCauses from "@/components/FeaturedCauses";
import Stats from "@/components/Stats";
import StoryVideo from "@/components/StoryVideo";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors />
      <FeaturedCauses />
      <Stats />
      <StoryVideo />
      <Testimonials />
      <CTA />
    </>
  );
}
