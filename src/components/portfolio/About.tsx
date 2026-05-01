import { motion } from "framer-motion";
import aiLab from "@/assets/ai-lab.jpg";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="My AI Journey"
        title={<>From curious coder to <span className="gradient-text">AI architect</span>.</>}
      />

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong p-3">
            <img
              src={aiLab}
              alt="AI laboratory"
              loading="lazy"
              width={1280}
              height={800}
              className="w-full h-full object-cover rounded-2xl opacity-90"
            />
            <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-4">
              <div className="text-[9px] font-mono text-plasma uppercase tracking-widest mb-1">Now Building</div>
              <div className="text-sm font-medium">Multi-agent LLM systems & RAG pipelines</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 space-y-6"
        >
          <p className="text-lg text-foreground/90 leading-relaxed">
            I'm <span className="text-plasma font-semibold">Huma Taj Muhammad</span>, an AI Developer
            based in Lahore, Pakistan. I architect intelligent systems where deep learning,
            generative AI, and robust engineering meet.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My work spans LLM-powered chatbots and CRMs, computer vision pipelines for healthcare
            and agriculture, and full-stack AI products with Python backends and modern React
            interfaces. I love taking models from notebook to production.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              { k: "Generative AI", v: "LLM apps, agents, RAG" },
              { k: "Computer Vision", v: "Detection, pose, OCR" },
              { k: "Full-Stack AI", v: "Django, Flask, React, Next" },
              { k: "Production MLOps", v: "APIs, vector DBs, scaling" },
            ].map((item) => (
              <div key={item.k} className="glass rounded-2xl p-4 hover:border-plasma/40 transition-colors">
                <div className="text-xs font-mono uppercase tracking-widest text-plasma">{item.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{item.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}