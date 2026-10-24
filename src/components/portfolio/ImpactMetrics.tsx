import { motion, useReducedMotion } from "framer-motion";
import { impactMetrics } from "@/content/portfolio";
import { AnimatedCounter } from "./shared/SectionHeader";
import { staggerContainer, staggerItem } from "./shared/motion";

export function ImpactMetrics() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-pad border-y border-white/[0.06]">
      <div className="container-site">
        <motion.div
          variants={staggerContainer(reduceMotion, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {impactMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={staggerItem(reduceMotion)}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-6 sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <p className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
