import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="relative rounded-[2rem] overflow-hidden glass-strong p-8 sm:p-12 lg:p-16">
        <div className="absolute -top-32 -right-32 size-96 bg-plasma/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 size-96 bg-core/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Get in touch"
              title={<>Let's build <span className="gradient-text">the future</span>, together.</>}
              description="Open to AI engineering roles, freelance projects, and research collaborations."
            />

            <div className="space-y-3">
              {[
                { label: "Email", value: "huma.taj@example.com", icon: "✉" },
                { label: "Location", value: "Lahore, Pakistan", icon: "◉" },
                { label: "Availability", value: "Open to opportunities", icon: "●" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 glass rounded-xl p-3">
                  <span className="size-9 rounded-full bg-plasma/10 border border-plasma/30 flex items-center justify-center text-plasma">
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I'll get back to you soon.");
            }}
            className="space-y-4 glass-strong rounded-3xl p-6 lg:p-8"
          >
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-plasma">Name</label>
              <input
                required
                type="text"
                className="mt-1 w-full bg-transparent border-b border-border focus:border-plasma outline-none py-2 text-foreground placeholder:text-muted-foreground/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-plasma">Email</label>
              <input
                required
                type="email"
                className="mt-1 w-full bg-transparent border-b border-border focus:border-plasma outline-none py-2 text-foreground placeholder:text-muted-foreground/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-plasma">Message</label>
              <textarea
                required
                rows={4}
                className="mt-1 w-full bg-transparent border-b border-border focus:border-plasma outline-none py-2 text-foreground placeholder:text-muted-foreground/50 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-plasma text-void font-bold text-sm uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-transform glow-cyan"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-xs text-muted-foreground font-mono">
          © 2026 Huma Taj Muhammad · All systems nominal
        </div>
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-plasma animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Crafted with neural precision
          </span>
        </div>
      </footer>
    </section>
  );
}