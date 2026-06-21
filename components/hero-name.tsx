"use client";

import { useEffect, useState } from "react";
import { TextScramble } from "@/components/text-scramble";

export function HeroName() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  return (
    <h1 className="mb-6 font-mono text-[28px] font-medium uppercase leading-none tracking-[0.12em] whitespace-nowrap sm:text-[40px] md:text-[48px]">
      {reduceMotion ? (
        <span>Prithivi Alamyan</span>
      ) : (
        <TextScramble
          as="span"
          duration={0.95}
          speed={0.06}
          className="inline-block"
          style={{
            fontVariantNumeric: "tabular-nums",
            fontFeatureSettings: "'tnum'",
          }}
        >
          Prithivi Alamyan
        </TextScramble>
      )}
      <span className="font-serif italic text-gold">.</span>
    </h1>
  );
}
