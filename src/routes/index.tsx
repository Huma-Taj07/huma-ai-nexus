import { createFileRoute } from "@tanstack/react-router";
import { LabExperience } from "@/components/lab/LabExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Huma Taj — AI Engineer & Researcher" },
      {
        name: "description",
        content:
          "Huma Taj builds intelligent systems combining AI, Computer Vision, and scalable backend architecture. AI Engineer & Researcher based in Lahore, Pakistan.",
      },
      { property: "og:title", content: "Huma Taj — AI Engineer & Researcher" },
      {
        property: "og:description",
        content:
          "Turning complex problems into intelligent systems.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LabExperience />;
}
