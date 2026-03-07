"use client";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-un-navy">
      <div className="relative">
        <img
          src="https://placehold.co/1920x700/1e3a5f/4DA6C8?text=Women+and+Gender+Equality"
          alt="Women and Gender Equality"
          className="h-auto w-full object-cover"
        />
        <div className="absolute inset-0 bg-un-navy/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-un-blue-light">
                Women and Gender Equality
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                Rights. Justice. Action. For ALL Women and Girls
              </h1>
              <p className="mt-6 text-lg text-white/95">
                This International Women&apos;s Day (8 March), demand equal rights and equal justice.
                Women worldwide hold just 64% of the legal rights men do. At this pace, closing
                the gap could take 286 years. From work and pay to safety, family, property, and
                retirement, laws still disadvantage women and girls. It&apos;s time to dismantle
                discriminatory laws and harmful norms.
              </p>
              <p className="mt-4 text-white/90">
                The time has come to make justice a reality for women and girls everywhere.
              </p>
              <p className="mt-6 text-xs text-white/70">Photo: Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
