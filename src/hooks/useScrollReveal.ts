"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Returns a ref and a boolean `inView`.
 * Once the element enters the viewport it stays "visible".
 */
export function useScrollReveal(options?: { threshold?: number; margin?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: (options?.margin ?? "-60px") as `${number}px`,
  });
  return { ref, inView };
}
