import type { Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export function fadeUp(reduceMotion: boolean | null, delay = 0): Variants {
  return {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease, delay },
    },
  };
}

export const staggerContainer = (reduceMotion: boolean | null, stagger = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: reduceMotion ? 0 : stagger,
      delayChildren: reduceMotion ? 0 : 0.05,
    },
  },
});

export const staggerItem = (reduceMotion: boolean | null): Variants => ({
  hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduceMotion ? 0 : 0.5, ease },
  },
});
