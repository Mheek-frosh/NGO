"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Donate() {
  const { t } = useLanguage();

  return (
    <section id="donate" className="border-b border-slate-200 bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">{t("donateTitle")}</h2>
        <p className="mt-4 text-slate-700">{t("donateSub")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[25, 50, 100, 250].map((amount) => (
            <button
              key={amount}
              type="button"
              className="rounded border-2 border-un-blue bg-white px-6 py-3 font-semibold text-un-navy hover:bg-un-blue-pale"
            >
              ${amount}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <input
            type="number"
            placeholder={t("otherAmount")}
            className="w-full max-w-xs mx-auto rounded border-2 border-slate-200 px-4 py-3 text-center focus:border-un-blue focus:outline-none"
          />
        </div>
        <a
          href="#donate"
          className="mt-8 inline-block bg-un-blue px-10 py-4 font-semibold text-white hover:bg-un-blue-light"
        >
          {t("donateNow")}
        </a>
      </div>
    </section>
  );
}
