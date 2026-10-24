import { useState } from "react";

export type ChatMessage = { role: "assistant" | "user"; content: string };

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi, I'm Huma's AI Assistant. Ask me about her AI projects, skills, experience, or availability.",
  },
];

function getAssistantReply(input: string): string {
  const query = input.toLowerCase();

  if (query.includes("project"))
    return "Huma has built AI CRMs, vision systems for healthcare, generative story tools, image restoration, and crop disease detection. Scroll to the Projects section!";
  if (query.includes("skill") || query.includes("stack"))
    return "Her core stack: Python, Django, Flask, React, Next.js, TensorFlow, Keras, OpenCV, MediaPipe, LangChain, and vector DBs like ChromaDB.";
  if (query.includes("experience") || query.includes("work"))
    return "She's currently a Full Stack AI Developer at CodeSquad, previously interned at Bank Alfalah, and was an AI Research Assistant at NCAI, UET Lahore.";
  if (query.includes("available") || query.includes("hire"))
    return "Yes — Huma is open to AI engineering roles, freelance work, and research collaborations. Use the contact form to reach out!";
  if (query.includes("hi") || query.includes("hello"))
    return "Hello! What would you like to know about Huma?";

  return "Great question! For now I'm a demo assistant — Huma will plug in her real chatbot API soon. In the meantime, try asking about her projects, skills, experience, or availability.";
}

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: getAssistantReply(trimmed) },
      ]);
      setTyping(false);
    }, 700);
  };

  return {
    messages,
    input,
    typing,
    setInput,
    sendMessage,
  };
}
