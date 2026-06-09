import type { Metadata } from "next";

// Self-hosted fonts (no external requests). JetBrains Mono for everything;
// the body uses the "NL" (no-ligatures) treatment, see globals.css.
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import "@fontsource/jetbrains-mono/800.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sergio M. — Backend Engineer",
  description:
    "Portfolio of Sergio M., a Backend Engineer specializing in Java, Spring Boot, and cloud technologies.",
  metadataBase: new URL("https://madhu.design"),
  openGraph: {
    title: "Sergio M. — Backend Engineer",
    description:
      "Portfolio of Sergio M., a Backend Engineer specializing in Java, Spring Boot, and cloud technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-background text-ink antialiased">{children}</body>
    </html>
  );
}
