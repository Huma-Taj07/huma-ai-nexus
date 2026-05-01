import { motion } from "framer-motion";
import heroBrain from "@/assets/hero-brain.jpg";
import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Floating orbs */}
      <div className="absolute top-20 -left-20 size-72 bg-core/30 rounded-full blur-[100px] animate-pulse-core pointer-events-none" />
      <div className="absolute bottom-0 right-0 size-96 bg-plasma/20 rounded-full blur-[120px] animate-pulse-core pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full glass mb-6">
            <span className="size-1.5 rounded-full bg-plasma animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              AI Developer · Lahore, PK
            </span>
          </div>

          <h1 className="font-display font-extrabold tracking-tight leading-[0.95] text-balance text-5xl sm:text-6xl lg:text-7xl mb-6">
            Crafting{" "}
            <span className="gradient-text animate-gradient text-glow-cyan">Intelligent AI</span>{" "}
            Systems for the Future
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-[55ch] mb-4 leading-relaxed">
            I build AI-powered web applications, computer vision systems, generative AI tools,
            intelligent chatbots, and scalable Python backends.
          </p>

          <p className="text-sm text-muted-foreground/70 font-mono uppercase tracking-widest mb-10">
            Full Stack AI Developer · Python · Generative AI
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3.5 bg-plasma text-void font-bold text-sm rounded-xl hover:scale-105 transition-transform glow-cyan"
            >
              Explore My Work
            </a>
            <a
              href="#chat"
              className="px-6 sm:px-8 py-3.5 glass-strong text-foreground font-bold text-sm rounded-xl hover:border-plasma/50 transition-all"
            >
              Talk to My AI Assistant
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-4 py-3.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="size-9 rounded-full glass flex items-center justify-center group-hover:border-plasma transition-colors">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">Resume</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 max-w-lg">
            <Stat value="20" suffix="+" label="AI Projects" />
            <Stat value="3" suffix="yr" label="Experience" />
            <Stat value="99.8" suffix="%" label="Model Accuracy" />
          </div>
        </motion.div>

        {/* Right: Holographic profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Orbit elements */}
          <div className="absolute inset-0 hidden sm:block pointer-events-none">
            <div className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2">
              <div className="size-3 rounded-full bg-plasma glow-cyan animate-orbit" />
            </div>
            <div className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2">
              <div className="size-2 rounded-full bg-core glow-core animate-orbit" style={{ animationDuration: "12s", animationDirection: "reverse" }} />
            </div>
          </div>

          <div className="relative w-full max-w-md aspect-[4/5]">
            <div className="absolute inset-0 border border-plasma/20 rounded-3xl rotate-3" />
            <div className="absolute inset-0 border border-core/20 rounded-3xl -rotate-3" />

            <div className="relative h-full w-full glass-strong rounded-3xl overflow-hidden p-3">
              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-void">
                <img
                  src={heroBrain}
                  alt=""
                  width={1024}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <img
                  src={profile}
                  alt="Huma Taj Muhammad"
                  width={800}
                  height={1024}
                  className="relative w-full h-full object-cover mix-blend-screen opacity-90"
                />

                {/* Scan line */}
                <div className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-plasma/20 to-transparent animate-scan pointer-events-none" />

                {/* HUD overlays */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="glass px-2 py-1 rounded text-[9px] font-mono text-plasma border-plasma/40">
                    SCANNING...
                  </div>
                  <div className="text-right text-[9px] font-mono text-foreground/40">
                    LAHORE · PK<br />
                    31.5°N 74.3°E
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="flex items-center justify-between text-[9px] font-mono text-plasma bg-void/80 px-2 py-1 border-l-2 border-plasma rounded-r">
                    <span>NEURAL_LINK</span>
                    <span>ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] font-mono text-core bg-void/80 px-2 py-1 border-l-2 border-core rounded-r">
                    <span>SYNC_RATE</span>
                    <span>99.8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-strong rounded-2xl px-3 py-2 hidden sm:block"
            >
              <div className="text-[9px] font-mono text-plasma uppercase">Models</div>
              <div className="text-sm font-bold tabular-nums">142+</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-3 py-2 hidden sm:block"
            >
              <div className="text-[9px] font-mono text-core uppercase">Latency</div>
              <div className="text-sm font-bold tabular-nums">0.84ms</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl font-display font-bold tabular-nums">
        {value}
        <span className="text-plasma">{suffix}</span>
      </div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}