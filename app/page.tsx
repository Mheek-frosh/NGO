import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
// import FeaturedCauses from "@/components/FeaturedCauses";
// import Impact from "@/components/Impact";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      {/* We will build these previews next */}
      {/* <FeaturedCauses /> */}
      {/* <Impact /> */}
      <CTA />
    </>
  );
}
