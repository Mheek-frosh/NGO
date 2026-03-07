"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function DidYouKnow() {
  const { t } = useLanguage();
  const facts = [
    {
      text: "Although nuclear weapons have only been used twice in warfare, about 12,500 remain today.",
      link: "Global Issues: Disarmament",
    },
    {
      text: "More than two-thirds of the world's children live in countries affected by armed conflict.",
      link: "Global Issues: Children",
    },
    {
      text: "In 2026, 239 million people need urgent humanitarian aid due to escalating crises.",
      link: "Global Issues: Crisis and Emergency Response",
    },
    {
      text: "The United States, China and France were the top three nuclear power producers in 2024.",
      link: "Global Issues: Atomic Energy",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-un-navy">{t("didYouKnowTitle")}</h2>
        <p className="mt-2 max-w-3xl text-slate-700">
          As the world&apos;s only truly universal global organization, Tony Foundation has become the foremost forum to address issues that transcend national boundaries and cannot be resolved by any one country acting alone.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700">{f.text}</p>
              <p className="mt-4">
                <a href="#work" className="text-sm font-semibold text-un-blue hover:underline">
                  Find out more in
                </a>
              </p>
              <a href="#work" className="mt-1 block text-sm font-semibold text-un-blue hover:underline">
                {f.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
