import type { Metadata } from "next";
import { fraunces, geistSans, jetbrainsMono } from "@/lib/fonts";
import { TopBar } from "@/components/top-bar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prithivi Alamyan — engineer & researcher",
  description: "Engineer & researcher in training. Backend systems and AI.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geistSans.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
