"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { experience } from "@/data/experience";
import { fadeUp, revealViewport } from "@/lib/animations";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-background text-ink"
    >
      <div className="container-px mx-auto max-w-[1200px] py-[var(--spacing-section)]">
        {/* Centered header with decorative hatched square on the right */}
        <div className="relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="mx-auto flex max-w-xl flex-col items-center text-center"
          >
            <Sparkle className="size-7 fill-ink text-ink" />
            <h2 className="mt-3 font-display text-[length:var(--text-section)] font-extrabold uppercase tracking-tight">
              Experience
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form.
            </p>
          </motion.div>

          <Image
            src="/images/experience-deco.png"
            alt=""
            aria-hidden
            width={135}
            height={134}
            className="absolute right-0 top-0 hidden size-20 lg:block"
          />
        </div>

        {/* Experience rows — well-defined rectangles */}
        <div className="mt-14 flex flex-col gap-5">
          {experience.map(({ id, role, company, period }, index) => (
            <motion.a
              key={id}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: easeOut }}
              className={`group flex items-center gap-4 border px-5 py-6 transition-colors duration-300 sm:gap-6 sm:px-6 ${
                index === 0
                  ? "border-ink stars-bg text-ink-inverse"
                  : "border-line bg-background text-ink stars-bg-hover hover:border-ink hover:text-ink-inverse"
              }`}
            >
              {/* Number badge — square frame only, no fill */}
              <span className="flex size-10 shrink-0 items-center justify-center border border-current font-display text-base font-bold sm:size-12 sm:text-lg">
                {index + 1}
              </span>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold sm:text-xl">
                    {role}
                  </h3>
                  <p className="mt-1 text-sm opacity-60">{company}</p>
                </div>

                {period && (
                  <div className="flex items-center gap-4 sm:shrink-0">
                    <span className="hidden h-8 w-px bg-current opacity-30 sm:block" />
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] sm:text-sm">
                      Job Duration - {period}
                    </span>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
