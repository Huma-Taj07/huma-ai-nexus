export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  greeting: "Hi, I'm",
  name: "Huma Taj",
  subtitle: "AI Engineer & Researcher",
  description:
    "I build intelligent systems that combine Artificial Intelligence, Computer Vision and Scalable Backend Architecture to solve real-world problems and create meaningful impact.",
  ctaWork: { label: "View My Work", href: "#projects" },
  ctaResume: {
    label: "Download Resume",
    href: "mailto:humatajdev01@gmail.com?subject=Resume%20Request",
  },
  doodle: "Building Smarter Solutions",
} as const;

export const about = {
  titleTop: "About",
  titleBottom: "Me",
  description:
    "I'm a Computer Science graduate with hands-on experience in AI apps, Python backends, and full-stack solutions. I focus on taking ideas from prototype to production — whether that's computer vision, enterprise chatbots, or automation that actually ships. I'm always open to projects where AI meets real business needs.",
  focusAreas: ["AI Apps", "Python Backends", "Computer Vision", "Full-Stack"] as const,
  robotImage: "/robot_portfolio_animated.gif",
  stats: [
    {
      value: 3,
      suffix: "+",
      label: "Years of Experience",
      sub: "In AI & Development",
      icon: "briefcase" as const,
    },
    {
      value: 10,
      suffix: "+",
      label: "Projects Completed",
      sub: "AI, Web & Automation",
      icon: "folder" as const,
    },
    {
      value: 5,
      suffix: "+",
      label: "Certifications",
      sub: "From Top Platforms",
      icon: "cap" as const,
    },
    {
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      sub: "Quality & Dedication",
      icon: "users" as const,
    },
  ],
} as const;

export const projectsSection = {
  label: "My Work",
  titleTop: "Featured",
  titleBottom: "Projects",
  subtitle:
    "Explore a selection of AI-powered and full-stack projects designed to solve real-world problems with impact.",
  cta: {
    title: "Have a Project in Mind?",
    subtitle: "Let's collaborate and build something amazing together.",
    button: { label: "Let's Connect", href: "#contact" },
  },
} as const;

export const featuredProjects = [
  {
    title: "CRM AI Chatbot",
    desc: "LLM-powered chatbot with RAG memory, agent handoff, and real-time CRM sync for support teams.",
    category: "AI / NLP",
    color: "#E8EAF6",
    accent: "#C5CAE9",
    icon: "🤖",
  },
  {
    title: "Remote Therapy Monitoring",
    desc: "Real-time pose tracking and exercise compliance for tele-rehabilitation sessions.",
    category: "AI / Computer Vision",
    color: "#EDE9FE",
    accent: "#DDD6FE",
    icon: "🧘",
  },
  {
    title: "AI Story Generator",
    desc: "Generative multi-chapter stories with consistent characters, plot arcs, and AI narration.",
    category: "AI / Generative",
    color: "#FFE8CC",
    accent: "#FFD699",
    icon: "📖",
  },
  {
    title: "Image Enhancement Tool",
    desc: "GAN-based photo restoration — super-resolution, denoising, and color recovery.",
    category: "AI / Computer Vision",
    color: "#D1FAE5",
    accent: "#A7F3D0",
    icon: "🖼️",
  },
  {
    title: "Crop Disease Detection",
    desc: "On-field crop pathology detection from a single phone photo with treatment tips.",
    category: "AI / Agriculture",
    color: "#DCFCE7",
    accent: "#BBF7D0",
    icon: "🌿",
  },
] as const;

export const serviceItems = [
  {
    title: "AI Chatbots & LLM Apps",
    desc: "Custom chatbots with RAG, memory, and agent workflows built for enterprise teams.",
    color: "#FFF3C4",
    icon: "bot" as const,
  },
  {
    title: "Computer Vision",
    desc: "Real-time pose tracking, object detection, and image analysis for production use cases.",
    color: "#EDE9FE",
    icon: "eye" as const,
  },
  {
    title: "Generative AI Solutions",
    desc: "Content generation, story engines, and creative AI tools tailored to your product.",
    color: "#FFE8CC",
    icon: "sparkles" as const,
  },
  {
    title: "Backend & API Development",
    desc: "Scalable Python backends, REST APIs, and ML model deployment pipelines.",
    color: "#D1FAE5",
    icon: "server" as const,
  },
  {
    title: "Full-Stack AI Products",
    desc: "End-to-end intelligent products — from research prototype to production-ready app.",
    color: "#DCFCE7",
    icon: "layers" as const,
  },
  {
    title: "AI Consulting & Integration",
    desc: "Strategy, feasibility review, and integrating AI into existing products and workflows.",
    color: "#FCE7F3",
    icon: "lightbulb" as const,
  },
] as const;

export const certifications = [
  {
    title: "Generative AI for Everyone",
    issuer: "DeepLearning.AI · Coursera",
    year: "2023",
    image: "/certification/generative-ai.png",
  },
  {
    title: "Artificial Intelligence",
    issuer: "NAVTTC · Govt. of Pakistan",
    year: "2023",
    image: "/certification/artificial-intelligence.png",
  },
  {
    title: "Introduction to Prompt Engineering",
    issuer: "Simplilearn SkillUp",
    year: "2024",
    image: "/certification/prompt-engineering.png",
  },
  {
    title: "Deep Learning for Beginners",
    issuer: "Simplilearn SkillUp",
    year: "2022",
    image: "/certification/deep-learning.png",
  },
  {
    title: "Flutter & Dart Development",
    issuer: "NexSkill · OZI Group",
    year: "2022",
    image: "/certification/flutter-dart.png",
  },
] as const;

export const impactStats = [
  { value: 2, suffix: "+", label: "Years Experience", icon: "⏳" },
  { value: 5, suffix: "+", label: "Projects Completed", icon: "🚀" },
  { value: 3, suffix: "+", label: "Research Roles", icon: "🔬" },
  { value: 30, suffix: "+", label: "Therapy Exercises Tracked", icon: "💪" },
] as const;

export const contactInfo = {
  email: "humatajdev01@gmail.com",
  phone: "+92 311 4151993",
  location: "Lahore, Punjab, Pakistan",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/huma-taj-6143221b7/" },
  { label: "GitHub", href: "https://github.com/Huma-Taj07" },
  { label: "Email", href: "mailto:humatajdev01@gmail.com" },
] as const;
