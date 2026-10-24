import { About } from "./About";
import { Certifications } from "./Certifications";
import { Contact } from "./Contact";
import { Services } from "./Services";
import { Hero } from "./Hero";
import { Impact } from "./Impact";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";

export function LabExperience() {
  return (
    <div className="relative bg-background text-foreground">
      <Navbar />
      <main id="snap-scroll" className="snap-scroll">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Impact />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
