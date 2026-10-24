import { Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { contactInfo } from "@/content/lab";
import { FadeIn } from "./motion";
import { Section } from "./Section";
import { Booking } from "./Booking";

function BrushUnderline({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 16"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M4 11 C50 4 120 3 168 6 C196 8 210 9 216 8 C214 12 150 14 96 13 C58 12 22 14 4 11 Z"
        fill="#F5A800"
      />
    </svg>
  );
}

const headingSparkPaths = [
  "M8 26 L14 10",
  "M20 22 L24 6",
  "M32 24 L40 12",
] as const;

function HeadingSparkMarks() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="pointer-events-none absolute -left-2 bottom-full mb-0.5 block origin-bottom -scale-x-100"
      initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -8 }}
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
      <svg width="46" height="34" viewBox="0 0 46 34" fill="none" aria-hidden>
        {headingSparkPaths.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            stroke="#F5A800"
            strokeWidth="3"
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

function ContactArrowDecoration() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.img
      src="/contact-arrow.png"
      alt=""
      aria-hidden
      loading="lazy"
      decoding="async"
      className="pointer-events-none absolute -left-6 bottom-0 hidden h-80 w-[115%] max-w-none translate-y-16 object-contain object-bottom-left sm:block lg:h-96 lg:translate-y-20"
      initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -12, y: reduceMotion ? 0 : 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      animate={
        reduceMotion
          ? undefined
          : {
              x: [0, 12, 0],
              y: [0, -10, 0],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              x: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }
      }
    />
  );
}

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <Section id="contact" className="relative [&>div]:justify-between [&>div]:pb-13">
      {/* decorative background */}
      <div
        className="pointer-events-none absolute -right-28 -top-16 h-80 w-md rounded-[55%_45%_60%_40%/55%_50%_50%_45%] bg-soft-yellow/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-80 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-soft-yellow/40"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute right-6 top-1/3 hidden lg:block"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        aria-hidden
      >
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 7 }).map((_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={6 + c * 13}
              cy={6 + r * 13}
              r="1.6"
              fill="#111"
              opacity="0.35"
            />
          )),
        )}
      </svg>

      <div className="mx-auto flex min-h-0 w-full flex-1 flex-col justify-center px-6 sm:px-8 lg:px-[2in] xl:px-[2in]">
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <FadeIn direction="left">
            <div className="relative w-full max-w-2xl">
              <ContactArrowDecoration />

              <div className="relative z-10">
            <div className="relative pt-6 sm:pt-8">
              <h2 className="relative font-display text-[clamp(1.65rem,3.4vw,2.55rem)] font-extrabold leading-[1.3] tracking-[0.01em]">
                <span className="relative inline-block">
                  <HeadingSparkMarks />
                  Let&apos;s
                </span>{" "}
                Build Something{" "}
                <span className="relative inline-block">
                  Amazing Together!
                  <BrushUnderline className="absolute -bottom-2 left-0 h-3 w-full" />
                </span>{" "}
                <span className="inline-block">👋</span>
              </h2>
            </div>

            <p className="mt-8 max-w-md text-[17px] leading-[1.85] tracking-[0.02em] text-muted-foreground">
              I&apos;m open to exciting opportunities, research collaborations and impactful
              projects.
            </p>

            <ul className="relative z-10 mt-10 space-y-6 pb-28 sm:pb-32">
              <li className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-yellow text-foreground">
                  <Mail className="size-5" />
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-[17px] font-bold leading-[1.7] tracking-[0.02em] text-foreground hover:text-yellow"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-yellow text-foreground">
                  <Phone className="size-5" />
                </span>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="text-[17px] font-bold leading-[1.7] tracking-[0.02em] text-foreground hover:text-yellow"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-yellow text-foreground">
                  <MapPin className="size-5" />
                </span>
                <span className="text-[17px] font-bold leading-[1.7] tracking-[0.02em] text-foreground">
                  {contactInfo.location}
                </span>
              </li>
            </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="right">
            <Booking />
          </FadeIn>
        </div>
      </div>

      <div className="relative mx-auto flex w-full shrink-0 items-center justify-center gap-5 px-6 pt-8 sm:px-8 lg:px-[2in] xl:px-[2in]">
        <span className="hidden h-px min-w-0 flex-1 bg-border sm:block" />
        <p className="flex shrink-0 items-center gap-2.5 text-base text-muted-foreground">
          © {year} Huma Taj. All rights reserved.
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 21s-8-5.5-8-11a5 5 0 019-3 5 5 0 019 3c0 5.5-8 11-8 11z"
              stroke="#F5A800"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </p>
        <span className="hidden h-px min-w-0 flex-1 bg-border sm:block" />
      </div>
    </Section>
  );
}
