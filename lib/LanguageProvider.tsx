"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import locales from "./locales.json";

type Lang = "es" | "en";

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  dict: typeof locales["es"];
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // load persisted language
  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "es" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  const toggle = () => setLang(lang === "es" ? "en" : "es");

  const dict = useMemo(() => locales[lang], [lang]);

  const value: I18nContextValue = { lang, setLang, toggle, dict };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
