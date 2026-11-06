import { useRef } from "react";
import {
  ArrowRight,
  Bot,
  Eye,
  Layers,
  Lightbulb,
  Server,
  Sparkles,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { serviceItems, servicesSection } from "@/content/lab";
import { cn } from "@/lib/utils";
import { FadeIn } from "./motion";
import { Section } from "./Section";
import { DoodleHighlight, DoodleSparkle } from "./shapes";

const iconMap = {
  bot: Bot,
  eye: Eye,
  sparkles: Sparkles,
  server: Server,
  layers: Layers,
  lightbulb: Lightbulb,
} as const;

function ServicesHeader({ reduceMotion }: { reduceMotion: boolean | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl text-center">
      <div className="pointer-events-none absolute -left-6 top-2 hidden opacity-50 lg:block">
        <DoodleSparkle className="h-6 w-8" />
      </div>
      <div className="pointer-events-none absolute -right-6 top-4 hidden opacity-50 lg:block">
        <DoodleSparkle className="h-6 w-8" />
      </div>

      <motion.p
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
      >
        {servicesSection.label}
      </motion.p>

      <motion.h2
        className="font-display mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-foreground">{servicesSection.titleTop}</span>{" "}
        <span className="relative inline-block text-yellow">
          {servicesSection.titleBottom}
          <motion.span
            initial={{ scaleX: reduceMotion ? 1 : 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-1 left-0 block h-2 w-full origin-left"
          >
            <DoodleHighlight className="h-full w-full" />
          </motion.span>
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        {servicesSection.subtitle}
      </motion.p>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  reduceMotion,
}: {
  service: (typeof serviceItems)[number];
  index: number;
  reduceMotion: boolean | null;
}) {
  const Icon = iconMap[service.icon];
  const featured = index === 0 || index === 3;

  return (
    <motion.article
      initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className={cn(
        "group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white/90 p-6 sm:p-7",
        "shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_12px_40px_-24px_rgba(17,17,17,0.2)]",
        "transition-[box-shadow,border-color] duration-300 hover:border-yellow/35",
        "hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_28px_60px_-28px_rgba(17,17,17,0.22)]",
        featured && "sm:min-h-[240px]",
      )}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: service.color }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-4">
        <div
          className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-gradient-to-br from-white to-[#fffdf8] shadow-sm"
          style={{ boxShadow: `0 10px 28px -12px ${service.accent}55` }}
        >
          <Icon className="size-5 sm:size-[1.35rem]" style={{ color: service.accent }} strokeWidth={1.75} />
        </div>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-lg font-bold leading-snug tracking-[-0.02em] sm:text-xl">
        {service.title}
      </h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
        {service.desc}
      </p>

      <div
        className="relative mt-5 flex items-center gap-2 text-sm font-semibold transition-[color,opacity,transform] duration-300"
        style={{ color: service.accent }}
      >
        <span className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Explore capability
        </span>
        <ArrowRight
          className="size-4 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden
        />
      </div>
    </motion.article>
  );
}

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="services" className="bg-[#fffdf8]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-[18%] h-[min(520px,70vw)] w-[min(520px,70vw)] -translate-x-1/2 rounded-full bg-yellow/[0.07] blur-3xl" />
        <div className="absolute -right-[10%] bottom-[8%] h-64 w-64 rounded-full bg-purple-soft/40 blur-3xl" />
      </div>

      <ServicesHeader reduceMotion={reduceMotion} />

      <div className="relative mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
        {serviceItems.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} reduceMotion={reduceMotion} />
        ))}
      </div>

      <FadeIn delay={0.2} className="relative mt-12 flex justify-center lg:mt-14">
        <motion.a
          href={servicesSection.cta.href}
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-[0_8px_30px_-12px_rgba(17,17,17,0.15)] transition-colors hover:border-yellow/50 hover:bg-soft-yellow/30"
        >
          {servicesSection.cta.label}
          <ArrowRight className="size-4 text-yellow" aria-hidden />
        </motion.a>
      </FadeIn>
    </Section>
  );
}
