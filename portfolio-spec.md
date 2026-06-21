Build me a personal portfolio site as a Next.js application. I'll describe the visual identity, content structure, and tech stack in detail. Follow the spec exactly — every decision below is locked, do not redesign or substitute things based on what you think looks better. If something is genuinely impossible (a package doesn't exist, an API has changed), tell me and propose a fallback rather than silently choosing a different direction.

# TECH STACK (LOCKED)
- Next.js 14+ with App Router and TypeScript
- Tailwind CSS for styling
- Motion (formerly Framer Motion) for animations — install as `framer-motion`
- next/font for self-hosted fonts (no Google Fonts CDN at runtime)
- MDX for project case study pages — use @next/mdx with frontmatter support, or contentlayer if you prefer
- shadcn/ui for any utility components (only if needed)
- Deploy target: Vercel
- No CMS, no database, no analytics beyond Vercel's built-in
- No light mode toggle — the site is intentionally always dark

# VISUAL IDENTITY (LOCKED — DO NOT IMPROVISE)

## Palette
Define these as CSS variables in globals.css and expose them as Tailwind theme colors so I can use classes like `bg-bg`, `text-ink`, `text-gold`, etc:

- --bg: #0d0d0c           (charcoal monochrome base)
- --ink: #ecead3           (off-white text, never pure white)
- --gold: #d4b878          (champagne gold, single accent)
- --ink-muted: rgba(236, 234, 211, 0.7)   (secondary text)
- --ink-quiet: rgba(236, 234, 211, 0.45)  (meta labels, captions)
- --border: rgba(236, 234, 211, 0.1)      (dividers, hairlines)
- --bg-blur: rgba(13, 13, 12, 0.6)         (sticky bar / overlay backgrounds)

Do not introduce any other accent colors anywhere on the site. Status indicators, links, hover states all use opacity changes on --ink, or shifts to --gold for the few highlighted moments. No red, no green, no blue, ever.

## Typography
Use next/font to self-host these:
- Display serif: Fraunces (Google Fonts), weight 500, with italic variant. Used only for the hero name, the italic period accent, project titles, and stat numbers.
- Body sans: Geist Sans (or Inter as fallback), weight 400 and 500. Used for tagline, body copy, navigation.
- Mono: JetBrains Mono, weight 400. Used for meta labels (— Portfolio · MMXXVI), stat sub-labels, navigation links, project numbers (01, 02), and any tag/badge text.

Expose these as Tailwind font families: `font-serif`, `font-sans`, `font-mono`.

## Type scale (use exact values)
- Hero name: 60px desktop / 40px mobile, line-height 1.0, letter-spacing -0.025em, font-weight 500
- Section headers (e.g. "— Selected work"): 11px mono, uppercase, letter-spacing 0.18em, color --ink-quiet
- Body / tagline: 15px sans, line-height 1.65, color --ink-muted
- Project titles: 18px serif, font-weight 500, letter-spacing -0.005em
- Project descriptions: 12-13px sans, line-height 1.55, color --ink-muted
- Stat numbers: 20px serif, font-weight 500
- Stat labels: 10-11px mono, uppercase, letter-spacing 0.12em
- Meta labels (— Portfolio · MMXXVI): 11px mono, uppercase, letter-spacing 0.18em

# PAGE STRUCTURE

Single-page scroll. Sections in this exact order:

## 1. Top bar
Sticky on scroll. Background: var(--bg-blur) with backdrop-filter: blur(8px). Border-bottom: 0.5px solid var(--border). Padding: 16px 28px. Contains:
- Left: name in mono, 11px, color --ink, font-weight 500
- Right: 4 links — "work", "writing", "cv", "contact" — in mono, 11px, color --ink-quiet, gap 22px between them. Hover: color shifts to --ink over 200ms.

## 2. Hero section
Min-height 80vh. Padding: 80px 28px 70px. Position: relative; overflow: hidden. Behind everything, the paper shader background (see ANIMATIONS). Content sits at z-index 2, max-width 580px:
- Meta line: "— Portfolio · MMXXVI" in mono uppercase
- Name (h1): scrambling text (see ANIMATIONS), followed immediately by a static italic gold period
- Tagline: "Engineer & researcher in training. I take ideas apart to understand them, then put them back together [my way]. Backend systems and AI." — where [my way] is wrapped in <em> tags so it renders italic. NO color animation, NO highlight, NO underline. Just italic.

