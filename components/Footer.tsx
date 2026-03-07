"use client";

import { useLanguage } from "@/context/LanguageContext";

const mainBodies = [
  "General Assembly",
  "GA President",
  "Security Council",
  "ECOSOC",
  "International Court of Justice",
  "Secretariat",
];

const resources = [
  "Emergency information",
  "Documents",
  "Library",
  "Employment",
  "Internships",
  "Contact",
];

const keyDocs = [
  "Charter",
  "Universal Declaration of Human Rights",
  "Convention on the Rights of the Child",
  "Annual Report",
];

const newsMedia = [
  "News",
  "Press Releases",
  "Photos",
  "Web TV",
  "Video",
  "Social Media",
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-un-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 border-b border-un-blue/20 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-3">
              <img
                src="/asset/logo.svg"
                alt="Tony Foundation"
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 rounded-full bg-un-blue-pale object-contain p-1"
              />
              <span className="font-display text-lg font-bold">Tony Foundation</span>
            </a>
            <p className="text-sm text-un-blue-light">
              {t("tagline")}. {t("womenAndGender")}, {t("saveTheChild")}, {t("education")}.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-un-blue-light">
              {t("footerMainBodies")}
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/90">
              {mainBodies.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
              <li><a href="#work" className="hover:text-white">{t("saveTheChild")}</a></li>
              <li><a href="#work" className="hover:text-white">{t("education")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-un-blue-light">
              {t("footerResources")}
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/90">
              {resources.map((item) => (
                <li key={item}>
                  <a href={item === "Contact" ? "#contact" : "#"} className="hover:text-white">
                    {item === "Contact" ? t("contact") : item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-un-blue-light">
              {t("footerKeyDocs")}
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/90">
              {keyDocs.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-un-blue-light">
              {t("footerNews")}
            </h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/90">
              {newsMedia.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 pt-8">
          <div className="flex items-center gap-4">
            <img
              src="/asset/logo.svg"
              alt="Tony Foundation"
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-full bg-un-blue/20 object-contain p-1"
            />
            <span className="font-display text-lg font-bold">Tony Foundation</span>
          </div>
          <div className="flex gap-6 text-white/80" aria-label="Social media">
            <a href="#" className="hover:text-white" aria-label="Facebook">Facebook</a>
            <a href="#" className="hover:text-white" aria-label="Twitter">Twitter</a>
            <a href="#" className="hover:text-white" aria-label="YouTube">YouTube</a>
            <a href="#" className="hover:text-white" aria-label="Instagram">Instagram</a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-un-blue-light">
          <a href="#" className="hover:text-white">{t("aToZ")}</a>
          <a href="#contact" className="hover:text-white">{t("contact")}</a>
          <a href="#" className="hover:text-white">Copyright</a>
          <a href="#" className="hover:text-white">FAQ</a>
          <a href="#" className="hover:text-white">Privacy Notice</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
        </div>

        <p className="mt-6 text-sm text-un-blue-light">
          © {new Date().getFullYear()} Tony Foundation. {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
