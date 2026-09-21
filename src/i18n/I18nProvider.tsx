import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "./translations";

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dict;
  /** BCP-47 tag used for date/number formatting. */
  locale: string;
}

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "terra-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") return stored;
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — language still works for the session */
    }
  };

  const toggle = () => setLang(lang === "fr" ? "en" : "fr");

  useEffect(() => {
    document.documentElement.lang = lang === "fr" ? "fr-FR" : "en";
    document.title = translations[lang].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translations[lang].meta.description);
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      toggle,
      t: translations[lang],
      locale: lang === "fr" ? "fr-FR" : "en-GB",
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}

/** Tiny helper for "{token}" style templates. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ""));
}
