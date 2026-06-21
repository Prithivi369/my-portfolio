"use client";

import { motion, type MotionProps } from "framer-motion";
import { useEffect, useState } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "footer";
}

export function Section({ children, className = "", as = "section" }: SectionProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  const Component = motion[as] as React.ComponentType<
    MotionProps & React.HTMLAttributes<HTMLElement>
  >;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Component>
  );
}
