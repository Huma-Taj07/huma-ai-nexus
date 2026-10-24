import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { impactStats } from "@/content/lab";
import { FadeIn, Float } from "./motion";
import { Section } from "./Section";

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
    const duration = 1400;
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

export function Impact() {
  return (
    <Section id="impact">
        <FadeIn>
          <div className="paint-banner relative overflow-hidden px-6 py-12 sm:px-10 sm:py-14">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
              viewBox="0 0 400 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0,50 Q100,20 200,55 T400,45 L400,100 L0,100 Z"
                fill="rgba(255,255,255,0.25)"
              />
            </svg>

            <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
              {impactStats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <Float y={5} duration={3 + i * 0.4}>
                    <span className="text-2xl">{stat.icon}</span>
                  </Float>
                  <p className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground/75">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
    </Section>
  );
}
