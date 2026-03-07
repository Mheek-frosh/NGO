"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
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

        <div className="flex flex-col justify-center bg-white px-6 py-12 lg:px-12 lg:py-16">
          <p className="text-xs font-medium uppercase tracking-widest text-black">
            {t("heroCategory")}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[2.25rem]">
            {t("heroTitle")}
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-black sm:text-base">
            <p>{t("heroPara1")}</p>
            <p>{t("heroPara2")}</p>
          </div>
          <p className="mt-8 text-xs uppercase tracking-wide text-black/70">
            {t("photoCredit")}
          </p>
        </div>
      </div>
    </section>
  );
}
