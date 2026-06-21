import { Container } from "@/components/container";

export function AboutSection() {
  return (
    <Container>
      {/* Header */}
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-quiet">
        — About
      </p>

      <div className="max-w-[580px] space-y-5">
        <p className="font-sans text-[15px] leading-[1.65] text-ink-muted">
          I&apos;m a sophomore studying computer science, focused on backend
          systems and machine learning. Most of my time goes into building
          things that help me understand how they work — reimplementing papers,
          breaking distributed systems on purpose, and measuring what actually
          matters in production code.
        </p>
        <p className="font-sans text-[15px] leading-[1.65] text-ink-muted">
          When I&apos;m not writing code, I&apos;m usually reading about
          systems design, writing notes on things I&apos;ve learned (mostly so
          I don&apos;t forget them), or trying to explain something complicated
          in a way that would have helped me six months ago. I believe the
          best way to learn is to build, break, and document.
        </p>
      </div>
    </Container>
  );
}
