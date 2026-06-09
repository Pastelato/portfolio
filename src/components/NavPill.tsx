"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import type { NavLink } from "@/types/portfolio";
import { revealViewport } from "@/lib/animations";

const tabs: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Contacts", href: "#contact" },
];

/**
 * Full-bleed black band with a starry texture, sitting just below the hero.
 * Uppercase nav items separated by sparkle icons, on a slightly tilted strip.
 */
export default function NavPill() {
  return (
    <div className="relative z-30 -mt-10 md:-mt-16">
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Section navigation"
        className="w-full bg-surface-dark bg-[length:320px_160px] bg-repeat py-6 text-ink-inverse"
        style={{ backgroundImage: "url(/images/stars.svg)" }}
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 sm:gap-x-10 lg:gap-x-16">
          {tabs.map((tab, i) => (
            <Fragment key={tab.label}>
              {i > 0 && (
                <li aria-hidden className="text-white/70">
                  <Sparkle className="size-4 fill-white/80 sm:size-5" />
                </li>
              )}
              <li>
                <motion.a
                  href={tab.href}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="block font-display text-base font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-accent sm:text-lg lg:text-xl"
                >
                  {tab.label}
                </motion.a>
              </li>
            </Fragment>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
