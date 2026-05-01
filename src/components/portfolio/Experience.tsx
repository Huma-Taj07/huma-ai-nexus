import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const experiences = [
  {
    role: "Full Stack AI Developer",
    company: "CodeSquad",
    period: "2024 — Present",
    desc: "Architecting AI-first products end-to-end: LLM chatbots, generative tools, and computer vision modules powering client platforms.",
    accent: "plasma",
  },
  {
    role: "AI Intern",
    company: "Bank Alfalah Limited",
    period: "2023 — 2024",
    desc: "Built fraud-detection prototypes and document-intelligence pipelines for banking workflows using NLP and tabular ML.",
    accent: "core",
  },
  {
    role: "AI Research Assistant",
    company: "NCAI, UET Lahore",
    period: "2022 — 2023",
    desc: "Researched human-pose estimation and computer vision techniques for assistive healthcare applications.",
    accent: "neon",
  },
];

const dotMap: Record<string, string> = {
  plasma: "bg-plasma glow-cyan",
  core: "bg-core glow-core",
  neon: "bg-neon",
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Experience"
        title={<>A timeline of <span className="gradient-text">building & shipping</span>.</>}
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-start ${
                  isLeft ? "" : "sm:[&>*:first-child]:order-2"
                }`}
              >
                {/* Dot */}
                <span className={`absolute left-4 sm:left-1/2 top-3 size-3 rounded-full -translate-x-1/2 ${dotMap[exp.accent]}`} />

                <div className={`pl-12 sm:pl-0 ${isLeft ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-plasma mb-1">
                    {exp.period}
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl">{exp.role}</h3>
                  <div className="text-muted-foreground text-sm mt-1">{exp.company}</div>
                </div>

                <div className={`pl-12 sm:pl-0 ${isLeft ? "sm:pl-12" : "sm:text-right sm:pr-12"}`}>
                  <div className="glass rounded-2xl p-5 hover:border-plasma/40 transition-colors">
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}