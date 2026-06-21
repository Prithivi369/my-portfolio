import { Container } from "@/components/container";

const links = [
  { label: "email", href: "mailto:hello@example.com" },
  { label: "github", href: "https://github.com" },
  { label: "linkedin", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="border-t-[0.5px] border-border bg-bg px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        {/* Copyright */}
        <p className="font-mono text-[11px] text-ink-quiet">
          © {new Date().getFullYear()} Prithivi Alamyan
        </p>

        {/* Links */}
        <div className="flex gap-[22px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-ink-quiet transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
