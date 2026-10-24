import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const offset = direction === "up" ? { y: 28 } : direction === "left" ? { x: -28 } : { x: 28 };

  return (
    <motion.div
      initial={{
        opacity: reduceMotion ? 1 : 0,
        ...(reduceMotion ? {} : offset),
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/** Page-load reveal — used in hero */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const offset = direction === "up" ? { y: 32 } : direction === "left" ? { x: -32 } : { x: 32 };

  return (
    <motion.div
      initial={{
        opacity: reduceMotion ? 1 : 0,
        ...(reduceMotion ? {} : offset),
      }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function Float({
  children,
  className,
  duration = 4,
  y = 10,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={reduceMotion ? {} : { y: [-y / 2, y / 2, -y / 2] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
