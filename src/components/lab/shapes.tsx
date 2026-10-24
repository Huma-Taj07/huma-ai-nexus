import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BlobFrameProps = {
  children: ReactNode;
  className?: string;
  color?: string;
  variant?: 1 | 2 | 3;
};

const paths = {
  1: "M45,8 C72,4 96,22 98,48 C100,76 78,98 50,99 C22,100 2,78 4,50 C6,24 22,10 45,8 Z",
  2: "M50,5 C80,8 98,30 96,55 C94,82 72,98 45,97 C18,96 3,72 5,45 C7,18 24,3 50,5 Z",
  3: "M48,6 C75,2 99,28 97,54 C95,80 70,100 42,98 C14,96 1,70 6,44 C11,18 28,8 48,6 Z",
};

export function BlobFrame({
  children,
  className,
  color = "#FFC83D",
  variant = 1,
}: BlobFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden
        preserveAspectRatio="none"
      >
        <path d={paths[variant]} fill={color} />
      </svg>
      <div className="relative overflow-hidden" style={{ clipPath: "url(#blob-clip)" }}>
        {children}
      </div>
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="blob-clip" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.01)"
              d={paths[variant]}
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function BlobMask({ children, className, color = "#FFC83D" }: BlobFrameProps) {
  const radius = "42% 58% 55% 45% / 48% 42% 58% 52%";
  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute inset-0 scale-[1.08] opacity-40"
        style={{
          background: color,
          borderRadius: radius,
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute inset-0 scale-[1.04]"
        style={{
          border: `2px solid ${color}`,
          borderRadius: radius,
          opacity: 0.5,
        }}
      />
      <div
        className="absolute inset-0 -z-10 scale-105"
        style={{ background: color, borderRadius: radius }}
      />
      <div className="relative overflow-hidden" style={{ borderRadius: radius }}>
        {children}
      </div>
    </div>
  );
}

export function DoodleStar({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleArrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="80" height="40" viewBox="0 0 80 40" fill="none" aria-hidden>
      <path
        d="M5 25 C25 10, 45 30, 70 15"
        stroke="#111"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M62 12 L72 16 L66 24" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleSquiggle({ className }: { className?: string }) {
  return (
    <svg className={className} width="60" height="20" viewBox="0 0 60 20" fill="none" aria-hidden>
      <path
        d="M2 12 Q15 2, 28 12 T54 8"
        stroke="#111"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleHeart({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s-8-5.5-8-11a5 5 0 019-3 5 5 0 019 3c0 5.5-8 11-8 11z"
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleDots({ className }: { className?: string }) {
  return (
    <svg className={className} width="48" height="12" viewBox="0 0 48 12" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="2" fill="#111" />
      <circle cx="24" cy="6" r="2" fill="#111" />
      <circle cx="42" cy="6" r="2" fill="#111" />
    </svg>
  );
}

export function DoodleCrown({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden>
      <path
        d="M4 18 L8 8 L16 14 L24 6 L28 18 Z"
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4 18 H28" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleSparkle({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden>
      <path d="M14 0 L15 6 L21 7 L15 8 L14 14 L13 8 L7 7 L13 6 Z" fill="#FFC83D" />
      <path d="M4 2 L4.5 4.5 L7 5 L4.5 5.5 L4 8 L3.5 5.5 L1 5 L3.5 4.5 Z" fill="#FFC83D" opacity="0.7" />
      <path d="M24 3 L24.5 5 L26 5.5 L24.5 6 L24 8 L23.5 6 L22 5.5 L23.5 5 Z" fill="#FFC83D" opacity="0.7" />
    </svg>
  );
}

export function DoodleSparkleRadiating({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden>
      <path d="M14 1 v3 M14 18 v3 M1 10 h3 M24 10 h3" stroke="#FFC83D" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 5 l2.5 2.5 M21 5 l-2.5 2.5" stroke="#FFC83D" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="11" r="1.5" fill="#FFC83D" />
    </svg>
  );
}

export function DoodleGreetingUnderline({ className }: { className?: string }) {
  return (
    <svg className={className} width="72" height="6" viewBox="0 0 72 6" fill="none" aria-hidden>
      <path d="M2 4 Q18 1 36 3 T70 2" stroke="#FFC83D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleConfetti({ className }: { className?: string }) {
  return (
    <svg className={className} width="90" height="55" viewBox="0 0 90 55" fill="none" aria-hidden>
      <circle cx="8" cy="18" r="2.5" fill="#111" opacity="0.18" />
      <circle cx="28" cy="42" r="2" fill="#FFC83D" />
      <path d="M48 12 L50 17 L55 17 L51 20 L53 25 L48 22 L43 25 L45 20 L41 17 L46 17 Z" fill="#FFC83D" opacity="0.85" />
      <circle cx="72" cy="16" r="2" fill="#111" opacity="0.2" />
      <path d="M18 48 Q23 43 28 50" stroke="#111" strokeWidth="1.5" strokeLinecap="round" opacity="0.22" />
    </svg>
  );
}

export function DoodleDashedArrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="120" height="80" viewBox="0 0 120 80" fill="none" aria-hidden>
      <path
        d="M10 70 C40 20, 70 50, 100 25"
        stroke="#000"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="8 6"
      />
      <path d="M92 22 L102 26 L96 34" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Top-left hero arrow: dot + accent curl + dashed curve → portrait */
export function DoodleHeroDashedArrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="118" height="118" viewBox="0 0 118 118" fill="none" aria-hidden>
      <circle cx="100" cy="16" r="5" fill="#000" />
      <path
        d="M94 26 C90 20 84 18 78 22"
        stroke="#000"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M94 20 C68 10 30 28 16 68 C12 84 18 98 32 104"
        stroke="#000"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="9 7"
      />
      <path
        d="M24 92 L32 106 L42 98"
        stroke="#000"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Staggered handwritten callout on the hero blob */
export function DoodleHeroBlobCallout({
  lines,
  className,
}: {
  lines: [string, string, string];
  className?: string;
}) {
  return (
    <div className={cn("relative w-[190px] select-none sm:w-[210px]", className)}>
      {/* clover + sparkle above first line */}
      <svg
        className="absolute -left-1 -top-4"
        width="26"
        height="18"
        viewBox="0 0 22 16"
        fill="none"
        aria-hidden
      >
        <circle cx="5" cy="8" r="3.2" fill="#111" />
        <circle cx="10" cy="5" r="3.2" fill="#111" />
        <circle cx="10" cy="11" r="3.2" fill="#111" />
        <path
          d="M17 2 v3 M17 11 v3 M13.5 6.5 h3 M20.5 6.5 h3"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      <div className="font-hand text-[1.85rem] font-bold leading-[1.1] text-foreground sm:text-[2.05rem]">
        <p>{lines[0]}</p>
        <p className="ml-7">{lines[1]}</p>
        <p className="ml-14">{lines[2]}</p>
      </div>
    </div>
  );
}

/** Curved swoosh — placed separately on the blob */
export function DoodleHeroBlobSwoosh({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-[78px] sm:w-[86px]", className)}
      viewBox="0 0 78 36"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 28 C24 6 48 4 68 12"
        stroke="#111"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="68" cy="12" r="4.5" fill="#111" />
      <circle cx="10" cy="32" r="2.5" fill="#111" />
      <circle cx="18" cy="32" r="2" fill="#111" />
    </svg>
  );
}

/** Curved arrow outside the blob, pointing toward the callout / portrait */
export function DoodleHeroBlobOutsideArrow({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-[100px] sm:w-[118px]", className)}
      viewBox="0 0 118 52"
      fill="none"
      aria-hidden
    >
      <path
        d="M102 8 C72 10 42 28 12 44"
        stroke="#111"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 44 L6 40 L8 48"
        stroke="#111"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Solid curved arrow for "Building Smarter Solutions" callout */
export function DoodleHeroCalloutArrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="82" height="64" viewBox="0 0 82 64" fill="none" aria-hidden>
      <path
        d="M8 52 C24 48 48 34 64 14"
        stroke="#000"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M58 10 L68 14 L64 24"
        stroke="#000"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Top-right sketch cluster: squiggle + circle + dots */
export function DoodleHeroSquiggleCluster({ className }: { className?: string }) {
  return (
    <svg className={className} width="62" height="42" viewBox="0 0 62 42" fill="none" aria-hidden>
      <path
        d="M4 24 Q16 8 30 18 T54 12"
        stroke="#000"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="56" cy="11" r="4.5" fill="#000" />
      <circle cx="48" cy="32" r="2.5" fill="#000" />
      <circle cx="58" cy="28" r="2" fill="#000" />
    </svg>
  );
}

/** Soft organic corner blob — bottom-left hero accent */
export function DoodleHeroCornerBlob({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-auto w-[clamp(150px,20vw,280px)]", className)}
      viewBox="0 0 440 360"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMinYMax meet"
    >
      <path
        d="M0 360 V115 C0 52 88 18 210 42 C330 66 410 168 440 360 H0 Z"
        fill="#FFF3C4"
      />
    </svg>
  );
}

export function DoodleDotGrid({ className }: { className?: string }) {
  const cols = 9;
  const rows = 14;
  const gap = 18;
  const r = 2;
  // triangular mask: only render dot if col <= row * (cols/rows) roughly
  const dots: { cx: number; cy: number }[] = [];
  for (let row = 0; row < rows; row++) {
    const maxCol = Math.round((row / (rows - 1)) * (cols - 1));
    for (let col = 0; col <= maxCol; col++) {
      dots.push({ cx: col * gap + r + 4, cy: row * gap + r + 4 });
    }
  }
  const w = (cols - 1) * gap + 2 * r + 8;
  const h = (rows - 1) * gap + 2 * r + 8;
  return (
    <svg className={className} width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={r} fill="#000000" opacity="0.85" />
      ))}
    </svg>
  );
}

export function DoodleHighlight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 8" fill="none" preserveAspectRatio="none" aria-hidden>
      <path
        d="M2 6 Q30 1, 60 5 T118 4"
        stroke="#FFC83D"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function NavSquiggle({ className }: { className?: string }) {
  return (
    <svg className={className} width="72" height="12" viewBox="0 0 72 12" fill="none" aria-hidden>
      {/* full line */}
      <line x1="0" y1="6" x2="72" y2="6" stroke="#FFC83D" strokeWidth="4" strokeLinecap="round" />
      {/* center square */}
      <rect x="28" y="1" width="16" height="10" rx="2" fill="#FFC83D" />
    </svg>
  );
}
