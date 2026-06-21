"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/container";
import { CursorImagePreview } from "@/components/cursor-image-preview";

const projects = [
  {
    number: "01",
    title: "Reimplementing GPT-2 from scratch",
    description:
      "Built the full forward pass in PyTorch to understand each component — not just calling the API.",
    slug: "gpt-2",
    preview: "/projects/preview-1.jpg",
  },
  {
    number: "02",
    title: "Distributed task queue",
    description:
      "A small Redis-backed scheduler. Notes on what I broke and how I fixed it.",
    slug: "task-queue",
    preview: "/projects/preview-2.jpg",
  },
  {
    number: "03",
    title: "Inference latency notebook",
    description:
      "Where time actually goes in a single forward pass — measured, not assumed.",
    slug: "inference-latency",
    preview: "/projects/preview-3.jpg",
  },
];

export function SelectedWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-bg py-[38px]">
      <Container>
        {/* Header row */}
        <div className="mb-6 flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-quiet">
            — Selected work
          </p>
          <p className="font-mono text-[11px] tracking-[0.18em] text-ink-quiet">
            <span className="text-gold">01</span>
            <span className="text-ink-quiet"> / 03</span>
          </p>
        </div>

        {/* Project list */}
        <div>
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex items-center gap-6 border-t-[0.5px] border-border py-5 transition-colors duration-200"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Number */}
              <span className="shrink-0 font-mono text-[11px] text-ink-quiet">
                {project.number}
              </span>

              {/* Title & description */}
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-[18px] font-medium tracking-[-0.005em] text-ink transition-colors duration-200 group-hover:text-gold">
                  {project.title}
                </h3>
                <p className="mt-1 font-sans text-[12px] leading-[1.55] text-ink-muted">
                  {project.description}
                </p>
              </div>

              {/* Arrow */}
              <span className="shrink-0 font-mono text-ink-quiet transition-colors duration-200 group-hover:text-ink">
                →
              </span>
            </Link>
          ))}
        </div>
      </Container>

      {/* Cursor-following preview images */}
      {projects.map((project, i) => (
        <CursorImagePreview
          key={project.slug}
          src={project.preview}
          alt={project.title}
          active={hoveredIndex === i}
        />
      ))}
    </section>
  );
}
