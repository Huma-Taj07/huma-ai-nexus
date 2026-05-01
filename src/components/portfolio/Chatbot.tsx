import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Msg = { role: "assistant" | "user"; content: string };

const initial: Msg[] = [
  {
    role: "assistant",
    content:
      "Hi, I'm Huma's AI Assistant. Ask me about her AI projects, skills, experience, or availability.",
  },
];

// Placeholder reply logic — replace with real API later
function fakeReply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("project")) return "Huma has built AI CRMs, vision systems for healthcare, generative story tools, image restoration, and crop disease detection. Scroll to the Projects section!";
  if (q.includes("skill") || q.includes("stack")) return "Her core stack: Python, Django, Flask, React, Next.js, TensorFlow, Keras, OpenCV, MediaPipe, LangChain, and vector DBs like ChromaDB.";
  if (q.includes("experience") || q.includes("work")) return "She's currently a Full Stack AI Developer at CodeSquad, previously interned at Bank Alfalah, and was an AI Research Assistant at NCAI, UET Lahore.";
  if (q.includes("available") || q.includes("hire")) return "Yes — Huma is open to AI engineering roles, freelance work, and research collaborations. Use the contact form to reach out!";
  if (q.includes("hi") || q.includes("hello")) return "Hello! What would you like to know about Huma?";
  return "Great question! For now I'm a demo assistant — Huma will plug in her real chatbot API soon. In the meantime, try asking about her projects, skills, experience, or availability.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: fakeReply(text) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <div id="chat" className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="glass-strong rounded-3xl w-[calc(100vw-2.5rem)] sm:w-96 h-[28rem] flex flex-col overflow-hidden glow-core"
          >
            <header className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="size-10 rounded-full bg-gradient-to-br from-plasma to-core flex items-center justify-center font-display font-extrabold text-void">
                    H
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-plasma border-2 border-card" />
                </div>
                <div>
                  <div className="font-bold text-sm">Huma AI Assistant</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-plasma">Online</div>
                </div>
              </div>
              <button
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors size-8 rounded-full hover:bg-muted flex items-center justify-center"
              >
                ✕
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-plasma text-void font-medium"
                        : "glass text-foreground"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="glass rounded-2xl px-3.5 py-3 flex gap-1">
                    <span className="size-1.5 rounded-full bg-plasma animate-bounce" />
                    <span className="size-1.5 rounded-full bg-plasma animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <span className="size-1.5 rounded-full bg-plasma animate-bounce" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={send} className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Huma..."
                className="flex-1 bg-muted/50 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-plasma placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                aria-label="Send"
                className="size-10 rounded-full bg-plasma text-void flex items-center justify-center hover:scale-105 transition-transform shrink-0"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI assistant"
        className="relative size-14 rounded-full bg-gradient-to-br from-plasma to-core text-void shadow-2xl glow-cyan flex items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-plasma/40 animate-ping" />
        <svg className="relative size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          )}
        </svg>
      </motion.button>
    </div>
  );
}