import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, FolderOpen, GraduationCap, Users } from "lucide-react";
import { about } from "@/content/lab";
import { Section } from "./Section";
import { Float } from "./motion";
import { DoodleHighlight, DoodleSparkle } from "./shapes";

const statIcons = {
  briefcase: Briefcase,
  folder: FolderOpen,
  cap: GraduationCap,
  users: Users,
} as const;

type AboutStat = (typeof about.stats)[number];

const aboutHeadingSparkPaths = ["M4 18 L10 4", "M14 18 L20 4", "M24 18 L30 4"] as const;

const descriptionSentences = about.description.match(/[^.!?]+[.!?]+/g) ?? [about.description];

function AboutHeadingSparkMarks() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="pointer-events-none absolute -left-1 -top-5 sm:-top-6"
      initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
      {...(reduceMotion
        ? {}
        : {
            transition: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            },
          })}
    >
      <svg width="34" height="20" viewBox="0 0 34 20" fill="none" aria-hidden>
        {aboutHeadingSparkPaths.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            stroke="#F5A800"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              pathLength: {
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion ? 0 : 0.15 + index * 0.12,
                ease: "easeOut",
              },
              opacity: {
                duration: reduceMotion ? 0 : 0.2,
                delay: reduceMotion ? 0 : 0.1 + index * 0.12,
              },
            }}
          />
        ))}
      </svg>
    </motion.span>
  );
}

function AboutIntro({ reduceMotion }: { reduceMotion: boolean | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative">
      <div className="pointer-events-none absolute -left-6 top-8 hidden opacity-60 lg:block">
        <Float y={4} duration={3.5}>
          <DoodleSparkle className="h-5 w-7" />
        </Float>
      </div>

      <div className="relative">
        <motion.h2
          className="font-display text-[clamp(2.75rem,6vw,4.25rem)] font-extrabold leading-[0.95] tracking-[-0.03em]"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.08 } },
          }}
        >
          <motion.span
            className="relative block text-foreground"
            variants={{
              hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <AboutHeadingSparkMarks />
            {about.titleTop}
          </motion.span>
          <motion.span
            className="relative mt-1 inline-block text-yellow"
            variants={{
              hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {about.titleBottom}
            <motion.span
              initial={{ scaleX: reduceMotion ? 1 : 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-1 left-0 block h-2 w-full origin-left"
            >
              <DoodleHighlight className="h-full w-full" />
            </motion.span>
          </motion.span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: reduceMotion ? 1 : 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 h-[4px] w-20 origin-left rounded-full bg-gradient-to-r from-yellow to-yellow/30"
        />
      </div>

      <motion.div
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-8 max-w-xl overflow-hidden rounded-[1.35rem] border border-black/[0.06] bg-white p-6 shadow-[0_10px_32px_rgba(17,17,17,0.07)] sm:p-7"
      >
        <motion.div
          initial={{ scaleY: reduceMotion ? 1 : 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-4 left-0 top-4 w-1 origin-top rounded-full bg-gradient-to-b from-yellow via-[#ffc83d] to-yellow/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-soft-yellow/50 blur-2xl"
          aria-hidden
        />

        <div className="relative pl-4">
          {descriptionSentences.map((sentence, index) => (
            <motion.p
              key={index}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : 0.42 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[15px] font-semibold leading-[1.85] text-foreground sm:text-[16px] [&+&]:mt-4"
            >
              {sentence.trim()}
            </motion.p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: reduceMotion ? 0 : 0.07, delayChildren: 0.55 } },
        }}
        className="mt-5 flex max-w-xl flex-wrap gap-2.5"
      >
        {about.focusAreas.map((area) => (
          <motion.span
            key={area}
            variants={{
              hidden: { opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.88, y: reduceMotion ? 0 : 10 },
              show: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: "spring", stiffness: 380, damping: 22 },
              },
            }}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -2, transition: { type: "spring", stiffness: 400, damping: 18 } }
            }
            className="rounded-full border border-yellow/20 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-foreground shadow-[0_2px_10px_rgba(245,168,0,0.08)]"
          >
            {area}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setCount(value);
      return;
    }
    const start = performance.now();
    const duration = 1500;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function AboutStatCard({
  stat,
  index,
  reduceMotion,
}: {
  stat: AboutStat;
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = statIcons[stat.icon];

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: reduceMotion ? 1 : 0,
          y: reduceMotion ? 0 : 28,
          scale: reduceMotion ? 1 : 0.94,
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              transition: { type: "spring", stiffness: 380, damping: 22 },
            }
      }
      className="group relative overflow-hidden rounded-[1.35rem] border border-black/[0.06] bg-white p-5 shadow-[0_8px_28px_rgba(17,17,17,0.06)] sm:p-6"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-yellow/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-soft-yellow/0 via-transparent to-yellow/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <motion.div
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-yellow via-[#ffc83d] to-yellow/40"
        initial={{ scaleX: reduceMotion ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          delay: reduceMotion ? 0 : 0.15 + index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      <div className="relative flex items-center gap-4">
        <div className="relative shrink-0">
          {!reduceMotion && (
            <motion.span
              className="absolute inset-0 rounded-2xl border-2 border-yellow/35"
              animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0, 0.45] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }}
              aria-hidden
            />
          )}
          <motion.span
            className="relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff8e8] to-[#ffecc8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:size-[3.75rem]"
            whileHover={
              reduceMotion
                ? undefined
                : { rotate: [0, -6, 6, 0], transition: { duration: 0.45 } }
            }
          >
            <Icon className="size-6 stroke-yellow sm:size-7" strokeWidth={2} />
          </motion.span>
        </div>

        <div className="min-w-0">
          <p className="font-display text-[1.75rem] font-extrabold leading-none tracking-tight text-foreground sm:text-[2rem]">
            <StatCounter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-2 text-sm font-bold leading-snug text-foreground">{stat.label}</p>
          <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{stat.sub}</p>
        </div>
      </div>
    </motion.div>
  );
}

function AboutStatsGrid({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.08,
            delayChildren: reduceMotion ? 0 : 0.05,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="relative mt-12 lg:mt-14"
    >
      <motion.div
        initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-[2rem] bg-gradient-to-r from-yellow/10 via-transparent to-yellow/10 blur-xl sm:-inset-x-6"
        aria-hidden
      />

      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {about.stats.map((stat, index) => (
          <AboutStatCard key={stat.label} stat={stat} index={index} reduceMotion={reduceMotion} />
        ))}
      </div>
    </motion.div>
  );
}

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="about" className="relative bg-[#fffbf2]">
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-[2in] xl:px-[2in]">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* LEFT — copy */}
          <AboutIntro reduceMotion={reduceMotion} />

          {/* RIGHT — animated illustration */}
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.img
              src={about.robotImage}
              alt="AI developer robot illustration"
              loading="lazy"
              decoding="async"
              initial={reduceMotion ? undefined : { scale: 0.94 }}
              whileInView={reduceMotion ? undefined : { scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-3xl object-contain sm:max-w-4xl lg:max-w-5xl"
            />
          </motion.div>
        </div>

        <AboutStatsGrid reduceMotion={reduceMotion} />
      </div>
    </Section>
  );
}
