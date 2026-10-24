import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HeroShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("hero-shell w-full", className)}>{children}</div>;
}

export function HeroBlob({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <svg
        className="pointer-events-none absolute -inset-3 sm:-inset-4"
        viewBox="0 0 400 480"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M48 62 C20 120 8 210 28 310 C48 400 120 450 210 462 C300 474 370 420 388 320 C406 220 370 90 280 42 C190 -6 76 4 48 62 Z"
          stroke="#111"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
          fill="none"
        />
      </svg>
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "48% 52% 42% 58% / 52% 48% 55% 45%", background: "#FFC83D" }}
      >
        <div className="relative aspect-[4/5] w-[min(100%,420px)]">{children}</div>
      </div>
    </div>
  );
}
