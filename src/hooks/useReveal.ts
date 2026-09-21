import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  /** Reveal only once (default) or toggle every time it enters/leaves. */
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Observes an element and flips `visible` when it enters the viewport.
 * Falls back to visible when IntersectionObserver isn't available.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  once = true,
  threshold = 0.08,
  rootMargin = "0px 0px -4% 0px",
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, visible };
}
