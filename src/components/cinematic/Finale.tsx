import { motion } from "framer-motion";
import { social } from "@/content/cinematic";
import { MagneticButton } from "./MagneticButton";

export function Finale() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/35">
          Continue the story
        </p>
        <h2 className="text-display mt-8 text-[clamp(2.5rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.04em] text-white">
          Let&apos;s build
          <br />
          <span className="text-[#00d4ff]">what&apos;s next.</span>
        </h2>

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <MagneticButton href={`mailto:${social.email}`}>
            Start a conversation
          </MagneticButton>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-8">
          {[
            { label: "Email", href: `mailto:${social.email}` },
            { label: "LinkedIn", href: social.linkedin },
            { label: "GitHub", href: social.github },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-xs uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-[#00d4ff]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-24 font-mono text-[10px] text-white/20">
          HUMA TAJ · AI ENGINEER · 2026
        </p>
      </motion.div>
    </section>
  );
}
