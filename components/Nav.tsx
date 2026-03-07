"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { type Locale, languageLabels } from "@/lib/translations";

const locales: Locale[] = ["ar", "zh", "en", "fr", "de", "ru", "es"];

const mainLinkKeys = ["aboutUs", "ourWork", "eventsAndNews", "getInvolved", "pulse"] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-un-blue focus:px-4 focus:py-2 focus:text-white"
      >
        {t("skipToContent")}
      </a>

      {/* Mobile: compact bar with expand arrow - visible only when collapsed */}
      <div className={`flex items-center justify-between bg-nav-dark px-4 py-3 md:hidden ${!collapsed ? "hidden" : ""}`}>
        <a href="#hero" className="flex items-center gap-2" onClick={() => setCollapsed(true)}>
          <img src="/asset/logo.svg" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
          <span className="font-display font-bold text-white">Tony Foundation</span>
        </a>
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-10 w-10 items-center justify-center rounded text-white hover:bg-white/10"
          aria-expanded={!collapsed}
          aria-label={collapsed ? "Expand menu" : "Collapse menu"}
        >
          <motion.span
            animate={{ rotate: collapsed ? 0 : 180 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.span>
        </button>
      </div>

      {/* Full header - hidden on mobile when collapsed, visible on desktop */}
      <div className={`md:block ${collapsed ? "hidden" : "block"}`}>
      <div className="bg-un-top-bar">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              className="flex h-8 w-8 items-center justify-center rounded text-un-navy hover:bg-un-blue/20 md:hidden"
              aria-label="Collapse menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <a href="#hero" className="flex items-center gap-2 text-un-navy hover:opacity-90">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>{t("welcome")}</span>
          </a>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-3">
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => setLocale(loc)}
                className={`text-un-blue hover:underline ${locale === loc ? "font-semibold" : ""}`}
              >
                {languageLabels[loc]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <a href="#hero" className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-un-blue-pale">
              <img
                src="/asset/logo.svg"
                alt="Tony Foundation"
                width={56}
                height={56}
                className="h-full w-full object-contain p-1"
              />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-black sm:text-2xl">
                Tony Foundation
              </h1>
              <p className="text-sm font-normal text-black/90">{t("tagline")}</p>
            </div>
          </a>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="rounded border-2 border-accent-red px-4 py-2 text-sm font-medium text-accent-red hover:bg-accent-red hover:text-white transition"
            >
              {t("webTV")}
            </a>
            <form className="flex items-center gap-0 rounded border border-slate-300 bg-white" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="site-search" className="sr-only">{t("search")}</label>
              <input
                id="site-search"
                type="search"
                placeholder={t("search") + "..."}
                className="w-40 border-0 px-3 py-2 text-sm focus:ring-0 sm:w-56"
              />
              <button type="submit" className="rounded-r border-l border-slate-300 bg-slate-100 p-2 text-slate-600 hover:bg-slate-200" aria-label={t("search")}>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            <a href="#" className="text-sm font-medium text-un-blue hover:underline">
              {t("aToZ")}
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-nav-dark" aria-label="Main">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ul className="hidden items-center gap-0 md:flex">
            <li>
              <a href="#about" className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                {t("aboutUs")}
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#work" className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                {t("ourWork")}
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#news" className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                {t("eventsAndNews")}
              </a>
            </li>
            <li>
              <a href="#involved" className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                {t("getInvolved")}
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#pulse" className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                {t("pulse")}
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
            <li className="ml-auto">
              <a href="#involved" className="block bg-un-blue px-5 py-3 text-sm font-semibold text-white hover:bg-un-blue-light transition">
                {t("getInvolved")}
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-between py-3 md:hidden">
            <span className="text-sm text-white/90">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-6 bg-white"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-6 bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-6 bg-white"
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 bg-nav-dark md:hidden"
            >
              <ul className="flex flex-col py-2">
                {mainLinkKeys.map((key) => (
                  <li key={key}>
                    <a
                      href={`#${key === "aboutUs" ? "about" : key === "ourWork" ? "work" : key === "eventsAndNews" ? "news" : key === "getInvolved" ? "involved" : "pulse"}`}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-white hover:bg-white/10"
                    >
                      {t(key)}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#involved"
                    onClick={() => setOpen(false)}
                    className="mx-4 mt-2 block bg-un-blue py-3 text-center font-semibold text-white"
                  >
                    {t("getInvolved")}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      </div>
    </header>
  );
}
