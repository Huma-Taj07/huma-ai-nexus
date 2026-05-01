import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import projChatbot from "@/assets/proj-chatbot.jpg";
import projTherapy from "@/assets/proj-therapy.jpg";
import projStory from "@/assets/proj-story.jpg";
import projImage from "@/assets/proj-image.jpg";
import projCrop from "@/assets/proj-crop.jpg";

const projects = [
  {
    title: "AI CRM Chatbot Platform",
    desc: "Multi-tenant CRM with LLM-powered chatbots, conversation memory, and agent handoff. Trained on company data via RAG.",
    image: projChatbot,
    tags: ["LangChain", "OpenAI", "ChromaDB", "Django", "React"],
    accent: "from-plasma/30 to-core/30",
  },
  {
    title: "Remote Therapy Monitoring",
    desc: "Computer vision system tracking patient pose & exercise compliance for tele-rehabilitation, with real-time clinician dashboards.",
    image: projTherapy,
    tags: ["MediaPipe", "OpenCV", "Flask", "WebSockets"],
    accent: "from-neon/30 to-plasma/30",
  },
  {
    title: "AI Story Generator",
    desc: "Generative storytelling app producing illustrated, multi-chapter narratives with consistent characters and plot arcs.",
    image: projStory,
    tags: ["GPT", "Diffusion", "Next.js", "Vector DB"],
    accent: "from-core/30 to-violet-glow/30",
  },
  {
    title: "Image Enhancement & Recovery",
    desc: "Restoration tool for degraded photos: super-resolution, denoising, and color recovery via deep generative models.",
    image: projImage,
    tags: ["GAN", "PyTorch", "OpenCV", "FastAPI"],
    accent: "from-plasma/30 to-neon/30",
  },
  {
    title: "Crop Disease Detection",
    desc: "On-field disease classifier for farmers — detects 30+ crop pathologies from a single phone photo with treatment guidance.",
    image: projCrop,
    tags: ["TensorFlow", "CNN", "Keras", "Flutter"],
    accent: "from-core/30 to-plasma/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Selected Projects"
        title={<>Real systems, <span className="gradient-text">real impact</span>.</>}
        description="A curated showcase of AI products I've designed, trained, and deployed."
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className={`group glass-strong rounded-3xl overflow-hidden hover:border-plasma/50 transition-all hover:-translate-y-1 ${
              i === projects.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-video overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60 mix-blend-overlay z-10 pointer-events-none`} />
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent z-20" />
              <div className="absolute top-4 left-4 z-30 glass px-2 py-1 rounded text-[9px] font-mono uppercase tracking-widest text-plasma">
                Case Study
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3 group-hover:text-plasma transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-bold text-plasma hover:gap-3 transition-all">
                View Case Study
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}