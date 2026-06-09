import type { Variants, Transition } from "framer-motion";

/**
 * Shared Framer Motion primitives so every section animates with a single,
 * consistent editorial language (see design.json -> animations).
 */

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

/** Viewport config reused by all scroll-triggered reveals. */
export const revealViewport = { once: true, amount: 0.25 } as const;

/** Fade + rise used for headings, paragraphs and standalone blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/** Parent container that staggers its children on reveal. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/** Child item for use inside `staggerContainer`. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

/** Subtle scale-in for media and badges. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/** Hover/tap interaction for buttons and interactive cards. */
export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.25, ease: easeOut } },
  whileTap: { scale: 0.98 },
} as const;