## 3. Stats strip
Full-width grid of 4 stat cells. Border-top and border-bottom: 0.5px solid var(--border). Background: var(--bg-blur) with backdrop-filter: blur(8px). Each cell padding 16px 22px, separated by 0.5px right border. Each cell:
- Big number/text in serif, 20px, font-weight 500. The "key" character of each (the digit, the symbol) is colored --gold; the rest is --ink.
- Mono uppercase label below in --ink-quiet.

The four stats:
- Projects: "07" (the whole "07" in --gold) / label: "Projects"
- Year: "CS·2" (the "·" in --gold) / label: "Sophomore"
- Focus: "AI/BE" (the "/" in --gold) / label: "Focus"
- Status: "OPEN." (the "." in --gold) / label: "For internships"

On mobile (<640px), stack vertically.

## 4. Selected work section
Padding: 38px 28px 32px. Background: var(--bg) (solid, no shader). Header row:
- Left: section header "— Selected work" (11px mono uppercase --ink-quiet)
- Right: "01 / 03" counter where the active number is --gold

Then a list of 3 project items. Each project item is a row with:
- Left: project number (01, 02, 03) in mono 11px --ink-quiet
- Middle: project title (serif 18px) and description (sans 12px --ink-muted)
- Right: arrow "→" in mono --ink-quiet
- Border-top: 0.5px solid var(--border)
- Padding: 20px 0

On hover, the cursor-following image preview activates (see ANIMATIONS).

Each project links to /projects/[slug] which is rendered from MDX.

## 5. Writing section
Header "— Writing & notes". List of 3 placeholder entries. Each entry:
- Title (serif 16px)
- One-line description (sans 12px --ink-muted)
- Date in mono on the right

Static for now — I'll fill in real content later. Use lorem ipsum if needed.

## 6. About section
Header "— About". Two paragraphs of placeholder body copy in --ink-muted. No photo. Max-width 580px.

## 7. Footer
Padding: 32px 28px. Border-top: 0.5px solid var(--border). Background: var(--bg). Layout: flex justify-between. Left: copyright line in mono 11px --ink-quiet. Right: 3 links — email, GitHub, X (or LinkedIn) — in mono 11px, --ink-quiet, hover to --ink. No "Made with Next.js" or framework attribution.

# ANIMATIONS — TWO SIGNATURES (IMPLEMENT EXACTLY)

## Signature 1: Paper shader hero background

Try to install the Paper Shaders component from 21st.dev:
  npx shadcn@latest add https://21st.dev/r/paper-design/paper-shaders

(If that exact slug isn't available, search the registry for "paper shader" or "fluid shader" and use what's there.)

Customize the shader so it uses ONLY charcoal-to-near-black tones — variations of #0d0d0c, #1a1a1a, #2a2a2a, #3a3530. No other hues. Set the speed slow (the motion should feel like ink in water — drift, not flow). Reduce opacity so the shader sits beneath the text without competing for attention.

The shader fills only the hero section — not the whole page, not the stats strip, not the work section.

FALLBACK if the 21st.dev shader is unavailable or doesn't work: implement a CSS-only version. Three large blurred circles inside an absolute-positioned div with `inset: 0; overflow: hidden; z-index: 1`. Circle specs:
- Circle 1: 380px × 380px, background #2a2a2a, opacity 0.7, top: -120px, left: -90px, animation drift-a 24s ease-in-out infinite
- Circle 2: 320px × 320px, background #1a1a1a, opacity 0.85, bottom: -110px, right: -80px, animation drift-b 28s ease-in-out infinite
- Circle 3: 240px × 240px, background #3a3530, opacity 0.5, top: 30%, left: 45%, animation drift-c 32s ease-in-out infinite

Apply `filter: blur(60px)` to all three. Keyframes:
- drift-a: 0%/100% translate(0,0) scale(1); 50% translate(60px, 30px) scale(1.08)
- drift-b: 0%/100% translate(0,0); 50% translate(-50px, -30px)
- drift-c: 0%/100% translate(0,0); 50% translate(40px, -20px)

