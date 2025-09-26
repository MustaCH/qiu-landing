"use client";

import GooeyNav from "./GooeyNav";
import { useI18n } from "../lib/LanguageProvider";

export default function SiteNav() {
  const { dict, toggle, lang } = useI18n();
  const items = [
    { label: dict.nav.benefits, href: "#beneficios" },
    { label: dict.nav.services, href: "#servicios" },
    { label: dict.nav.process, href: "#proceso" },
  ];
  return (
    <div className="fixed top-0 inset-x-0 z-20 flex items-center justify-center py-4 px-6">
      <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30">
        <button
          aria-label="Toggle language"
          onClick={toggle}
          className="text-white/90 hover:text-white text-sm font-medium border border-white/25 hover:border-white/50 rounded-full px-3 py-1 transition-colors cursor-pointer"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
      <a href="#" className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30">
        <img className="w-12" src="/Isotipoblanco.svg" alt="Isotipo" />
      </a>
      <div className="flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-xl p-2">
        <GooeyNav items={items} />
      </div>
    </div>
  );
}
