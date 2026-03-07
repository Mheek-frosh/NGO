"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { Locale, translations } from "@/lib/translations";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const localeToLang: Record<Locale, string> = {
  en: "en",
  ar: "ar",
  zh: "zh",
  fr: "fr",
  de: "de",
  ru: "ru",
  es: "es",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = localeToLang[locale];
    }
  }, [locale]);

  const t = useCallback(
    (key: string): string => {
      const dict = translations[locale];
      return dict[key] ?? translations.en[key] ?? key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
