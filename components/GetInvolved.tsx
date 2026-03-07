"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function GetInvolved() {
  const { t } = useLanguage();

  return (
    <section id="involved" className="border-b border-slate-200 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">{t("getInvolvedTitle")}</h2>
        <p className="mt-4 max-w-2xl text-slate-700">{t("getInvolvedDesc")}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-block rounded bg-un-blue px-6 py-3 font-semibold text-white hover:bg-un-blue-light"
          >
            {t("partnerWithUs")}
          </a>
          <a
            href="#contact"
            className="inline-block rounded border-2 border-un-navy px-6 py-3 font-semibold text-un-navy hover:bg-un-navy hover:text-white"
          >
            {t("contact")}
          </a>
        </div>
      </div>
    </section>
  );
}
