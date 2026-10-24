import { useState } from "react";
import { contactEmail, socialLinks } from "@/content/portfolio";
import { FadeIn } from "./shared/FadeIn";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-space border-t border-border">
      <div className="container-lab">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <p className="label-caps">Contact</p>
            <h2 className="headline-lg mt-6 max-w-lg">
              Interested in building intelligent systems together?
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Open to AI engineering roles, research collaborations, and applied AI projects.
              Based in Lahore, Pakistan — available for remote work.
            </p>

            <ul className="mt-12 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[15px] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="label-caps mb-3 block">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full border border-border bg-white px-4 py-3 text-[15px] text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="label-caps mb-3 block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full border border-border bg-white px-4 py-3 text-[15px] text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="label-caps mb-3 block">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-none border border-border bg-white px-4 py-3 text-[15px] text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Tell me about your project or research..."
                />
              </div>
              <button type="submit" className="btn-primary">
                Send message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
