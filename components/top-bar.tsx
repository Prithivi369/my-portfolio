"use client";

import Link from "next/link";

const navLinks = [
  { label: "work", href: "#work" },
  { label: "writing", href: "#writing" },
  { label: "cv", href: "#cv" },
  { label: "contact", href: "#contact" },
];

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b-[0.5px] border-border bg-bg-blur backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-12">
        {/* Name */}
        <Link
          href="/"
          className="font-mono text-[11px] font-medium text-ink transition-colors duration-200"
        >
          Prithivi Alamyan
        </Link>

        {/* Nav links */}
        <nav className="flex gap-[22px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] text-ink-quiet transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
