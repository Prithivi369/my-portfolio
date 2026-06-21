import { Container } from "@/components/container";

const entries = [
  {
    title: "On attention mechanisms, intuitively",
    description:
      "Breaking down multi-head attention without the linear algebra wall.",
    date: "Apr 2026",
  },
  {
    title: "Redis streams for job scheduling",
    description:
      "Why I chose XADD over sorted sets and what went wrong the first time.",
    date: "Mar 2026",
  },
  {
    title: "Latency is a distribution, not a number",
    description:
      "P50 vs P99 and why your benchmarks are probably lying to you.",
    date: "Feb 2026",
  },
];

export function WritingSection() {
  return (
    <Container>
      {/* Header */}
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-quiet">
        — Writing &amp; notes
      </p>

      {/* Entry list */}
      <div>
        {entries.map((entry) => (
          <div
            key={entry.title}
            className="flex items-start justify-between gap-6 border-t-[0.5px] border-border py-5"
          >
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-[16px] font-medium text-ink">
                {entry.title}
              </h3>
              <p className="mt-1 font-sans text-[12px] leading-[1.55] text-ink-muted">
                {entry.description}
              </p>
            </div>
            <span className="shrink-0 font-mono text-[11px] text-ink-quiet">
              {entry.date}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
