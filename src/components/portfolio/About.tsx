import { motion, useReducedMotion } from "framer-motion";
import { aboutTimeline } from "@/content/portfolio";
import { SectionHeader } from "./shared/SectionHeader";
import { staggerContainer, staggerItem } from "./shared/motion";

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-pad">
      <div className="container-site">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.08] bg-card">
              <img
                src="/profile.png"
                alt="Huma Taj — AI Developer"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden rounded-2xl border border-white/[0.08] bg-card px-5 py-4 sm:block">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Based in</p>
              <p className="mt-1 font-display text-sm font-medium">Lahore, Pakistan</p>
            </div>
          </motion.div>

          <div>
            <SectionHeader
              label="About"
              title="Engineering intelligence from research to production."
              description="I build AI systems that solve real problems — from pose estimation in healthcare labs to LLM-powered products deployed for clients. My path spans university research at NCAI UET, regulated banking AI, and full-stack delivery at CodeSquad."
            />

            <motion.div
              variants={staggerContainer(reduceMotion)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="relative mt-12 space-y-0"
            >
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

              {aboutTimeline.map((item, i) => (
                <motion.div
                  key={item.org}
                  variants={staggerItem(reduceMotion)}
                  className="relative pl-8 pb-10 last:pb-0"
                >
                  <div className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-primary bg-[#050816]" />
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                    {item.org}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
                    {item.description}
                  </p>
                  {i < aboutTimeline.length - 1 && (
                    <div className="mt-6 h-px w-full bg-white/[0.04] lg:hidden" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
