import { motion, useReducedMotion } from "framer-motion";
import { heroWords } from "@/content/cinematic";
import { NeuralNetwork } from "./NeuralNetwork";

const ease = [0.22, 1, 0.36, 1] as const;

export function CinematicHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center px-6">
      <NeuralNetwork className="absolute inset-0 h-full w-full" opacity={0.7} />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mb-10 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40"
        >
          The Mind of an AI Engineer
        </motion.p>

        <h1 className="text-display flex flex-col items-center gap-1 sm:gap-2">
          {heroWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 60, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.35 + i * 0.12,
                ease,
              }}
              className="block text-[clamp(2.5rem,10vw,7rem)] font-medium leading-[0.95] tracking-[-0.04em] text-white"
              style={{
                color: i === 1 ? "#00d4ff" : i === 2 ? "#8b5cf6" : undefined,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="mx-auto mt-12 max-w-md text-sm leading-relaxed text-white/45"
        >
          Huma Taj — Computer Vision · Generative AI · Production Engineering
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-white/0 via-white/40 to-white/0"
        />
      </motion.div>
    </section>
  );
}
