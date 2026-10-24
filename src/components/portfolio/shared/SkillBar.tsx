import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ease } from "./motion";
import { cn } from "@/lib/utils";

type SkillBarProps = {
  name: string;
  level: number;
  delay?: number;
};

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground/90">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: reduceMotion ? `${level}%` : "0%" }}
          animate={inView ? { width: `${level}%` } : undefined}
          transition={{ duration: reduceMotion ? 0 : 1, ease, delay }}
        />
      </div>
    </div>
  );
}

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
