import { Bot, Eye, Layers, Lightbulb, Server, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { serviceItems } from "@/content/lab";
import { FadeIn } from "./motion";
import { Section } from "./Section";
import { DoodleHighlight } from "./shapes";

const iconMap = {
  bot: Bot,
  eye: Eye,
  sparkles: Sparkles,
  server: Server,
  layers: Layers,
  lightbulb: Lightbulb,
} as const;

export function Services() {
  return (
    <Section id="services">
      <FadeIn>
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Services{" "}
          <span className="relative inline-block text-yellow">
            I Offer
            <DoodleHighlight className="absolute -bottom-1 left-0 h-2 w-full" />
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          From intelligent chatbots to computer vision systems — here&apos;s how I can help bring
          your AI ideas to life.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {serviceItems.map((service, i) => {
          const Icon = iconMap[service.icon];

          return (
            <FadeIn key={service.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card-shadow flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div
                  className="flex h-24 items-center justify-center sm:h-28"
                  style={{ background: service.color }}
                >
                  <Icon className="size-9 stroke-[1.75] text-foreground/80 sm:size-10" />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-lg font-bold leading-snug">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </motion.article>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
