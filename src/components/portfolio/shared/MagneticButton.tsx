import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
};

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 glow-primary border border-primary/30",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-primary/40 hover:bg-white/[0.03]",
  ghost: "bg-transparent text-muted-foreground hover:text-foreground",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  fullWidth,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22 });
  const springY = useSpring(y, { stiffness: 280, damping: 22 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.18);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200",
    variants[variant],
    className,
  );

  const inner = (
    <motion.span
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      className="inline-flex items-center justify-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={fullWidth ? "block w-full" : "inline-block"}
      >
        <a href={href} className={cn(classes, fullWidth && "w-full")}>
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={fullWidth ? "block w-full" : "inline-block"}
    >
      <button type={type} onClick={onClick} className={cn(classes, fullWidth && "w-full")}>
        {inner}
      </button>
    </div>
  );
}
