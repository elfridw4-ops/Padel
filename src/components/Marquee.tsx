import { cn } from "@/utils/cn";
import { useI18n } from "@/i18n/I18nProvider";

interface MarqueeProps {
  tone?: "ink" | "clay" | "bone";
  className?: string;
}

export function Marquee({ tone = "ink", className }: MarqueeProps) {
  const { t } = useI18n();
  const items = t.marquee;

  const palette = {
    ink: "bg-ink-950 text-bone-50 border-y border-bone-50/10",
    clay: "bg-clay-500 text-bone-50",
    bone: "bg-bone-50 text-ink-950 border-y border-ink-950/10",
  }[tone];

  const dot = {
    ink: "bg-clay-500",
    clay: "bg-ink-950",
    bone: "bg-clay-500",
  }[tone];

  const row = (ariaHidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 pr-8 md:gap-12 md:pr-12">
          <span className="whitespace-nowrap font-display text-[1.75rem] leading-none tracking-[0.06em] uppercase md:text-[2.25rem]">
            {item}
          </span>
          <span className={cn("h-2 w-2 shrink-0 rotate-45", dot)} aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("group relative overflow-hidden py-5 md:py-6", palette, className)}>
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
