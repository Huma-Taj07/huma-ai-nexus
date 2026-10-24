import { Award, BrainCircuit, Code2, TrendingUp, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { certifications } from "@/content/lab";
import { cn } from "@/lib/utils";
import { FadeIn, Float } from "./motion";
import { Section } from "./Section";
import { DoodleHighlight, DoodleSparkleRadiating, DoodleStar, DoodleDotGrid } from "./shapes";

const marqueeItems = [...certifications, ...certifications];

const highlights = [
  {
    Icon: Award,
    line1: "5+",
    line2: "Certifications",
    subtitle: "Across AI & Development",
  },
  {
    Icon: BrainCircuit,
    line1: "AI",
    line2: "Focused",
    subtitle: "Specialized in AI & ML",
  },
  {
    Icon: Code2,
    line1: "Practical",
    line2: "Learning",
    subtitle: "Hands-on Real Projects",
  },
  {
    Icon: TrendingUp,
    line1: "Continuous",
    line2: "Growth",
    subtitle: "Always learning, always improving",
  },
] as const;

const stackLayers = [
  {
    image: "/certification/flutter-dart.png",
    rotate: 14,
    left: "30%",
    top: "16%",
    width: "58%",
    delay: 0.35,
  },
  {
    image: "/certification/prompt-engineering.png",
    rotate: 10,
    left: "26%",
    top: "12%",
    width: "60%",
    delay: 0.45,
  },
  {
    image: "/certification/artificial-intelligence.png",
    rotate: 6,
    left: "22%",
    top: "8%",
    width: "62%",
    delay: 0.55,
  },
  {
    image: "/certification/generative-ai.png",
    rotate: 3,
    left: "18%",
    top: "4%",
    width: "64%",
    delay: 0.65,
  },
] as const;

const certHeadingSparkPaths = ["M4 18 L10 4", "M14 18 L20 4", "M24 18 L30 4"] as const;

function CertHeadingSparkMarks() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="pointer-events-none absolute -right-4 -top-3 block"
      initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
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
        {certHeadingSparkPaths.map((d, index) => (
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

function CertHeaderArrow() {
  const reduceMotion = useReducedMotion();

  return (
    <Float
      className="pointer-events-none absolute left-32 bottom-0 z-0 translate-y-2 sm:left-44 sm:translate-y-3 lg:left-52"
      duration={3.4}
      y={5}
    >
      <motion.img
        src="/certificate-arrow.png"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="h-16 w-auto max-w-none object-contain object-left-bottom sm:h-20 lg:h-24"
        initial={{
          opacity: reduceMotion ? 1 : 0,
          scale: reduceMotion ? 1 : 0.85,
          x: reduceMotion ? 0 : -14,
          y: reduceMotion ? 0 : 10,
        }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 8, 0],
              }
        }
        {...(reduceMotion
          ? {}
          : {
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                x: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
              },
            })}
      />
    </Float>
  );
}

function CertStack() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-lg overflow-visible">
      {/* Yellow blob only — sized independently from the certificate stack */}
      <div className="pointer-events-none absolute left-1/2 top-[58%] z-0 -translate-x-1/2 -translate-y-1/2">
        <Float duration={5.5} y={6}>
          <motion.img
            src="/certfificate-shape.png"
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="h-auto w-[28rem] max-w-none origin-center scale-x-[1.05] scale-y-[0.78] sm:w-[42rem] lg:w-[46rem]"
            initial={{ opacity: reduceMotion ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </Float>
      </div>

      <motion.div
        className="absolute -left-1 top-4 z-0"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        animate={reduceMotion ? undefined : { rotate: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
        {...(reduceMotion
          ? {}
          : { transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 } })}
      >
        <DoodleSparkleRadiating />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <DoodleDotGrid className="absolute bottom-2 right-0 z-0 w-20 opacity-70" />
      </motion.div>

      <Float className="absolute bottom-8 left-0 z-0" duration={3.8} y={5}>
        <DoodleStar className="size-5" />
      </Float>

      <div className="relative z-10 min-h-[19rem] px-4 py-8 sm:min-h-[21rem] sm:px-8 sm:py-10">
        {stackLayers.map((layer, index) => (
          <motion.img
            key={layer.image}
            src={layer.image}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="absolute origin-center rounded-lg border border-border/80 bg-white shadow-md"
            style={{
              left: layer.left,
              top: layer.top,
              width: layer.width,
              zIndex: index + 1,
            }}
            initial={{
              opacity: reduceMotion ? 1 : 0,
              rotate: reduceMotion ? layer.rotate : layer.rotate - 10,
              y: reduceMotion ? 0 : 24,
            }}
            whileInView={{
              opacity: 1,
              rotate: layer.rotate,
              y: 0,
            }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : layer.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        <Float duration={4.5} y={8}>
          <motion.img
            src="/certification/deep-learning.png"
            alt="Featured certificate"
            loading="lazy"
            decoding="async"
            className="relative z-10 mx-auto w-[88%] max-w-[22rem] rounded-lg border border-border bg-white shadow-xl sm:w-[84%]"
            initial={{
              opacity: reduceMotion ? 1 : 0,
              y: reduceMotion ? 0 : 32,
              rotate: reduceMotion ? -2 : -8,
            }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </Float>
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" className="relative overflow-visible">
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-80 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-soft-yellow/40"
        aria-hidden
      />

      {/* header */}
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <FadeIn direction="left" className="lg:ml-40 xl:ml-52">
          <div className="relative pb-16 sm:pb-20">
            <CertHeaderArrow />

            <div className="relative z-10">
              <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.01em]">
                <span className="block">My</span>
                <span className="relative mt-0.5 inline-block text-yellow">
                  <CertHeadingSparkMarks />
                  Certifications
                  <DoodleHighlight className="absolute -bottom-1 left-0 h-2 w-[82%]" />
                </span>
              </h2>
              <p className="mt-6 max-w-md text-[17px] leading-[1.85] text-muted-foreground">
                A collection of my professional certifications and achievements that reflect my
                commitment to continuous learning and growth.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.1} className="overflow-visible">
          <CertStack />
        </FadeIn>
      </div>

      {/* auto-scrolling carousel */}
      <FadeIn delay={0.1} className="mt-14">
        <div className="group marquee-mask relative overflow-hidden">
          <ul
            className="animate-marquee flex w-max group-hover:[animation-play-state:paused]"
            style={{ "--marquee-duration": "45s" } as React.CSSProperties}
          >
            {marqueeItems.map((cert, i) => (
              <li key={`${cert.title}-${i}`} className="mr-6 w-[22rem] shrink-0 sm:w-[26rem]">
                <div className="card-shadow group/card overflow-hidden rounded-2xl border border-border bg-white transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="flex h-60 items-center justify-center overflow-hidden bg-white p-1.5 sm:h-72">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover/card:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3 p-5">
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <h3 className="font-display mt-1.5 truncate text-base font-bold">
                        {cert.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-soft-yellow px-3 py-1 text-xs font-bold text-foreground">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* highlight strip */}
      <FadeIn delay={0.15} className="mt-12">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[1.35rem] border border-black/[0.06] bg-[#fffbf2] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ Icon, line1, line2, subtitle }, index) => (
              <div
                key={line2}
                className={cn(
                  "flex items-center gap-5 px-6 py-8 sm:px-5 lg:gap-6 lg:px-7 lg:py-9",
                  index > 0 && "border-t border-black/[0.07] sm:border-t-0",
                  index % 2 === 1 && "sm:border-l sm:border-black/[0.07]",
                  index >= 2 && "sm:border-t sm:border-black/[0.07] lg:border-t-0",
                  index > 0 && "lg:border-l lg:border-black/[0.07]",
                )}
              >
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#ffecc8] text-[#c45c00] sm:size-[4.25rem]">
                  <Icon className="size-9 stroke-[1.75]" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[1.05rem] font-extrabold leading-[1.15] tracking-[-0.01em] text-foreground">
                    {line1}
                  </p>
                  <p className="font-display text-[1.05rem] font-extrabold leading-[1.15] tracking-[-0.01em] text-foreground">
                    {line2}
                  </p>
                  <p className="mt-2 text-[13px] leading-snug text-muted-foreground">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* closing CTA */}
      <FadeIn delay={0.2} className="mt-14">
        <div className="relative text-center">
          <DoodleStar className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-7" />
          <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
            Learning <span className="text-yellow">never</span> stops.
          </h3>
          <p className="mt-2 text-[15px] text-muted-foreground">
            Let&apos;s build something amazing together.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-6 inline-flex h-12 items-center gap-3 rounded-full bg-foreground pl-6 pr-2.5 text-[15px] font-bold text-background"
          >
            Contact Me
            <span className="flex size-8 items-center justify-center rounded-full bg-yellow text-foreground">
              <ArrowRight className="size-4 stroke-[2.5]" />
            </span>
          </motion.a>
        </div>
      </FadeIn>
    </Section>
  );
}
