import { Ambient } from "./Ambient";
import { CinematicHero } from "./CinematicHero";
import { Ecosystem } from "./Ecosystem";
import { Finale } from "./Finale";
import { FloatingProjects } from "./FloatingProjects";
import { Journey } from "./Journey";
import { StoryChapters } from "./StoryChapters";

export function CinematicExperience() {
  return (
    <div className="relative bg-black text-white">
      <Ambient />
      <div className="relative z-10">
        <CinematicHero />
        <StoryChapters />
        <Journey />
        <FloatingProjects />
        <Ecosystem />
        <Finale />
      </div>
    </div>
  );
}
