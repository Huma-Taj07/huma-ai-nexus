import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const certs = [
  { title: "Deep Learning Specialization", issuer: "DeepLearning.AI", year: "2024" },
  { title: "Generative AI with LLMs", issuer: "AWS / Coursera", year: "2024" },
  { title: "TensorFlow Developer", issuer: "Google", year: "2023" },
  { title: "Machine Learning", issuer: "Stanford / Coursera", year: "2023" },
  { title: "Python for Data Science", issuer: "IBM", year: "2022" },
  { title: "Computer Vision Nanodegree", issuer: "Udacity", year: "2023" },
];

export function Certifications() {
  return (
    <section id="certs" className="relative py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Certifications"
        title={<>Verified <span className="gradient-text">expertise</span>.</>}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-plasma/40 transition-all group"
          >
            <div className="size-12 rounded-xl bg-gradient-to-br from-plasma/20 to-core/20 border border-plasma/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <svg className="size-5 text-plasma" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-sm leading-snug">{c.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{c.issuer}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-plasma mt-2">{c.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}