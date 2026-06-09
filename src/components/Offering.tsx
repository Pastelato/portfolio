"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { fadeUp, revealViewport } from "@/lib/animations";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Offering() {
  return (
    <section
      id="offering"
      className="container-px mx-auto max-w-[1200px] py-[var(--spacing-section)]"
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
      >
        <div>
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            <span className="h-px w-8 bg-ink" />
            My Services
          </span>
          <h2 className="mt-4 font-display text-[length:var(--text-section)] font-extrabold uppercase leading-[0.95] tracking-tight text-ink">
            What I&apos;m
            <br />
            Offering
          </h2>
        </div>

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:pt-2">
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Scalable APIs, enterprise applications and distributed systems.
            Containerized applications, CI/CD pipelines and cloud-native
            solutions. Intelligent applications powered by modern AI
            technologies.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 rounded-pill bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-wide text-ink-inverse"
          >
            Message Me
          </motion.a>
        </div>
      </motion.div>

      {/* Square cards — each reveals independently to avoid stagger propagation issues */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ id, title, description, icon: Icon }, index) => (
          <motion.a
            key={id}
            href="#work"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: easeOut }}
            className={`group flex aspect-square flex-col justify-between border p-8 transition-colors duration-300 ${
              index === 0
                ? "border-ink stars-bg text-ink-inverse"
                : "border-line bg-background text-ink stars-bg-hover hover:border-ink hover:text-ink-inverse"
            }`}
          >
            <Icon className="size-12 stroke-[1.25]" />

            <div>
              <h3 className="font-display text-2xl font-bold uppercase leading-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm opacity-70">{description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                Read More
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
