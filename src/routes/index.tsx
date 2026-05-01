import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Background } from "@/components/portfolio/Background";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { AILab } from "@/components/portfolio/AILab";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Chatbot } from "@/components/portfolio/Chatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Huma Taj Muhammad — AI Developer & Generative AI Engineer" },
      {
        name: "description",
        content:
          "Huma Taj Muhammad — AI Developer in Lahore building intelligent web apps, computer vision systems, generative AI tools, chatbots, and Python backends.",
      },
      { property: "og:title", content: "Huma Taj Muhammad — AI Developer" },
      {
        property: "og:description",
        content: "Crafting Intelligent AI Systems for the Future.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <AILab />
        <Certifications />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}
