import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/content/portfolio";
import { SectionHeader } from "./shared/SectionHeader";
import { SkillBar } from "./shared/SkillBar";
import { staggerContainer, staggerItem } from "./shared/motion";

export function TechStack() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="expertise" className="section-pad border-t border-white/[0.06]">
      <div className="container-site">
        <SectionHeader
          label="Technical Expertise"
          title="Depth across the full AI stack."
          description="From model research to API design and interface engineering — built for systems that ship and scale."
        />

        <motion.div
          variants={staggerContainer(reduceMotion, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              variants={staggerItem(reduceMotion)}
              className="rounded-2xl border border-white/[0.06] bg-card p-6 sm:p-7"
            >
              <h3 className="font-display text-base font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="mt-6 space-y-5">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={ci * 0.05 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
