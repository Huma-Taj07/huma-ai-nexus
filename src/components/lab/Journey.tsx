import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { journeyStops } from "@/content/lab";
import { FadeIn } from "./motion";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useSpring(useTransform(scrollYProgress, [0.2, 0.7], [0, 1]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <section id="journey" ref={ref} className="py-20 sm:py-28">
      <div className="container-lab">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">The Journey</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            From university research to banking AI to building production systems — a road of
            continuous learning.
          </p>
        </FadeIn>

        <div className="relative mt-20">
          <svg
            className="absolute left-0 right-0 top-1/2 hidden h-4 w-full -translate-y-1/2 sm:block"
            viewBox="0 0 1000 20"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M20 10 H980"
              fill="none"
              stroke="#EBE6DC"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <motion.path
              d="M20 10 H980"
              fill="none"
              stroke="#FFC83D"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                pathLength: reduceMotion ? 1 : pathLength,
              }}
            />
          </svg>

          <div className="grid gap-12 sm:grid-cols-3 sm:gap-6">
            {journeyStops.map((stop, i) => (
              <FadeIn key={stop.org} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative rounded-3xl border border-border bg-white p-6 sm:pt-10"
                >
                  <div
                    className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl sm:mx-0"
                    style={{ background: stop.color }}
                  >
                    <span className="font-display text-lg font-bold">
                      {stop.org.charAt(0)}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-muted-foreground">{stop.period}</p>
                  <h3 className="font-display mt-2 text-xl font-bold">{stop.org}</h3>
                  <p className="mt-1 text-sm font-semibold text-purple">{stop.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {stop.detail}
                  </p>

                  {i < journeyStops.length - 1 && (
                    <span className="mt-6 hidden items-center gap-2 text-sm font-semibold text-yellow sm:flex">
                      → {journeyStops[i + 1].org.split(" ")[0]}
                    </span>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-12 text-center font-display text-sm font-semibold text-muted-foreground">
              NCAI → Bank Alfalah → CodeSquad
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
