import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = { className?: string };

const CX = 120;
const CY = 124;

/** ~18% larger than original orbit — fits viewBox with margin. */
const rings = [
  { rx: 109, ry: 21, stroke: "ring-grad", strokeWidth: 1.45, opacity: 0.85, lit: 0.13, dur: 22, dir: -1 as const },
  { rx: 85, ry: 16, stroke: "#c4b5fd", strokeWidth: 0.95, opacity: 0.45, lit: 0.11, dur: 18, dir: 1 as const },
  { rx: 64, ry: 13, stroke: "#ede9fe", strokeWidth: 0.75, opacity: 0.55, lit: 0.1, dur: 14, dir: -1 as const },
  { rx: 43, ry: 9, stroke: "#a78bfa", strokeWidth: 1.25, opacity: 0.9, lit: 0.15, dur: 11, dir: 1 as const },
] as const;

/** Holographic envelope + orbit rings. Motion uses stroke-dashoffset along ellipses (horizontal track, no tumbling). */
export function ContactEnvelopeOrbit({ className }: Props) {
  const reactId = useId();
  const uid = reactId.replace(/:/g, "");
  const reduceMotion = useReducedMotion();

  const floatDuration = 3.4;
  const pulseDuration = 2.8;

  const strokeRef = (ref: string) =>
    ref === "ring-grad" ? `url(#${uid}-ring)` : ref;

  return (
    <div
      className={`relative mx-auto h-34 w-full max-w-[272px] overflow-visible sm:h-36 ${className ?? ""}`}
      aria-hidden
    >
      <svg viewBox="0 0 240 168" className="h-full w-full overflow-visible">
        <defs>
          <filter id={`${uid}-bloom`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`${uid}-soft`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id={`${uid}-neon`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="45%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id={`${uid}-ring`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id={`${uid}-core`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#faf5ff" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#a78bfa" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#5b21b6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${uid}-floor`} cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#6d28d9" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
          </radialGradient>
        </defs>

        {[
          [38, 28, 1.2],
          [196, 34, 0.9],
          [52, 52, 0.8],
          [208, 58, 1.1],
          [28, 72, 0.7],
          [220, 78, 0.85],
          [180, 22, 0.65],
          [60, 18, 0.75],
        ].map(([cx0, cy0, r], i) => (
          <motion.circle
            key={`${cx0}-${cy0}`}
            cx={cx0}
            cy={cy0}
            r={r}
            fill="#e9d5ff"
            initial={{ opacity: 0.25 }}
            animate={
              reduceMotion
                ? { opacity: 0.45 }
                : { opacity: [0.2, 0.95, 0.35, 0.75, 0.2] }
            }
            transition={{
              duration: 3.5 + i * 0.35,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
              delay: i * 0.22,
            }}
          />
        ))}

        {/* Ground bloom — scaled wider */}
        <ellipse cx={CX} cy="128" rx="118" ry="26" fill={`url(#${uid}-floor)`} opacity="0.9" />

        {/* Dashed ring — dash travels along ellipse */}
        <motion.ellipse
          cx={CX}
          cy={CY}
          rx={92}
          ry={19}
          fill="none"
          stroke="#a78bfa"
          strokeWidth="0.55"
          strokeDasharray="0.03 0.07"
          strokeOpacity="0.45"
          pathLength={1}
          animate={reduceMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: [0, -1] }}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 16, repeat: Infinity, ease: "linear" }
          }
        />

        {/* Main orbit stack */}
        <g>
          {rings.map((ring) => {
            const gap = 1 - ring.lit;
            const sweep = ring.dir;
            return (
              <motion.ellipse
                key={`${ring.rx}-${ring.ry}`}
                cx={CX}
                cy={CY}
                rx={ring.rx}
                ry={ring.ry}
                fill="none"
                stroke={strokeRef(ring.stroke)}
                strokeWidth={ring.strokeWidth}
                opacity={ring.opacity}
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray={`${ring.lit} ${gap}`}
                animate={
                  reduceMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: [0, sweep * 1] }
                }
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: ring.dur, repeat: Infinity, ease: "linear" }
                }
              />
            );
          })}
        </g>

        <motion.ellipse
          cx="120"
          cy="118"
          rx="28"
          ry="10"
          fill={`url(#${uid}-core)`}
          animate={reduceMotion ? { opacity: 0.65 } : { opacity: [0.45, 0.85, 0.5] }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: pulseDuration, repeat: Infinity, ease: "easeInOut" }
          }
        />

        <motion.g
          filter={`url(#${uid}-bloom)`}
          style={{ transformOrigin: "120px 62px" }}
          animate={reduceMotion ? { y: 0 } : { y: [0, -9, 0] }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: floatDuration, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <motion.g
            animate={reduceMotion ? { opacity: 1 } : { opacity: [0.88, 1, 0.9] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: pulseDuration * 0.9, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <path
              d="M72 44h96c3.5 0 6 2.6 6 6v40c0 3.4-2.5 6-6 6H72c-3.5 0-6-2.6-6-6V50c0-3.4 2.5-6 6-6z"
              fill="rgba(139,92,246,0.12)"
              stroke={`url(#${uid}-neon)`}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M72 44l48 34 48-34"
              fill="none"
              stroke={`url(#${uid}-neon)`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            />
          </motion.g>
        </motion.g>

        <motion.g
          pointerEvents="none"
          animate={reduceMotion ? { y: 0 } : { y: [0, -9, 0] }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: floatDuration, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <path
            d="M72 44h96c3.5 0 6 2.6 6 6v40c0 3.4-2.5 6-6 6H72c-3.5 0-6-2.6-6-6V50c0-3.4 2.5-6 6-6z"
            fill="none"
            stroke="#e9d5ff"
            strokeWidth="1"
            strokeOpacity="0.35"
            filter={`url(#${uid}-soft)`}
          />
        </motion.g>
      </svg>
    </div>
  );
}
