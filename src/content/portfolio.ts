export const siteName = "Huma Taj";
export const siteTagline = "AI Lab";

export const navLinks = [
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  headline: "Building AI systems that solve real-world problems.",
  subheadline:
    "Artificial Intelligence Engineer specializing in Computer Vision, Intelligent Automation, and Applied AI Research.",
  ctaPrimary: { label: "View Research", href: "#research" },
  ctaSecondary: { label: "Selected Projects", href: "#projects" },
} as const;

export const researchAreas = [
  {
    title: "Computer Vision",
    description:
      "Designing perception systems that interpret human movement, visual data, and real-world scenes with clinical and industrial precision.",
    focus: "Pose estimation · Object detection · Real-time video pipelines",
  },
  {
    title: "Applied Artificial Intelligence",
    description:
      "Translating research into deployable models — from experimentation and evaluation to production APIs and monitored inference.",
    focus: "Model evaluation · Pipeline design · Production deployment",
  },
  {
    title: "Healthcare AI",
    description:
      "Building assistive technologies that support clinicians and patients through remote monitoring, compliance tracking, and rehabilitation workflows.",
    focus: "Tele-rehabilitation · Exercise compliance · Clinical dashboards",
  },
  {
    title: "Generative AI",
    description:
      "Developing language and multimodal systems for structured content generation, retrieval-augmented reasoning, and creative applications.",
    focus: "LLMs · RAG · Agent workflows · Content generation",
  },
  {
    title: "Intelligent Automation",
    description:
      "Engineering backend systems and automation layers that connect AI models to business processes, CRMs, and operational workflows.",
    focus: "Python backends · API design · Workflow automation",
  },
] as const;

export const caseStudies = [
  {
    number: "01",
    title: "Remote Therapy Monitoring System",
    challenge:
      "Clinicians needed a reliable way to monitor patient exercise compliance during remote rehabilitation — without in-person supervision or subjective self-reporting.",
    solution:
      "Built a computer vision pipeline that tracks patient pose in real time, scores exercise form against clinical protocols, and surfaces compliance data through a clinician-facing dashboard.",
    technology: "MediaPipe, OpenCV, Flask, WebSockets, Python",
    impact:
      "Enabled continuous remote monitoring across 30+ therapy exercises, giving clinicians objective compliance data and reducing dependency on in-clinic sessions.",
  },
  {
    number: "02",
    title: "CRM AI Chatbot Platform",
    challenge:
      "Businesses required intelligent customer engagement within their CRM — with context-aware responses grounded in company knowledge, not generic LLM output.",
    solution:
      "Architected a multi-tenant platform with RAG-powered chatbots, conversation memory, vector search over company documents, and seamless human agent handoff.",
    technology: "LangChain, OpenAI, ChromaDB, Django, React",
    impact:
      "Delivered production-ready conversational AI integrated into client CRM workflows, reducing response latency and improving first-contact resolution rates.",
  },
  {
    number: "03",
    title: "AI Story Generator",
    challenge:
      "Users wanted coherent, multi-chapter narratives with consistent characters and plot continuity — beyond single-prompt text generation.",
    solution:
      "Designed a generative storytelling system with structured plot scaffolding, character memory via vector storage, and illustrated chapter output.",
    technology: "GPT, Diffusion models, Next.js, Vector DB",
    impact:
      "Produced illustrated multi-chapter stories with narrative consistency, demonstrating applied generative AI beyond simple prompt-response patterns.",
  },
  {
    number: "04",
    title: "Image Enhancement Tool",
    challenge:
      "Degraded and low-resolution photographs required automated restoration — super-resolution, denoising, and color recovery at usable quality.",
    solution:
      "Implemented a deep generative restoration pipeline combining GAN-based enhancement with classical image processing for preprocessing and post-correction.",
    technology: "GAN, PyTorch, OpenCV, FastAPI",
    impact:
      "Recovered visual quality in degraded images for archival and personal use cases, with a deployable API for batch and single-image processing.",
  },
  {
    number: "05",
    title: "Crop Disease Detection",
    challenge:
      "Farmers in the field needed immediate, accurate disease identification from a single phone photograph — without laboratory access or expert consultation.",
    solution:
      "Trained a convolutional classifier detecting 30+ crop pathologies from mobile-captured images, paired with treatment guidance and offline-capable inference.",
    technology: "TensorFlow, CNN, Keras, Flutter",
    impact:
      "Enabled on-field disease diagnosis for agricultural workers, reducing crop loss through earlier intervention and accessible treatment recommendations.",
  },
] as const;

