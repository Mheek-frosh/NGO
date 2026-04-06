import Hero from "@/components/Hero";
import LiveNews from "@/components/LiveNews";
import SDGSection from "@/components/SDGSection";
import MoreFrom from "@/components/MoreFrom";
import WhatWeDo from "@/components/WhatWeDo";
import Structure from "@/components/Structure";
import LearnMore from "@/components/LearnMore";
import DidYouKnow from "@/components/DidYouKnow";
import WatchListen from "@/components/WatchListen";
import InPictures from "@/components/InPictures";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Primary Hero Section - Introduces the NGO's mission */}
      <Hero />
      
      {/* Live News & Updates Marquee/Section */}
      <LiveNews />
      
      {/* Sustainable Development Goals Section */}
      <SDGSection />
      
      {/* Secondary Content - More updates or campaigns */}
      <MoreFrom />
      
      {/* Core Activities and Programs */}
      <WhatWeDo />
      
      {/* Organizational Structure and Leadership */}
      <Structure />
      
      {/* Educational Resources & Deep Dives */}
      <LearnMore />
      
      {/* Quick Facts and Impact Metrics */}
      <DidYouKnow />
      
      {/* Multimedia Content: Videos and Podcasts */}
      <WatchListen />
      
      {/* Visual Impact: Image Galleries */}
      <InPictures />
      
      {/* Call to Action: Volunteering & Donations */}
      <GetInvolved />
      
      {/* Footer / Connect With Us */}
      <Contact />
    </>
  );
}
