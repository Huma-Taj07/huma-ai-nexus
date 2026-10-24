export const heroWords = ["I", "BUILD", "INTELLIGENT", "SYSTEMS."] as const;

export const chapters = [
  {
    id: "research",
    title: "Research",
    subtitle: "Where hypotheses become architecture.",
    body: "Human pose estimation at NCAI. Fraud patterns in banking data. Generative models for narrative coherence. Every system begins as a question.",
    accent: "electric" as const,
  },
  {
    id: "build",
    title: "Build",
    subtitle: "Where models meet engineering.",
    body: "Computer vision pipelines. RAG-powered chatbots. REST APIs and real-time WebSockets. Code that carries intelligence from notebook to runtime.",
    accent: "violet" as const,
  },
  {
    id: "deploy",
    title: "Deploy",
    subtitle: "Where intelligence enters the world.",
    body: "Production CRM platforms. Remote therapy monitoring. On-field crop disease detection. Systems that run when the demo ends.",
    accent: "electric" as const,
  },
] as const;

export const journeyStops = [
  {
    org: "NCAI UET",
    role: "AI Research",
    year: "2022",
    detail: "Pose estimation & computer vision for healthcare.",
  },
  {
    org: "Bank Alfalah",
    role: "AI Intern",
    year: "2023",
    detail: "Fraud detection & document intelligence in banking.",
  },
  {
    org: "CodeSquad",
    role: "AI Developer",
    year: "2024",
    detail: "Full-stack AI products from architecture to deployment.",
  },
] as const;

export const projectPanels = [
  {
    title: "Therapy Monitoring",
    desc: "Real-time pose tracking for remote rehabilitation.",
    stack: "MediaPipe · OpenCV · Flask",
    depth: 0,
    x: "-8%",
    y: "5%",
  },
  {
    title: "CRM AI Chatbot",
    desc: "RAG-powered conversational intelligence for enterprise.",
    stack: "LangChain · ChromaDB · Django",
    depth: 1,
    x: "12%",
    y: "-10%",
  },
  {
    title: "Story Generator",
    desc: "Multi-chapter generative narratives with memory.",
    stack: "GPT · Vector DB · Next.js",
    depth: 2,
    x: "-5%",
    y: "15%",
  },
  {
    title: "Image Enhancement",
    desc: "GAN-based restoration for degraded photographs.",
    stack: "PyTorch · GAN · FastAPI",
    depth: 1,
    x: "10%",
    y: "8%",
  },
  {
    title: "Crop Disease AI",
    desc: "On-field pathology detection from a single photo.",
    stack: "TensorFlow · CNN · Flutter",
    depth: 0,
    x: "0%",
    y: "-5%",
  },
] as const;

export const ecosystemNodes = [
  { id: "vision", label: "Vision", x: 20, y: 25 },
  { id: "llm", label: "LLM", x: 75, y: 20 },
  { id: "backend", label: "Backend", x: 50, y: 55 },
  { id: "data", label: "Data", x: 25, y: 75 },
  { id: "deploy", label: "Deploy", x: 78, y: 70 },
  { id: "core", label: "Intelligence", x: 50, y: 40 },
] as const;

export const social = {
  email: "humatajdev01@gmail.com",
  linkedin: "https://www.linkedin.com/in/huma-taj-6143221b7/",
  github: "https://github.com/Huma-Taj07",
} as const;