## Signature 2: Name scramble on page load

Install the TextScramble component from 21st.dev:
  npx shadcn@latest add https://21st.dev/r/ibelick/text-scramble

After installing, MODIFY the component to use random-order character locking instead of left-to-right locking. The original locks indices sequentially (0, 1, 2...) as progress advances. We want characters to lock in a random order — character at index 4 might lock before character at index 1.

The modification: in the `scramble()` function, before the interval starts, generate an array of all non-space character indices, Fisher-Yates shuffle that array, and build a Map from character-index to its rank in the shuffle. Inside the interval, instead of `if (progress * text.length > i)`, check `if (lockOrder.get(i)! < lockedCount)` where `lockedCount = Math.floor(progress * indices.length)`.

Here is the full modified component to paste in (replacing whatever shadcn installs at the destination path):

```tsx
'use client';
import { type JSX, useEffect, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.95,
  speed = 0.06,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements
  );
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const text = children;

  const scramble = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const indices = text
      .split('')
      .map((_, i) => i)
      .filter((i) => text[i] !== ' ');
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const lockOrder = new Map<number, number>();
    indices.forEach((idx, rank) => lockOrder.set(idx, rank));

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;
      const lockedCount = Math.floor(progress * indices.length);

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }
        const rank = lockOrder.get(i)!;
        if (rank < lockedCount) {
          scrambled += text[i];
        } else {
          scrambled +=
            characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (!trigger) return;
    scramble();
  }, [trigger]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
```

Use the component in the hero like this:

```tsx
<h1 className="font-serif text-[60px] md:text-[60px] text-[40px] leading-none tracking-[-0.025em] font-medium">
  <TextScramble
    as="span"
    duration={0.95}
    speed={0.06}
    className="inline-block"
    style={{ fontVariantNumeric: 'tabular-nums' }}
  >
    your name
  </TextScramble>
  <span className="font-serif italic text-gold">.</span>
</h1>
```

The italic period does NOT scramble. It is solid in --gold from frame 1, sitting immediately after the scrambling name with no space.

Apply `font-variant-numeric: tabular-nums;` and `font-feature-settings: 'tnum';` to the scrambling element. This stabilizes character widths slightly during scramble and reduces visual shimmer.

## Signature 3 (cursor-following image preview on project list)

Install the cursor-following image preview component from 21st.dev. Search the registry for "cursor image preview", "minimal portfolio", or "lerp cursor preview" and use whichever matches:
  npx shadcn@latest add https://21st.dev/r/[whatever-slug-fits]

