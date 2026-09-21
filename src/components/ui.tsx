import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/Reveal";

/* ------------------------------------------------------------------ */
/* Button                                                              */
/* ------------------------------------------------------------------ */

type Tone = "bone" | "ink" | "clay" | "ghost-light" | "ghost-dark";

const tones: Record<Tone, string> = {
  bone: "bg-bone-50 text-ink-950 hover:text-bone-50 [--fill:var(--color-clay-500)]",
  ink: "bg-ink-950 text-bone-50 hover:text-bone-50 [--fill:var(--color-clay-500)]",
  clay: "bg-clay-500 text-bone-50 hover:text-ink-950 [--fill:var(--color-bone-50)]",
  "ghost-light":
    "border border-bone-50/40 text-bone-50 hover:border-bone-50 hover:text-ink-950 [--fill:var(--color-bone-50)]",
  "ghost-dark":
    "border border-ink-950/30 text-ink-950 hover:border-ink-950 hover:text-bone-50 [--fill:var(--color-ink-950)]",
};

const base =
  "btn-fill group/btn inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-500 select-none";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: Tone;
  children: ReactNode;
}
export function Button({ tone = "bone", className, children, ...rest }: ButtonProps) {
  return (
    <button className={cn(base, tones[tone], className)} {...rest}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  tone?: Tone;
  children: ReactNode;
}
export function ButtonLink({ tone = "bone", className, children, ...rest }: ButtonLinkProps) {
  return (
    <a className={cn(base, tones[tone], className)} {...rest}>
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Eyebrow                                                             */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em]",
        className,
      )}
    >
      {index && <span className="font-display text-base tracking-[0.08em] opacity-70">{index}</span>}
      <span className="h-px w-8 bg-current opacity-40" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  lines: string[];
  className?: string;
  align?: "left" | "center";
  size?: "lg" | "xl";
  accentLast?: boolean;
}

export function SectionHeading({
  index,
  eyebrow,
  lines,
  className,
  align = "left",
  size = "xl",
  accentLast = false,
}: SectionHeadingProps) {
  return (
    <Reveal variant="none" className={cn(align === "center" && "text-center", className)}>
      <Eyebrow index={index} className={cn("reveal-child", align === "center" && "justify-center")}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "display-tight mt-6 font-display uppercase",
          size === "xl"
            ? "text-[clamp(3.3rem,9vw,8.5rem)]"
            : "text-[clamp(2.4rem,6.5vw,6rem)]",
        )}
      >
        {lines.map((line, i) => (
          <span
            key={line}
            className="line-mask"
            style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
          >
            <span className={cn(accentLast && i === lines.length - 1 && "text-clay-500")}>{line}</span>
          </span>
        ))}
      </h2>
    </Reveal>
  );
}
