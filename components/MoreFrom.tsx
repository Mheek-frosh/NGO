"use client";

import { useLanguage } from "@/context/LanguageContext";

const stories = [
  { category: "womenAndGender", title: "saveTheGirlChild", excerpt: "saveTheGirlChildBody", image: "https://placehold.co/600x400/002B49/ffffff?text=Save+Girl+Child" },
  { category: "educationForAfrica", title: "educationForAfrica", excerpt: "educationForAfricaBody", image: "https://placehold.co/600x400/002B49/ffffff?text=Education+Africa" },
  { category: "innovation", title: "innovation", excerpt: "innovationBody", image: "https://placehold.co/600x400/002B49/ffffff?text=Innovation" },
  { category: "orphansTechTraining", title: "orphansTechTraining", excerpt: "orphansTechTrainingBody", image: "https://placehold.co/600x400/002B49/ffffff?text=Orphans+Tech" },
  { category: "womenAndGender", title: "heroTitle", excerpt: "heroPara2", image: "https://placehold.co/600x400/002B49/ffffff?text=Women+Rights" },
  { category: "innovation", title: "innovation", excerpt: "innovationBody", image: "https://placehold.co/600x400/002B49/ffffff?text=Tech+Hubs" },
];

export default function MoreFrom() {
  const { t } = useLanguage();

  return (
    <section id="news" className="border-b border-slate-200 bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">{t("moreFromTitle")}</h2>
        <p className="mt-2 text-slate-700">{t("moreFromSub")}</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <article key={i} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden bg-un-navy">
                <img src={s.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-un-blue">{t(s.category)}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-un-navy">
                  <a href="#news" className="hover:text-un-blue">{t(s.title)}</a>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-600">{t(s.excerpt)}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8">
          <a href="#news" className="font-semibold text-un-blue hover:underline">
            {t("moreFromTitle")}
          </a>
        </p>
      </div>
    </section>
  );
}
