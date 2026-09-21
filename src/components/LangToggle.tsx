import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/utils/cn";

interface LangToggleProps {
  /** "dark" when rendered over imagery / dark backgrounds */
  variant?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
}

export function LangToggle({ variant = "dark", size = "sm", className }: LangToggleProps) {
  const { lang, setLang } = useI18n();

  const base =
    variant === "dark"
      ? "border-bone-50/25 text-bone-50"
      : "border-ink-950/20 text-ink-950";
  const inactive =
    variant === "dark" ? "text-bone-50/60 hover:text-bone-50" : "text-ink-500 hover:text-ink-950";
  const active =
    variant === "dark" ? "bg-bone-50 text-ink-950" : "bg-ink-950 text-bone-50";

  return (
    <div
      role="group"
      aria-label="Language / Langue"
      className={cn(
        "inline-flex items-center rounded-full border p-0.5 text-[0.68rem] font-bold uppercase tracking-[0.14em]",
        base,
        size === "md" && "text-[0.74rem]",
        className,
      )}
    >
      {(["en", "fr"] as const).map((code, i) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          lang={code === "fr" ? "fr" : "en"}
          className={cn(
            "rounded-full px-3 py-1.5 transition-colors duration-300",
            size === "md" && "px-4 py-2",
            i === 0 && "mr-0.5",
            lang === code ? active : inactive,
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
