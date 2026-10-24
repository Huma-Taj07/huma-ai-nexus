import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function MagneticButton({ children, href, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  return (
    <div
      ref={ref}
      className="inline-block"
      onMouseMove={(e) => {
        if (reduceMotion || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.2);
        y.set((e.clientY - r.top - r.height / 2) * 0.2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.a
        href={href}
        style={reduceMotion ? undefined : { x: sx, y: sy }}
        className={cn(
          "inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-[#00d4ff]/40 hover:bg-white/[0.06]",
          className,
        )}
      >
        {children}
      </motion.a>
    </div>
  );
}
