import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mb-12 lg:mb-16"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="size-1.5 rounded-full bg-plasma" />
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-plasma">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}