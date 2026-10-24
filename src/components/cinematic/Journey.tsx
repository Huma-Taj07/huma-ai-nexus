import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { journeyStops } from "@/content/cinematic";

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathProgress = useSpring(
    useTransform(scrollYProgress, [0.15, 0.75], [0, 1]),
    { stiffness: 60, damping: 20 },
  );

  return (
    <section ref={containerRef} className="relative min-h-[120dvh] px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/35"
        >
          The Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-display mt-6 text-[clamp(2.5rem,8vw,5rem)] font-medium tracking-[-0.03em] text-white"
        >
          Research to production.
        </motion.h2>

        <div className="relative mt-24 sm:mt-32">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-white/10 sm:block" />
          <motion.div
            style={
              reduceMotion
                ? { width: "100%" }
                : { scaleX: pathProgress, transformOrigin: "left center" }
            }
            className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00d4ff] sm:block"
          />

          <div className="grid gap-16 sm:grid-cols-3 sm:gap-8">
            {journeyStops.map((stop, i) => (
              <motion.div
                key={stop.org}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative text-center sm:text-left"
              >
                <div className="mx-auto mb-6 flex size-3 items-center justify-center sm:mx-0">
                  <div
                    className="size-3 rounded-full"
                    style={{
                      background: i === 0 ? "#00d4ff" : i === 1 ? "#a78bfa" : "#8b5cf6",
                      boxShadow: `0 0 20px ${i === 0 ? "#00d4ff66" : "#8b5cf666"}`,
                    }}
                  />
                </div>
                <p className="font-mono text-xs text-white/35">{stop.year}</p>
                <h3 className="text-display mt-2 text-2xl font-medium text-white sm:text-3xl">
                  {stop.org}
                </h3>
                <p className="mt-1 text-sm text-[#00d4ff]">{stop.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/40">{stop.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex items-center justify-center gap-4 text-white/25 sm:mt-20"
          >
            {journeyStops.map((stop, i) => (
              <span key={stop.org} className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-widest">{stop.org.split(" ")[0]}</span>
                {i < journeyStops.length - 1 && (
                  <span className="text-[#00d4ff]/50">→</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
