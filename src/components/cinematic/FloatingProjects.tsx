import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { projectPanels } from "@/content/cinematic";

function ProjectPanel({
  project,
  index,
  scrollYProgress,
}: {
  project: (typeof projectPanels)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [index * 40, index * -60],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.1 + index * 0.05, 0.35 + index * 0.05, 0.8, 1],
    [0, 1, 1, 0.6],
  );

  const depthScale = 1 - project.depth * 0.04;
  const zIndex = 10 - project.depth;

  return (
    <motion.div
      ref={ref}
      style={{
        y: reduceMotion ? 0 : parallaxY,
        opacity: reduceMotion ? 1 : opacity,
        zIndex,
        left: `calc(50% + ${project.x})`,
        top: `calc(${30 + index * 12}% + ${project.y})`,
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 1200,
        scale: depthScale,
      }}
      onMouseMove={(e) => {
        if (reduceMotion || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="absolute w-[min(340px,85vw)] -translate-x-1/2 cursor-default"
    >
      <div className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 backdrop-blur-md transition-colors duration-300 hover:border-[#00d4ff]/30 hover:bg-white/[0.05]">
        <div className="mb-4 h-px w-12 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]" />
        <h3 className="text-display text-xl font-medium text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/50">{project.desc}</p>
        <p className="mt-4 font-mono text-[11px] text-[#8b5cf6]/80">{project.stack}</p>
      </div>
    </motion.div>
  );
}

export function FloatingProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative min-h-[150dvh] px-6 py-32">
      <div className="pointer-events-none sticky top-0 flex h-[100dvh] flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/35"
        >
          Selected Systems
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-display mt-4 text-center text-[clamp(2rem,6vw,4rem)] font-medium tracking-[-0.03em] text-white"
        >
          Built. Shipped. Running.
        </motion.h2>
      </div>

      <div className="relative mx-auto h-[80vh] max-w-4xl">
        {projectPanels.map((project, i) => (
          <ProjectPanel
            key={project.title}
            project={project}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
