"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionReveal({ children, delay = 0, className }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" as `${number}px` });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.34, 1, 0.64, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
