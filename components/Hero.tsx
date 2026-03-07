"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left: hero image (1.png) - full height of content */}
        <div className="relative min-h-[400px] lg:min-h-[560px]">
          <Image
            src="/asset/1.png"
            alt="Women and Gender Equality - diverse women smiling"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: text block on white - UN style */}
        <div className="flex flex-col justify-center bg-white px-6 py-12 lg:px-12 lg:py-16">
          <p className="text-xs font-medium uppercase tracking-widest text-black">
            Women and Gender Equality
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[2.25rem]">
            Rights. Justice. Action. For ALL Women and Girls
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-black sm:text-base">
            <p>
              This International Women&apos;s Day (8 March), demand equal rights and equal justice.
              Women worldwide hold just 64% of the legal rights men do. At this pace, closing the
              gap could take 286 years. From work and pay to safety, family, property, and
              retirement, laws still disadvantage women and girls. It&apos;s time to dismantle
              discriminatory laws and harmful norms. Join our campaign, use its materials and
              follow our live event on 9 March ahead of the Commission on the Status of Women
              (9–19 March), the world&apos;s largest annual forum dedicated to gender equality
              and women&apos;s rights.
            </p>
            <p>
              The time has come to make justice a reality for women and girls everywhere.
            </p>
          </div>
          <p className="mt-8 text-xs uppercase tracking-wide text-black/70">
            Photo: Adobe Stock / Sabrina
          </p>
        </div>
      </div>
    </section>
  );
}
