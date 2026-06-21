const stats = [
  {
    value: "07",
    label: "Projects",
    highlight: (
      <span className="text-gold">07</span>
    ),
  },
  {
    value: "CS·2",
    label: "Sophomore",
    highlight: (
      <>
        <span className="text-ink">CS</span>
        <span className="text-gold">·</span>
        <span className="text-ink">2</span>
      </>
    ),
  },
  {
    value: "AI/BE",
    label: "Focus",
    highlight: (
      <>
        <span className="text-ink">AI</span>
        <span className="text-gold">/</span>
        <span className="text-ink">BE</span>
      </>
    ),
  },
  {
    value: "OPEN.",
    label: "For internships",
    highlight: (
      <>
        <span className="text-ink">OPEN</span>
        <span className="text-gold">.</span>
      </>
    ),
  },
];

export function StatsStrip() {
  return (
    <section className="w-full border-y-[0.5px] border-border bg-bg-blur backdrop-blur-[8px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-[22px] py-4 ${
              i < stats.length - 1 ? "sm:border-r-[0.5px] sm:border-border" : ""
            } ${i < stats.length - 1 ? "border-b-[0.5px] border-border sm:border-b-0" : ""}`}
          >
            <p className="font-serif text-[20px] font-medium">
              {stat.highlight}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-quiet">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
