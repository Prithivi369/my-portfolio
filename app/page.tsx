import { Container } from "@/components/container";
import { StatsStrip } from "@/components/stats-strip";
import { SelectedWork } from "@/components/selected-work";
import { HeroName } from "@/components/hero-name";
import { PaperShaderBackground } from "@/components/paper-shader-background";
import { WritingSection } from "@/components/writing-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <main className="relative min-h-[80vh] overflow-hidden">
        <PaperShaderBackground />
        <Container>
          <div className="relative z-10 max-w-[580px] pt-[120px] pb-[70px]">
            {/* Meta line */}
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-quiet">
              — Portfolio · MMXXVI
            </p>

            {/* Name */}
            <HeroName />

            {/* Tagline */}
            <p className="font-sans text-[15px] leading-[1.65] text-ink-muted">
              Engineer &amp; researcher in training. I take ideas apart to
              understand them, then put them back together{" "}
              my way. Backend systems and AI.
            </p>
          </div>
        </Container>
      </main>

      {/* Stats strip */}
      <StatsStrip />

      {/* Selected work */}
      <Section id="work">
        <SelectedWork />
      </Section>

      {/* Writing & notes */}
      <Section className="bg-bg py-[38px]" id="writing">
        <WritingSection />
      </Section>

      {/* About */}
      <Section className="bg-bg py-[38px]" id="about">
        <AboutSection />
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
