import { motion } from "framer-motion";
import type { SimpleIcon } from "simple-icons";
import {
  siDocker,
  siDjango,
  siFastapi,
  siGooglegemini,
  siHuggingface,
  siLangchain,
  siMake,
  siMongodb,
  siN8n,
  siNodedotjs,
  siOpencv,
  siOpenrouter,
  siPostgresql,
  siPython,
  siReact,
  siReddit,
  siRedis,
  siTensorflow,
  siZapier,
} from "simple-icons";

function BrandGlyph({ icon, className }: { icon: SimpleIcon; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill={`#${icon.hex}`}>
      <path d={icon.path} />
    </svg>
  );
}

const apifyMark: SimpleIcon = {
  title: "Apify",
  slug: "apify",
  hex: "00D4AA",
  path: "M11.2 4.2h1.6l4.8 15.6h-1.85L14.4 14H9.6L6.65 19.8H4.8L11.2 4.2Zm-.1 3.15L9.15 12.2h4.5L11.1 7.35Z",
  source: "https://apify.com/",
  svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'/>",
};

/** Deterministic wandering paths (px) — feels organic, repeats smoothly. */
const DRIFTS = [
  { x: [0, 42, -18, 52, -8, -34, 0], y: [0, -28, 44, -12, 36, -20, 0], d: 20 },
  { x: [0, -38, 24, -14, 46, -22, 0], y: [0, 32, -44, 18, -26, 40, 0], d: 24 },
  { x: [0, 28, -36, -12, 40, -30, 0], y: [0, 22, -18, 48, -32, -14, 0], d: 21 },
  { x: [0, -22, -48, 16, 32, -10, 0], y: [0, -36, 26, -24, 20, 38, 0], d: 26 },
  { x: [0, 50, -20, -40, 12, 18, 0], y: [0, 18, -30, -22, -46, 28, 0], d: 23 },
  { x: [0, -16, 36, -44, 26, -6, 0], y: [0, -40, 12, 30, -18, 34, 0], d: 22 },
  { x: [0, 34, 14, -52, -20, 24, 0], y: [0, -12, -38, 16, 46, -30, 0], d: 25 },
  { x: [0, -46, -10, 30, -28, 20, 0], y: [0, 24, 50, -32, -10, -36, 0], d: 27 },
  { x: [0, 22, -32, -18, 48, -14, 0], y: [0, 40, -8, -46, 12, -22, 0], d: 21 },
  { x: [0, -30, 48, -24, -12, 16, 0], y: [0, -22, -16, 38, -34, 22, 0], d: 23 },
  { x: [0, 18, -50, 24, -36, 10, 0], y: [0, -46, 8, -20, 32, 28, 0], d: 24 },
  { x: [0, -26, 30, 12, -40, 44, 0], y: [0, 34, -26, -48, 14, -8, 0], d: 26 },
  { x: [0, 44, -8, -28, 20, -36, 0], y: [0, -18, 42, 10, -30, -24, 0], d: 22 },
  { x: [0, -12, -34, 46, -20, 8, 0], y: [0, 48, -12, -26, -40, 18, 0], d: 25 },
  { x: [0, 32, -42, 8, -16, 26, 0], y: [0, -24, 20, -38, 44, -10, 0], d: 20 },
  { x: [0, -48, 20, 36, -30, -8, 0], y: [0, 16, -44, 22, 8, 30, 0], d: 28 },
  { x: [0, 14, 40, -35, -22, 18, 0], y: [0, -32, -20, 38, 26, -14, 0], d: 23 },
  { x: [0, -24, 16, -45, 34, -6, 0], y: [0, 30, -36, 10, -18, 26, 0], d: 22 },
  { x: [0, 46, -16, -12, -38, 24, 0], y: [0, -10, 36, -28, 40, -20, 0], d: 24 },
  { x: [0, -20, 28, -30, 14, 32, 0], y: [0, -34, -8, 46, -24, 12, 0], d: 21 },
];

/** Spread anchors biased toward perimeter so the center diagram stays readable. */
const ANCHORS: { left: string; top: string }[] = [
  { left: "7%", top: "18%" },
  { left: "91%", top: "14%" },
  { left: "5%", top: "62%" },
  { left: "93%", top: "58%" },
  { left: "12%", top: "86%" },
  { left: "88%", top: "82%" },
  { left: "22%", top: "10%" },
  { left: "78%", top: "12%" },
  { left: "16%", top: "42%" },
  { left: "84%", top: "44%" },
  { left: "28%", top: "78%" },
  { left: "72%", top: "74%" },
  { left: "38%", top: "8%" },
  { left: "62%", top: "10%" },
  { left: "10%", top: "30%" },
  { left: "90%", top: "72%" },
  { left: "48%", top: "5%" },
  { left: "52%", top: "88%" },
  { left: "32%", top: "52%" },
  { left: "68%", top: "50%" },
];

const badgeBase =
  "flex size-[2.75rem] items-center justify-center rounded-xl border bg-white/[0.14] shadow-lg shadow-black/40 backdrop-blur-md sm:size-11 border-white/30";

/** Tool badges drift softly within the purple frame — not circular orbits. */
export function HeroTechOrbit({ reduceMotion }: { reduceMotion: boolean }) {
  const tools: SimpleIcon[] = [
    siPython,
    siDjango,
    siFastapi,
    siPostgresql,
    siMongodb,
    siRedis,
    siDocker,
    siReact,
    siNodedotjs,
    siN8n,
    siMake,
    apifyMark,
    siZapier,
    siGooglegemini,
    siOpenrouter,
    siHuggingface,
    siTensorflow,
    siOpencv,
    siLangchain,
    siReddit,
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[1.65rem]" aria-hidden>
      {tools.map((icon, i) => {
        const anchor = ANCHORS[i % ANCHORS.length]!;
        const drift = DRIFTS[i % DRIFTS.length]!;

        if (reduceMotion) {
          return (
            <div
              key={`${icon.slug}-${i}`}
              className="absolute"
              style={{ left: anchor.left, top: anchor.top, transform: "translate(-50%, -50%)" }}
            >
              <div className={badgeBase}>
                <BrandGlyph icon={icon} className="size-4 sm:size-[1.18rem]" />
              </div>
            </div>
          );
        }

        return (
          <div
            key={`${icon.slug}-${i}`}
            className="absolute"
            style={{ left: anchor.left, top: anchor.top, transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              className={badgeBase}
              animate={{ x: drift.x, y: drift.y }}
              transition={{
                duration: drift.d,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.55,
              }}
            >
              <BrandGlyph icon={icon} className="size-4 sm:size-[1.18rem]" />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
