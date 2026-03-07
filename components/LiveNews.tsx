"use client";

import { useLanguage } from "@/context/LanguageContext";

const items = [
  { titleKey: "news1Title", excerptKey: "news1Excerpt", image: "https://placehold.co/800x450/002B49/ffffff?text=Save+Girl+Child" },
  { titleKey: "news2Title", excerptKey: "news2Excerpt", image: "https://placehold.co/800x450/002B49/ffffff?text=Education+Africa" },
  { titleKey: "news3Title", excerptKey: "news3Excerpt", image: "https://placehold.co/800x450/002B49/ffffff?text=Orphans+Tech" },
];

export default function LiveNews() {
  const { t } = useLanguage();

  return (
    <section id="pulse" className="border-b border-slate-200 bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <article key={i} className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video w-full overflow-hidden bg-un-navy">
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-un-navy">
                  <a href="#news" className="hover:text-un-blue">{t(item.titleKey)}</a>
                </h3>
                <p className="mt-2 text-sm text-slate-700">{t(item.excerptKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
