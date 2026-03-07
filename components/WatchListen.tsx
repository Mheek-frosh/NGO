"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function WatchListen() {
  const { t } = useLanguage();
  const items = [
    {
      title: "Indigenous teen codes new opportunities",
      excerpt: "Sixteen-year-old Arleidis walked hours to study software programming, determined to overcome barriers. She now uses digital tools to promote and sell their work, strengthening her community livelihood.",
      image: "https://placehold.co/600x340/002B49/ffffff?text=Video+1",
    },
    {
      title: "First Global Citizenship Education prize",
      excerpt: "In 2025, we awarded our inaugural Global Citizenship Education Prize to initiatives in Tanzania and Ecuador, recognizing outstanding global education impact.",
      image: "https://placehold.co/600x340/002B49/ffffff?text=Video+2",
    },
    {
      title: "Youth voices transform safe space",
      excerpt: "In Benin, youth center murals showcase creativity while promoting safe spaces and essential support.",
      image: "https://placehold.co/600x340/002B49/ffffff?text=Video+3",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">{t("watchTitle")}</h2>
        <p className="mt-2 text-slate-700">
          Video and audio from across Tony Foundation and our worldwide family of agencies, funds, and programmes.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <article key={i} className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
              <div className="aspect-video overflow-hidden bg-un-navy">
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-un-navy">
                  <a href="#news" className="hover:text-un-blue">{item.title}</a>
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8">
          <a href="#news" className="font-semibold text-un-blue hover:underline">
            More live and on-demand videos
          </a>
        </p>
      </div>
    </section>
  );
}
