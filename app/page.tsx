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
      <Hero />
      <LiveNews />
      <SDGSection />
      <MoreFrom />
      <WhatWeDo />
      <Structure />
      <LearnMore />
      <DidYouKnow />
      <WatchListen />
      <InPictures />
      <GetInvolved />
      <Contact />
    </>
  );
}
