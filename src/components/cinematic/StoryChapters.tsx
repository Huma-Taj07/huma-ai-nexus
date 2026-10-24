import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { chapters } from "@/content/cinematic";

function ChapterBlock({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.85, 1], [0, 1, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [120, 0, 0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.92, 1, 1, 0.95]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  const accentColor = chapter.accent === "electric" ? "#00d4ff" : "#8b5cf6";

  return (
    <section
      ref={ref}
      id={chapter.id}
      className="relative flex min-h-[100dvh] items-center px-6 py-32"
    >
      <motion.div
        style={reduceMotion ? undefined : { opacity, y, scale }}
        className="mx-auto w-full max-w-5xl"
      >
        <p
          className="text-display text-[clamp(5rem,18vw,14rem)] font-medium leading-none tracking-[-0.05em]"
          style={{ color: `${accentColor}15` }}
        >
          {String(index + 1).padStart(2, "0")}
        </p>

        <motion.h2
          className="text-display -mt-8 text-[clamp(3rem,12vw,9rem)] font-medium leading-[0.9] tracking-[-0.04em] text-white sm:-mt-12"
        >
          {chapter.title}
        </motion.h2>

        <motion.div
          style={reduceMotion ? undefined : { width: lineWidth }}
          className="my-10 h-px max-w-xl bg-gradient-to-r from-white/40 to-transparent"
        />

        <p className="max-w-xl text-xl font-medium text-white/80 sm:text-2xl">
          {chapter.subtitle}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg">
          {chapter.body}
        </p>
      </motion.div>
    </section>
  );
}

export function StoryChapters() {
  return (
    <div className="relative">
      {chapters.map((chapter, i) => (
        <ChapterBlock key={chapter.id} chapter={chapter} index={i} />
      ))}
    </div>
  );
}
