"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  "العربية",
  "中文",
  "English",
  "Français",
  "Deutsch",
  "Kreyòl",
  "Bahasa Indonesia",
  "Italiano",
  "Polski",
  "Русский",
  "Español",
];

const mainLinks = [
  { href: "#about", label: "About Us", sub: true },
  { href: "#work", label: "Our Work", sub: true },
  { href: "#news", label: "Events and News" },
  { href: "#involved", label: "Get Involved" },
  { href: "#pulse", label: "The Tony Foundation Pulse" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-un-navy shadow-lg">
      {/* Skip to main content - UN style */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-un-blue focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      {/* Top bar: Languages LEFT, Welcome RIGHT - exact UN layout */}
      <div className="border-b border-un-blue/30 bg-un-navy">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm lg:px-8">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-white/90 hover:text-white"
              aria-expanded={langOpen}
              aria-haspopup="true"
            >
              <span>Toggle navigation</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute left-0 top-full z-50 mt-1 min-w-[180px] list-none rounded border border-un-blue/30 bg-un-navy py-2 shadow-xl"
                >
                  {languages.map((lang) => (
                    <li key={lang}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-white/90 hover:bg-un-blue/30 hover:text-white"
                      >
                        {lang}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <span className="text-un-blue-light">Welcome to Tony Foundation</span>
        </div>
      </div>

      {/* Search the United Nations - UN style block */}
      <div className="border-b border-un-blue/20 bg-un-navy/98">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <div className="flex flex-1 flex-wrap items-center gap-4">
            <h2 className="text-lg font-semibold text-white">Search Tony Foundation</h2>
            <form className="flex min-w-0 flex-1 gap-2 sm:min-w-[280px]" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="site-search" className="sr-only">Search</label>
              <input
                id="site-search"
                type="search"
                placeholder="Search..."
                className="min-w-0 flex-1 rounded border border-un-blue/40 bg-white px-3 py-2 text-un-navy placeholder:text-slate-400 focus:border-un-blue focus:outline-none"
              />
              <button type="submit" className="rounded bg-un-blue px-4 py-2 text-sm font-medium text-white hover:bg-un-blue-light">
                Submit Search
              </button>
            </form>
          </div>
          <a href="#" className="text-sm text-un-blue-light hover:text-white">A-Z Site Index</a>
        </div>
      </div>

      {/* Live now - UN has this */}
      <div className="border-b border-un-blue/20 bg-un-navy">
        <div className="mx-auto max-w-7xl px-4 py-2 lg:px-8">
          <span className="text-sm text-un-blue-light">Live now</span>
        </div>
      </div>

      {/* Logo + tagline - UN style */}
      <div className="border-b border-un-blue/20 bg-un-navy">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <a href="#hero" className="font-display text-2xl font-bold text-white sm:text-3xl">
              Tony Foundation
            </a>
            <p className="text-sm text-un-blue-light sm:text-base">
              Peace, dignity and equality on a healthy planet
            </p>
          </div>
        </div>
      </div>

      {/* Main navigation - UN style */}
      <nav className="border-t border-un-blue/20 bg-un-navy" aria-label="Main">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ul className="hidden items-center gap-0 md:flex">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-white hover:bg-un-blue/20 transition"
                >
                  {link.label}
                  {link.sub && <span className="ml-0.5 text-un-blue-light">»</span>}
                </a>
              </li>
            ))}
            <li className="ml-auto">
              <a
                href="#donate"
                className="block bg-un-blue px-5 py-3 text-sm font-semibold text-white hover:bg-un-blue-light transition"
              >
                Donate
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-between py-3 md:hidden">
            <span className="text-sm text-white/80">Menu</span>
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
              className="overflow-hidden border-t border-un-blue/20 bg-slate-850 md:hidden"
            >
              <ul className="flex flex-col py-2">
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-white hover:bg-un-blue/20"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#donate"
                    onClick={() => setOpen(false)}
                    className="mx-4 mt-2 block bg-un-blue py-3 text-center font-semibold text-white"
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
