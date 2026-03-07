"use client";

import { useLanguage } from "@/context/LanguageContext";

const pillars = [
  { key: "saveTheGirlChild", bodyKey: "saveTheGirlChildBody", image: "https://placehold.co/800x500/002B49/ffffff?text=Save+Girl+Child" },
  { key: "educationForAfrica", bodyKey: "educationForAfricaBody", image: "https://placehold.co/800x500/002B49/ffffff?text=Education+Africa" },
  { key: "innovation", bodyKey: "innovationBody", image: "https://placehold.co/800x500/002B49/ffffff?text=Innovation" },
  { key: "orphansTechTraining", bodyKey: "orphansTechTrainingBody", image: "https://placehold.co/800x500/002B49/ffffff?text=Orphans+Tech" },
  { key: "womenAndGender", bodyKey: "womenAndGenderBody", image: "https://placehold.co/800x500/002B49/ffffff?text=Women+Equality" },
];

export default function WhatWeDo() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-b border-slate-200 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">{t("whatWeDoTitle")}</h2>
        <p className="mt-4 max-w-3xl text-slate-700">{t("whatWeDoIntro")}</p>
        <ul className="mt-4 list-disc pl-6 text-slate-700">
          <li>{t("saveTheGirlChild")}</li>
          <li>{t("educationForAfrica")}</li>
          <li>{t("innovation")}</li>
          <li>{t("orphansTechTraining")}</li>
          <li>{t("womenAndGender")}</li>
        </ul>

        <div className="mt-14 space-y-14">
          {pillars.map((p, i) => (
            <div
              key={p.key}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-video overflow-hidden rounded bg-un-navy">
                  <img
                    src={p.image}
                    alt={t(p.key)}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-xl font-bold text-un-navy">{t(p.key)}</h3>
                <p className="mt-4 text-slate-700 leading-relaxed">{t(p.bodyKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