export const aboutTimeline = [
  {
    year: "2022 — 2023",
    org: "NCAI UET Lahore",
    role: "AI Research Assistant",
    description:
      "Conducted research in human pose estimation and computer vision for assistive healthcare, connecting academic methodology to applied clinical problems.",
  },
  {
    year: "2023 — 2024",
    org: "Bank Alfalah",
    role: "AI Intern",
    description:
      "Built fraud-detection prototypes and document-intelligence pipelines on tabular banking data within a regulated financial environment.",
  },
  {
    year: "2024 — Present",
    org: "CodeSquad",
    role: "AI Developer",
    description:
      "Architect end-to-end AI products — LLM chatbots, generative tools, and computer vision modules — from prototype through production deployment.",
  },
] as const;

export const experiences = [
  {
    org: "CodeSquad",
    role: "AI Developer",
    period: "2024 — Present",
    location: "Lahore, Pakistan",
    contributions: [
      "Architect end-to-end AI products — LLM chatbots, generative tools, and computer vision modules for client platforms.",
      "Own system design, API contracts, and iterative delivery from prototype to production deployment.",
      "Partner with stakeholders to ship reliable AI features used in real client workflows daily.",
    ],
  },
  {
    org: "Bank Alfalah",
    role: "AI Intern",
    period: "2023 — 2024",
    location: "Lahore, Pakistan",
    contributions: [
      "Built fraud-detection prototypes and ML workflows on tabular banking data.",
      "Developed document-intelligence pipelines using NLP for operational banking processes.",
      "Maintained evaluation rigor and data quality standards required in regulated financial environments.",
    ],
  },
  {
    org: "NCAI UET Lahore",
    role: "AI Research Assistant",
    period: "2022 — 2023",
    location: "Lahore, Pakistan",
    contributions: [
      "Conducted research in human pose estimation and computer vision for assistive healthcare.",
      "Designed experiments, ran evaluations, and iterated based on literature-backed methodology.",
      "Connected academic research methodology to applied healthcare-oriented vision problems.",
    ],
  },
] as const;

export const achievements = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "AI Projects" },
  { value: 3, suffix: "+", label: "Research Roles" },
  { value: 30, suffix: "+", label: "Therapy Exercises Tracked" },
] as const;

export const aiLabBuilds = [
  {
    label: "AI Agents",
    value: "Tool-using workflows, orchestration, and integrations that connect models to business systems.",
  },
  {
    label: "Computer Vision",
    value: "Pose estimation, object detection, and real-time video pipelines for clinical and industrial use.",
  },
  {
    label: "LLM Systems",
    value: "RAG chatbots, retrieval layers, and conversational memory for enterprise CRM and support.",
  },
  {
    label: "Generative AI",
    value: "Structured content, multi-step generation, and multimodal prototypes beyond single prompts.",
  },
  {
    label: "Python Backends",
    value: "REST and WebSocket APIs, inference services, and automation that ship models to production.",
  },
  {
    label: "Applied Research",
    value: "Experiment design, evaluation, and iteration from notebook hypotheses to deployable systems.",
  },
] as const;

export const certifications = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2024",
  },
  {
    title: "Generative AI with LLMs",
    issuer: "DeepLearning.AI",
    year: "2024",
  },
  {
    title: "Artificial Intelligence",
    issuer: "NAVTTC",
    year: "2023",
  },
  {
    title: "Flutter Development",
    issuer: "NexSkill",
    year: "2023",
  },
] as const;

export const writingNotes = [
  {
    title: "From pose estimation to clinical deployment",
    category: "Research Note",
    date: "2024",
    excerpt:
      "Reflections on bridging academic computer vision research with production healthcare monitoring systems.",
  },
  {
    title: "RAG architecture patterns for enterprise CRMs",
    category: "Engineering",
    date: "2024",
    excerpt:
      "Practical considerations for retrieval-augmented chatbots in multi-tenant business environments.",
  },
] as const;

export const socialLinks = [
  { label: "Email", href: "mailto:humatajdev01@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/huma-taj-6143221b7/" },
  { label: "GitHub", href: "https://github.com/Huma-Taj07" },
] as const;

export const contactEmail = "humatajdev01@gmail.com";
