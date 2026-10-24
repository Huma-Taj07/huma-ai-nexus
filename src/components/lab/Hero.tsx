import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { hero, socialLinks } from "@/content/lab";
import { Float, Reveal } from "./motion";
import { Section } from "./Section";
import {
  DoodleDotGrid,
  DoodleHeroCornerBlob,
  DoodleGreetingUnderline,
  DoodleHeroBlobCallout,
  DoodleHeroBlobSwoosh,
  DoodleHeroSquiggleCluster,
  DoodleHighlight,
  DoodleSparkleRadiating,
} from "./shapes";

function SocialIcon({ label }: { label: string }) {
  const cls = "size-[17px]";
  if (label === "LinkedIn") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (label === "GitHub") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    );
  }
  return (
    <svg
      className={cls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <Section id="top" shell="hero">
      <DoodleHeroCornerBlob className="pointer-events-none absolute bottom-0 left-0 z-0" />
      <DoodleDotGrid className="pointer-events-none absolute left-2 top-1/2 z-[1] hidden -translate-y-1/2 lg:block xl:left-4" />

      <div className="relative z-[1] flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
        <div className="w-full shrink-0 lg:max-w-[52%] lg:pl-36 xl:max-w-[54%] xl:pl-44">
          <Reveal>
            <div className="relative inline-flex items-start gap-2">
              <div className="relative">
                {/* hand-drawn yellow lines above — animate draw-in */}
                <svg className="absolute -left-1 -top-5" width="38" height="18" viewBox="0 0 38 18" fill="none" aria-hidden>
                  <motion.path
                    d="M2 5 Q10 2 18 4 T34 3"
                    stroke="#f5a800" strokeWidth="2.2" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  />
                  <motion.path
                    d="M6 13 Q14 10 22 12 T36 11"
                    stroke="#f5a800" strokeWidth="2.2" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
                <p className="font-hand text-[2.2rem] leading-none tracking-wide text-foreground sm:text-[2.5rem]">
                  {hero.greeting}
                </p>
                {/* underline draws in */}
                <svg className="mt-1.5" width="72" height="6" viewBox="0 0 72 6" fill="none" aria-hidden>
                  <motion.path
                    d="M2 4 Q18 1 36 3 T70 2"
                    stroke="#f5a800" strokeWidth="2.5" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
                  />
                </svg>
              </div>
              {/* sparkle pulses */}
              <motion.div
                className="mt-0.5"
                animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <DoodleSparkleRadiating />
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display mt-2 inline-flex items-end gap-2 text-[clamp(3.5rem,7.5vw,5.8rem)] font-extrabold leading-[1.02] tracking-[0.02em]">
              {hero.name}
              <span
                className="mb-3 inline-block shrink-0 rounded-full bg-yellow"
                style={{ width: "0.28em", height: "0.28em" }}
              />
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display mt-3 text-[1.75rem] font-bold tracking-wide text-yellow sm:text-[1.95rem]">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 max-w-[32rem] text-[18px] leading-[1.8] tracking-wide text-muted-foreground sm:text-[19px]">
              I build intelligent systems that combine Artificial Intelligence, Computer Vision and
              Scalable Backend Architecture to solve{" "}
              <span className="relative inline-block whitespace-nowrap">
                real-world problems
                <DoodleHighlight className="absolute -bottom-0.5 left-0 h-2 w-full" />
              </span>{" "}
              and create meaningful impact.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-stretch gap-4">
              {/* Primary button */}
              <motion.a
                href={hero.ctaWork.href}
                whileHover={{ y: -3, scale: 1.03, boxShadow: "0 8px 24px -6px rgba(245,168,0,0.45)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex h-14 items-center gap-3 rounded-full bg-yellow pl-7 pr-2.5 text-[17px] font-bold text-foreground"
              >
                {hero.ctaWork.label}
                <span className="flex size-10 items-center justify-center rounded-full bg-white">
                  <ArrowRight className="size-5 stroke-[2.5]" />
                </span>
              </motion.a>
              {/* Secondary button — same height h-14 */}
              <motion.a
                href={hero.ctaResume.href}
                whileHover={{ y: -3, scale: 1.03, boxShadow: "0 8px 24px -6px rgba(17,17,17,0.1)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex h-14 items-center gap-2.5 rounded-full border-2 border-foreground/12 bg-white px-7 text-[17px] font-bold text-foreground"
              >
                <Download className="size-5 stroke-[2.5]" />
                {hero.ctaResume.label}
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-7 flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0.5, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 280, damping: 16 }}
                  whileHover={{ y: -5, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative flex size-14 items-center justify-center rounded-full border-2 border-border bg-white text-foreground transition-colors duration-200 hover:border-yellow hover:text-yellow"
                >
                  {/* spinning yellow ring on hover */}
                  <motion.span
                    className="pointer-events-none absolute inset-[-3px] rounded-full border-2 border-transparent border-t-yellow opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  />
                  <SocialIcon label={link.label} />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          delay={0.15}
          className="relative shrink-0 -ml-24 lg:-ml-36 xl:-ml-44 mr-8 lg:mr-14 xl:mr-24"
        >

          {/* ── hand-drawn arrow — left (just outside blob) ── */}
          <Float className="absolute -left-[30%] top-[18%] z-10 hidden lg:block xl:-left-[32%] xl:top-[20%]" y={7} duration={4.5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <img
                src="/right-arrow-transparent.png"
                alt=""
                aria-hidden
                className="w-[110px] select-none xl:w-[130px]"
              />
            </motion.div>
          </Float>

          {/* ── hand-drawn arrow — right (just outside blob, mirrored) ── */}
          <Float className="absolute -right-[30%] top-[18%] z-10 hidden lg:block xl:-right-[32%] xl:top-[20%]" y={6} duration={4.8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <img
                src="/right-arrow-transparent.png"
                alt=""
                aria-hidden
                className="w-[110px] select-none -scale-x-100 xl:w-[130px]"
              />
            </motion.div>
          </Float>

          {/* ── yellow blob + photo ── */}
          <Float y={10} duration={5}>
            <div
              className="relative overflow-visible"
              style={{
                width: "clamp(340px, 42vw, 540px)",
                height: "clamp(520px, 72vh, 680px)",
              }}
            >
              {/* yellow blob with detached outline: outline → cream gap → blob */}
              <div
                className="pointer-events-none absolute left-1/2 top-[52%] z-[1] -translate-x-1/2 -translate-y-1/2"
                style={{ width: "148%", height: "108%" }}
              >
                {/* outline ring (back, largest) — same shape, yellow */}
                <img
                  src="/background-image.png"
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full select-none"
                  style={{
                    objectFit: "fill",
                    transform: "scaleX(1.12) scaleY(0.94) scale(1.052)",
                    transformOrigin: "center center",
                  }}
                />
                {/* cream gap (middle) — same shape tinted to page background */}
                <img
                  src="/background-image.png"
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full select-none"
                  style={{
                    objectFit: "fill",
                    filter: "brightness(0) invert(1)",
                    transform: "scaleX(1.12) scaleY(0.94) scale(1.038)",
                    transformOrigin: "center center",
                  }}
                />
                {/* main blob (front) — actual yellow shape */}
                <img
                  src="/background-image.png"
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full select-none"
                  style={{
                    objectFit: "fill",
                    transform: "scaleX(1.12) scaleY(0.94)",
                    transformOrigin: "center center",
                  }}
                />
              </div>

              {/* portrait — mask aligned to blob; head oval merged in SVG */}
              <svg aria-hidden className="pointer-events-none absolute h-0 w-0">
                <defs>
                  <mask
                    id="hero-portrait-mask"
                    maskUnits="objectBoundingBox"
                    maskContentUnits="objectBoundingBox"
                    style={{ maskType: "alpha" }}
                  >
                    <image
                      href="/background-image.png"
                      width="1"
                      height="1"
                      preserveAspectRatio="none"
                    />
                    <ellipse cx="0.5" cy="-0.06" rx="0.36" ry="0.34" fill="#fff" />
                  </mask>
                </defs>
              </svg>
              <div
                className="pointer-events-none absolute left-1/2 top-[52%] z-[3] -translate-x-1/2 -translate-y-1/2 overflow-visible"
                style={{ width: "148%", height: "108%" }}
              >
                <div
                  className="absolute inset-0 overflow-visible"
                  style={{
                    transform: "scaleX(1.12) scaleY(0.94)",
                    transformOrigin: "center center",
                    WebkitMask: "url(#hero-portrait-mask)",
                    mask: "url(#hero-portrait-mask)",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                  }}
                >
                  <img
                    src="/profile.png"
                    alt="Huma Taj"
                    className="absolute bottom-0 left-1/2 h-[128%] w-[112%] max-w-none -translate-x-1/2 object-cover object-[50%_16%]"
                  />
                </div>
              </div>
              {/* callout text on blob — right side */}
              <Float className="absolute left-[65%] top-[17%] z-10 hidden lg:block xl:left-[73%] xl:top-[19%]" y={5} duration={4.2}>
                <motion.div
                  className="relative rotate-[4deg]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <DoodleHeroBlobCallout
                    lines={hero.doodle.split(" ") as [string, string, string]}
                  />
                  <DoodleHeroSquiggleCluster className="ml-14 mt-3" />
                </motion.div>
              </Float>

              {/* curved swoosh — left side of blob, clear of portrait */}
              <Float className="absolute bottom-[24%] -left-[4%] z-10 hidden lg:block xl:bottom-[26%] xl:-left-[6%]" y={6} duration={4.5}>
                <motion.div
                  className="relative -rotate-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <DoodleHeroBlobSwoosh />
                </motion.div>
              </Float>
            </div>
          </Float>

          {/* shape design — directly under blob bottom-right, outside on cream */}
          <Float className="absolute left-[62%] -bottom-[6%] z-10 hidden lg:block xl:left-[65%] xl:-bottom-[4%]" y={5} duration={4.1}>
            <motion.div
              className="relative rotate-[6deg]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
            >
              <img
                src="/shap-design.png"
                alt=""
                aria-hidden
                className="w-[130px] select-none xl:w-[150px]"
                style={{ mixBlendMode: "screen" }}
              />
            </motion.div>
          </Float>

          {/* ── yellow doodles: circle + zigzag + dot (vertical, outside blob) ── */}
          <Float className="absolute -right-[32%] bottom-[14%] z-10 hidden lg:block xl:-right-[34%] xl:bottom-[16%]" y={6} duration={3.8}>
            <motion.svg
              width="55" height="130" viewBox="0 0 55 130" fill="none" aria-hidden
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <circle cx="27" cy="18" r="10" stroke="#f5a800" strokeWidth="3" fill="none" />
              <path
                d="M27 44 L17 60 L27 76 L37 60 L27 92"
                stroke="#f5a800"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="27" cy="108" r="8" fill="#f5a800" />
            </motion.svg>
          </Float>

        </Reveal>
      </div>
    </Section>
  );
}
