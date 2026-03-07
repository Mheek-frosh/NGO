"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function InPictures() {
  const { t } = useLanguage();
  const stories = [
    {
      title: "Their teacher knows their journey",
      body: "For thousands of students in Uganda's Karamoja region, Teacher Evaline Akello is more than a teacher, she's proof that their dreams are possible. Evaline once sat where they sit now. Today, her students see in her story a powerful message: with food, education and determination, their futures can be bigger than the challenges they face.",
      image: "https://placehold.co/800x500/002B49/ffffff?text=Teacher+Evaline",
      credit: "Photo: Placeholder",
    },
    {
      title: "Gardens of hope",
      body: "In a displacement site in Dédougou, Burkina Faso, families forced to flee violence are transforming small plots of land beside their tents into gardens of resilience. By growing vegetables they add fresh food to scarce meals, share with neighbors and regain a sense of dignity and purpose.",
      image: "https://placehold.co/800x500/002B49/ffffff?text=Gardens",
      credit: "Photo: Placeholder",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">
          {t("picturesTitle")}
        </h2>
        <p className="mt-2 text-slate-700">
          Images from across Tony Foundation and our worldwide family of agencies, funds, and programmes.
        </p>
        <div className="mt-10 space-y-12">
          {stories.map((s, i) => (
            <article key={i} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video overflow-hidden bg-un-navy lg:aspect-[2/1]">
                <img src={s.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-un-navy">{s.title}</h3>
                <p className="mt-4 text-slate-700">{s.body}</p>
                <p className="mt-4 text-xs text-slate-500">{s.credit}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8">
          <a href="#news" className="font-semibold text-un-blue hover:underline">
            See more photos
          </a>
        </p>
      </div>
    </section>
  );
}
