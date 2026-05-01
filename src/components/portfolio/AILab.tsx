import { motion } from "framer-motion";
import aiLab from "@/assets/ai-lab.jpg";
import { SectionHeader } from "./SectionHeader";

const builds = [
  { label: "LLM Agents", value: "Autonomous reasoning loops with tool use" },
  { label: "RAG Systems", value: "Document-grounded chatbots, vector search" },
  { label: "Vision Pipelines", value: "Detection, pose, OCR, segmentation" },
  { label: "Diffusion Tools", value: "Image gen, restoration, editing" },
  { label: "Voice AI", value: "STT, TTS, conversational interfaces" },
  { label: "Custom Models", value: "Fine-tuning, LoRA, distillation" },
];

export function AILab() {
  return (
    <section id="lab" className="relative py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="relative rounded-[2rem] overflow-hidden glass-strong p-8 lg:p-14">
        <div className="absolute inset-0 -z-10">
          <img src={aiLab} alt="" loading="lazy" width={1280} height={800} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-transparent" />
        </div>

        <SectionHeader
          eyebrow="AI Lab"
          title={<>What I <span className="gradient-text">build</span>.</>}
          description="A glimpse into the systems I prototype and ship — from agents to vision."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {builds.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-5 hover:border-plasma/40 hover:bg-plasma/5 transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="font-mono text-[10px] uppercase tracking-widest text-plasma">{b.label}</div>
                <div className="size-2 rounded-full bg-plasma group-hover:scale-150 transition-transform" />
              </div>
              <div className="text-sm text-foreground/90 leading-relaxed">{b.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}