"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface CursorImagePreviewProps {
  /** URL of the preview image */
  src: string;
  /** Alt text for the image */
  alt: string;
  /** Whether this item is currently hovered */
  active: boolean;
}

export function CursorImagePreview({
  src,
  alt,
  active,
}: CursorImagePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -9999, y: -9999 });
  const targetRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const [visible, setVisible] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);
  const initializedRef = useRef(false);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.12);
    posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.12);

    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    setSupportsHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  useEffect(() => {
    if (!supportsHover) return;

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX + 20;
      const y = e.clientY - 110;
      targetRef.current = { x, y };

      // Snap to position on first move to avoid lerping from (-9999, -9999)
      if (!initializedRef.current) {
        posRef.current = { x, y };
        initializedRef.current = true;
      }
    };

    if (active) {
      initializedRef.current = false;
      setVisible(true);
      window.addEventListener("mousemove", handleMove);
      rafRef.current = requestAnimationFrame(animate);
    } else {
      setVisible(false);
      cancelAnimationFrame(rafRef.current);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active, animate, supportsHover]);

  if (!supportsHover) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed left-0 top-0 z-50"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 200ms ease",
        willChange: "transform",
      }}
    >
      <div className="h-[200px] w-[280px] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={src}
          alt={alt}
          width={280}
          height={200}
          className="h-full w-full object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}
