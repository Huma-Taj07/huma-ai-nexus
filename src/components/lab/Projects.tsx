import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { featuredProjects, projectsSection } from "@/content/lab";
import { Float } from "./motion";
import { Section } from "./Section";
import { DoodleHighlight, DoodleSparkle } from "./shapes";

type FeaturedProject = (typeof featuredProjects)[number];

const headingSparkPaths = ["M4 18 L10 4", "M14 18 L20 4", "M24 18 L30 4"] as const;

function HeadingSparkMarks() {
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
        {headingSparkPaths.map((d, index) => (
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

function ProjectsHeader({ reduceMotion }: { reduceMotion: boolean | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl text-center">
      <div className="pointer-events-none absolute -left-8 top-4 hidden opacity-60 lg:block">
        <Float y={5} duration={4.5}>
          <DoodleSparkle className="h-6 w-8" />
        </Float>
      </div>
      <div className="pointer-events-none absolute -right-8 top-6 hidden opacity-60 lg:block">
        <Float y={6} duration={5}>
          <DoodleSparkle className="h-6 w-8" />
        </Float>
      </div>

      <motion.p
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
      >
        {projectsSection.label}
      </motion.p>

      <motion.h2
        className="font-display mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.06 } },
        }}
      >
        <motion.span
          className="relative inline-block text-foreground"
          variants={{
            hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <HeadingSparkMarks />
          {projectsSection.titleTop}
        </motion.span>{" "}
        <motion.span
          className="relative inline-block text-yellow"
          variants={{
            hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {projectsSection.titleBottom}
          <motion.span
            initial={{ scaleX: reduceMotion ? 1 : 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-1 left-0 block h-2 w-full origin-left"
          >
            <DoodleHighlight className="h-full w-full" />
          </motion.span>
        </motion.span>
      </motion.h2>

      <motion.div
        initial={{ scaleX: reduceMotion ? 1 : 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-5 h-[4px] w-16 origin-center rounded-full bg-gradient-to-r from-yellow/30 via-yellow to-yellow/30"
      />

      <motion.p
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-6 max-w-2xl text-[15px] font-medium leading-[1.85] text-foreground/85 sm:text-[16px]"
      >
        {projectsSection.subtitle}
      </motion.p>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  reduceMotion,
}: {
  project: FeaturedProject;
  index: number;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.article
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
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -8, transition: { type: "spring", stiffness: 380, damping: 22 } }
      }
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-black/[0.06] bg-white shadow-[0_8px_28px_rgba(17,17,17,0.06)]"
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: project.accent }}
        aria-hidden
      />

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="relative mx-auto">
          {!reduceMotion && (
            <motion.span
              className="absolute inset-0 rounded-2xl border-2 border-yellow/25"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              aria-hidden
            />
          )}
          <motion.span
            className="relative flex size-16 items-center justify-center rounded-2xl text-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:size-[4.25rem]"
            style={{ background: project.color }}
            whileHover={
              reduceMotion
                ? undefined
                : { rotate: [0, -5, 5, 0], scale: 1.06, transition: { duration: 0.45 } }
            }
          >
            {project.icon}
          </motion.span>
        </div>

        <span className="mt-5 inline-flex w-fit self-center rounded-full border border-yellow/20 bg-soft-yellow/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground/75">
          {project.category}
        </span>

        <h3 className="font-display mt-4 text-center text-[15px] font-extrabold leading-snug text-foreground sm:text-base">
          {project.title}
        </h3>

        <motion.div
          className="mx-auto mt-3 h-0.5 w-8 rounded-full"
          style={{ background: project.accent }}
          initial={{ scaleX: reduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            delay: reduceMotion ? 0 : 0.1 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <p className="mt-4 flex-1 text-center text-[13px] leading-[1.7] text-muted-foreground">
          {project.desc}
        </p>

        <motion.a
          href="#contact"
          whileHover={reduceMotion ? undefined : { x: 4 }}
          className="mt-5 inline-flex items-center justify-center gap-1.5 self-center text-[13px] font-bold text-[#C99200] transition-colors group-hover:text-yellow"
        >
          View Project
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </motion.a>
      </div>

      <motion.div
        className="h-[3px] w-full origin-left"
        style={{ background: `linear-gradient(to right, ${project.accent}, ${project.color})` }}
        initial={{ scaleX: reduceMotion ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reduceMotion ? 0 : 0.65,
          delay: reduceMotion ? 0 : 0.15 + index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.article>
  );
}

function ProjectsCarousel({ reduceMotion }: { reduceMotion: boolean | null }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous project"
        className="absolute -left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/[0.08] bg-white text-foreground shadow-[0_4px_16px_rgba(17,17,17,0.08)] transition-all hover:border-yellow/40 hover:text-yellow disabled:pointer-events-none disabled:opacity-30 sm:-left-4 sm:size-11 lg:-left-5"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next project"
        className="absolute -right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/[0.08] bg-white text-foreground shadow-[0_4px_16px_rgba(17,17,17,0.08)] transition-all hover:border-yellow/40 hover:text-yellow disabled:pointer-events-none disabled:opacity-30 sm:-right-4 sm:size-11 lg:-right-5"
      >
        <ChevronRight className="size-5" />
      </button>

      <div ref={emblaRef} className="overflow-hidden px-1">
        <div className="flex touch-pan-y gap-5 lg:gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="min-w-0 shrink-0 grow-0 basis-[88%] sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(33.333%-1rem)]"
            >
              <ProjectCard project={project} index={index} reduceMotion={reduceMotion} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="projects" className="relative overflow-visible">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <ProjectsHeader reduceMotion={reduceMotion} />

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.08,
                delayChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative mt-10 lg:mt-12"
        >
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-4xl bg-gradient-to-r from-yellow/8 via-transparent to-yellow/8 blur-xl sm:-inset-x-6"
            aria-hidden
          />

          <ProjectsCarousel reduceMotion={reduceMotion} />
        </motion.div>
      </div>
    </Section>
  );
}
