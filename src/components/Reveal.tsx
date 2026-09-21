import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/utils/cn";

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  /**
   * "fade" — fade + rise (default)
   * "none" — no own transform; only toggles `is-visible` so children
   *          (e.g. .line-mask, .rule-draw) can animate.
   */
  variant?: "fade" | "none";
  threshold?: number;
  id?: string;
  style?: CSSProperties;
}

export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  variant = "fade",
  threshold,
  id,
  style,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>({ threshold });

  return (
    <Tag
      ref={ref}
      id={id}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` } as CSSProperties}
      className={cn(variant === "fade" && "reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
