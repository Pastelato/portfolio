"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Disc,
  Gamepad2,
  Globe,
  Joystick,
  Monitor,
  Mouse,
  Star,
} from "lucide-react";
import { scaleIn, staggerContainer, staggerItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="top"
      className="container-px mx-auto max-w-[1200px] pt-36 pb-20 md:pt-44 md:pb-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left — copy */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1
            variants={staggerItem}
            className="font-display text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-tight text-ink"
          >
            <span className="block font-normal">Hello!</span>
            <span className="block font-bold">I&apos;m Sergio</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-5 flex items-center gap-2 text-lg font-medium text-muted md:text-xl"
          >
            Backend Developer
            <Star className="size-5 fill-accent-alt text-accent-alt" />
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
          >
            I design and develop reliable backend solutions using Java, Spring
            Boot and cloud technologies. Passionate about artificial
            intelligence, automation and building systems that solve real-world
            business problems.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center rounded-pill bg-ink px-8 py-4 text-sm font-medium text-ink-inverse"
            >
              Let&apos;s Talk
            </motion.a>

            <motion.a
              href="/cv.pdf"
              download="Sergio-Michelotti-CV.pdf"
              whileHover={{ y: -2 }}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink"
            >
              Download Cv
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right — portrait, with retro icons peeking from behind */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto w-full max-w-sm self-end lg:max-w-none"
        >
          {/* Retro doodle icons (computer, games, internet) behind the cut-out */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <Monitor className="absolute -left-7 top-8 size-11 -rotate-12 text-ink/30" />
            <Gamepad2 className="absolute -top-5 left-1/3 size-10 rotate-6 text-ink/30" />
            <Globe className="absolute -right-6 top-12 size-12 text-ink/30" />
            <Joystick className="absolute -left-6 top-1/2 size-10 rotate-12 text-ink/25" />
            <Disc className="absolute -right-8 top-1/2 size-11 -rotate-6 text-ink/25" />
            <Mouse className="absolute bottom-12 -left-4 size-9 text-ink/25" />
          </div>

          <Image
            src="/images/portrait.png"
            alt="Portrait of Sergio Michelotti"
            width={1919}
            height={1941}
            priority
            className="relative z-10 h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