Customize so:
- Each project list item has a hover behavior where an image floats next to the cursor
- Use lerp-based smoothing on the cursor position (~0.1-0.15 lerp factor for nice trailing)
- Image size: 280px × 200px
- Border-radius: 8px
- Subtle fade-in/out on hover enter/leave (200ms, ease)
- Pull preview images from /public/projects/preview-1.jpg, preview-2.jpg, preview-3.jpg (use placeholder images for now — solid color rectangles or stock photos are fine, I'll swap in real images)
- DISABLE on touch devices (use a hover media query: `@media (hover: hover)` or detect touch)

If no suitable component exists in 21st.dev, build a simple version yourself: track mouse position with a useEffect listener, lerp toward it in a requestAnimationFrame loop, render an absolutely-positioned image at that position when any project item is hovered.

# WHAT I DON'T WANT
- No light mode toggle
- No additional accent colors beyond gold
- No additional micro-animations beyond the two signatures + the scroll-triggered fade-ins
- No emojis in the UI
- No "Made with Next.js" footer
- No cookie banner unless legally required
- No hover ripples, no parallax, no scramble on every text element
- No delayed color highlight on any phrase in the tagline. Specifically: "my way" must be plain italic text, no animation, no color shift.

# OTHER DETAILS

- All interactive elements should have a 200ms color transition on hover (text from --ink-muted to --ink, or to --gold where appropriate)
- Add scroll-triggered fade-in-and-rise on each major section as it enters viewport. Use Motion's `whileInView` with `initial={{ opacity: 0, y: 12 }}`, `whileInView={{ opacity: 1, y: 0 }}`, transition `{ duration: 0.5, ease: 'easeOut' }`, viewport `{ once: true, amount: 0.2 }`.
- Favicon: a single gold dot "." on charcoal background — generate a 32×32 PNG with --bg as the background and --gold as a centered period in serif. Place at /public/favicon.png.
- Mobile responsiveness:
  - Stats strip stacks vertically below 640px
  - Hero name scales to 40px below 640px
  - Cursor image preview is disabled on touch devices (replaced with a small thumbnail next to each project title)
  - Top bar nav links collapse into a hamburger if needed (or just hide them, the site is short enough to scroll)
- Respect prefers-reduced-motion:
  - Scramble is disabled — show final text immediately
  - Shader animation is disabled — static blurred circles, no drift keyframes
  - Scroll fade-ins are disabled — content is visible from the start
  - Cursor image preview is disabled — show small thumbnails inline instead

# DELIVERABLE STRUCTURE

Set up the repo with:
- /app/layout.tsx — root layout, font registration, metadata
- /app/page.tsx — homepage (all sections)
- /app/projects/[slug]/page.tsx — dynamic project pages, MDX-driven
- /app/globals.css — CSS variables, base styles
- /content/projects/*.mdx — one file per project, with frontmatter (title, date, tags, preview-image, summary)
- /components/text-scramble.tsx — modified scramble component
- /components/paper-shader-background.tsx — shader or fallback
- /components/cursor-image-preview.tsx — cursor-following preview
- /components/stats-strip.tsx
- /components/top-bar.tsx
- /components/footer.tsx
- /components/section.tsx — reusable wrapper that applies the scroll fade-in
- /lib/fonts.ts — next/font configuration for Fraunces, Geist Sans, JetBrains Mono
- /public/projects/preview-1.jpg, preview-2.jpg, preview-3.jpg — placeholder images
- /public/favicon.png
- tailwind.config.ts — exposes the locked palette and fonts as theme tokens
- /content/projects/*.mdx — three placeholder MDX files with frontmatter and lorem ipsum body, structured so I can swap in real content
- README.md — local setup instructions, deploy instructions, where to swap in real content

# COPY STRINGS (use exactly these)

- Page title (in <head>): "your name — engineer & researcher"
- Meta description: "Engineer & researcher in training. Backend systems and AI."
- Hero meta line: "— Portfolio · MMXXVI"
- Hero name (placeholder for me to replace): "your name"
- Tagline: "Engineer & researcher in training. I take ideas apart to understand them, then put them back together <em>my way</em>. Backend systems and AI."
- Stats: "07 / Projects", "CS·2 / Sophomore", "AI/BE / Focus", "OPEN. / For internships"
- Selected work header: "— Selected work"
- Writing header: "— Writing & notes"
- About header: "— About"

Project placeholder titles and descriptions:
1. "Reimplementing GPT-2 from scratch" — "Built the full forward pass in PyTorch to understand each component — not just calling the API."
2. "Distributed task queue" — "A small Redis-backed scheduler. Notes on what I broke and how I fixed it."
3. "Inference latency notebook" — "Where time actually goes in a single forward pass — measured, not assumed."

# BUILD ORDER

Do this in stages, showing me the result after each:

Stage 0: Repo scaffolding. Next.js + TS + Tailwind + framer-motion + next/font installed. CSS variables and Tailwind theme set up. A page that renders just the hero meta line, the static text "your name." (no scramble yet), and the tagline (no animations). Confirm the palette and typography look right before moving on.

Stage 1: Add the stats strip and selected work section with placeholder content. Get the layout right at desktop and mobile. Still no animations.

Stage 2: Install and modify TextScramble. Wire it to the hero name. Confirm the random-order scramble works.

Stage 3: Install Paper Shaders (or fall back to CSS circles). Place behind the hero. Tune to charcoal-only colors and slow speed.

Stage 4: Install cursor image preview. Wire it to the project list with placeholder images.

Stage 5: Add the writing section, about section, footer, scroll fade-ins, and the favicon.

Stage 6: Set up MDX project pages so /projects/gpt-2 etc. render from /content/projects/*.mdx.

After each stage, summarize what you did, point out anything that didn't work as expected, and wait for me to confirm before moving on.

Begin with Stage 0.