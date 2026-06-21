"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

export function PaperShaderBackground() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  if (reduceMotion) {
    return <CssFallback animated={false} />;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-60">
      <MeshGradient
        className="h-full w-full"
        colors={["#0f0d0b", "#1a1814", "#2a2520", "#3a3530", "#4a453e"]}
        speed={0.35}
        distortion={0.8}
        swirl={0.3}
      />
    </div>
  );
}

/** CSS-only fallback: three large blurred drifting circles */
function CssFallback({ animated = true }: { animated?: boolean }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className={`absolute -left-[90px] -top-[120px] h-[380px] w-[380px] rounded-full bg-[#2a2a2a] opacity-70 blur-[60px] ${
          animated ? "animate-drift-a" : ""
        }`}
      />
      <div
        className={`absolute -bottom-[110px] -right-[80px] h-[320px] w-[320px] rounded-full bg-[#1a1a1a] opacity-85 blur-[60px] ${
          animated ? "animate-drift-b" : ""
        }`}
      />
      <div
        className={`absolute left-[45%] top-[30%] h-[240px] w-[240px] rounded-full bg-[#3a3530] opacity-50 blur-[60px] ${
          animated ? "animate-drift-c" : ""
        }`}
      />
    </div>
  );
}
