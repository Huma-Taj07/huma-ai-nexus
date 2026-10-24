import { motion, useReducedMotion } from "framer-motion";
import { techBubbles } from "@/content/lab";
import { FadeIn, Float } from "./motion";

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-28">
      <div className="container-lab">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Tech Ecosystem</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Tools and technologies I work with — floating like molecules in the lab.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative mx-auto mt-16 aspect-[16/10] max-w-4xl overflow-hidden rounded-[2.5rem] border border-border bg-white">
            {techBubbles.map((bubble, i) => (
              <div
                key={bubble.name}
                className="absolute"
                style={{
                  left: `${bubble.x}%`,
                  top: `${bubble.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
              <Float
                y={reduceMotion ? 0 : 8 + (i % 3) * 3}
                duration={3.5 + (i % 4) * 0.6}
              >
                <motion.div
                  whileHover={{ scale: 1.12, zIndex: 10 }}
                  className="flex cursor-default items-center justify-center rounded-full border-2 border-white font-display text-xs font-bold shadow-md sm:text-sm"
                  style={{
                    width: bubble.size,
                    height: bubble.size,
                    background: bubble.color,
                  }}
                >
                  {bubble.name}
                </motion.div>
              </Float>
              </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="rounded-full bg-purple/10 px-6 py-3">
                <p className="font-display text-sm font-semibold text-purple">Intelligence Core</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
