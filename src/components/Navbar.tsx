"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface SocialLink {
  type: "linkedin" | "email";
  href: string;
  label: string;
}

/** Top-right menu entries: a title, a hairline, and either a subtitle or icons. */
interface MenuItem {
  label: string;
  href: string;
  subtitle?: string;
  arrow?: boolean;
  socials?: SocialLink[];
}

const items: MenuItem[] = [
  { label: "My Projects", subtitle: "see all my projects", href: "#work", arrow: true },
  { label: "About Me", subtitle: "learn about myself", href: "#offering" },
  {
    label: "Contact Me",
    href: "#contact",
    socials: [
      {
        type: "linkedin",
        href: "https://www.linkedin.com/in/sergio-michelotti-9b3b22146",
        label: "LinkedIn",
      },
      {
        type: "email",
        href: "mailto:sergiomichelottic@gmail.com",
        label: "Email",
      },
    ],
  },
];

function SocialGlyph({ type }: { type: SocialLink["type"] }) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
    </svg>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky behaviour: shrink + frost once scrolled, hide on scroll-down.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > previous && latest > 240 && !menuOpen);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-px mx-auto max-w-[1200px]">
        <nav
          className={`mt-4 flex items-center justify-between rounded-pill border px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "border-line bg-background/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="font-display text-xl font-bold tracking-tight text-ink"
          >
SergioM<span className="text-accent-alt">.</span>
          </a>

          {/* Desktop menu — title + hairline + subtitle, top-right */}
          <ul className="hidden items-stretch divide-x divide-line md:flex">
            {items.map((item) => (
              <li key={item.label} className="px-5 first:pl-0 last:pr-0">
                <div className="group">
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-muted"
                  >
                    {item.label}
                    {item.arrow && (
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </a>
                  <span className="mt-2 block h-px w-full bg-line transition-colors group-hover:bg-ink" />
                  {item.socials ? (
                    <div className="mt-2 flex items-center gap-3">
                      {item.socials.map((s) => (
                        <a
                          key={s.type}
                          href={s.href}
                          aria-label={s.label}
                          target={s.type === "email" ? undefined : "_blank"}
                          rel="noreferrer"
                          className="text-ink/70 transition-colors hover:text-ink"
                        >
                          <SocialGlyph type={s.type} />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <span className="mt-2 block text-xs text-muted">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex size-10 items-center justify-center rounded-pill border border-line text-ink md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-2 overflow-hidden rounded-card border border-line bg-background p-2 shadow-lg md:hidden"
            >
              <ul className="flex flex-col">
                {items.map((item) => (
                  <li key={item.label}>
                    <div className="flex items-center justify-between rounded-xl px-4 py-3">
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex-1 text-base font-semibold text-ink"
                      >
                        {item.label}
                        {item.subtitle && (
                          <span className="mt-0.5 block text-xs font-normal text-muted">
                            {item.subtitle}
                          </span>
                        )}
                      </a>
                      {item.socials ? (
                        <div className="flex items-center gap-3">
                          {item.socials.map((s) => (
                            <a
                              key={s.type}
                              href={s.href}
                              aria-label={s.label}
                              target={s.type === "email" ? undefined : "_blank"}
                              rel="noreferrer"
                              className="text-ink/70 transition-colors hover:text-ink"
                            >
                              <SocialGlyph type={s.type} />
                            </a>
                          ))}
                        </div>
                      ) : (
                        <ArrowUpRight className="size-4 text-muted" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
