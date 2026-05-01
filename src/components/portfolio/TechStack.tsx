import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const categories = [
  {
    title: "AI / ML",
    accent: "plasma",
    items: ["Machine Learning", "Deep Learning", "Generative AI", "LLM Integration", "Prompt Engineering"],
  },
  {
    title: "Computer Vision",
    accent: "core",
    items: ["OpenCV", "MediaPipe", "Human Pose Estimation", "Object Detection", "RTM"],
  },
  {
    title: "Backend",
    accent: "neon",
    items: ["Python", "Django", "Flask", "REST APIs", "MySQL", "PostgreSQL"],
  },
  {
    title: "Frontend",
    accent: "plasma",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI Tools",
    accent: "core",
    items: ["TensorFlow", "Keras", "Hugging Face", "ChromaDB", "Vector Databases"],
  },
];

const accentMap: Record<string, string> = {
  plasma: "text-plasma border-plasma/30 bg-plasma/5",
  core: "text-core border-core/30 bg-core/5",
  neon: "text-neon border-neon/30 bg-neon/5",
};

export function TechStack() {
  return (
    <section id="stack" className="relative py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Tech Stack"
        title={<>Tools that power <span className="gradient-text">my craft</span>.</>}
        description="A curated toolkit spanning models, vision, backend infrastructure, and modern interfaces."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-strong rounded-3xl p-6 hover:border-plasma/40 transition-all hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-bold text-xl">{cat.title}</h3>
              <span className={`size-8 rounded-full border flex items-center justify-center ${accentMap[cat.accent]}`}>
                <span className="size-1.5 rounded-full bg-current" />
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full glass text-xs font-medium hover:text-plasma transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}