"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { AskInput } from "@/components/ask-input"
import { NavButtons } from "@/components/nav-buttons"
import { WatermarkText } from "@/components/watermark-text"
import { FluidCanvas } from "@/components/fluid-canvas"
import { TypingIndicator } from "@/components/typing-indicator"
import { ChatBubble } from "@/components/chat-bubble"
import { MeCard } from "@/components/me-card"
import { SkillsCard } from "@/components/skills-card"
import { ContactCard } from "@/components/contact-card"
import { LocationCard } from "@/components/location-card"
import { UpworkCard } from "@/components/upwork-card"
import { Info } from "lucide-react"

// Map button IDs to the question shown in the chat bubble
const buttonQuestions: Record<string, string> = {
  me: "Who are you? I want to know more about you.",
  skills: "What are your skills and expertise?",
  contact: "How can I get in touch with you?",
  location: "Where are you located?",
  upwork: "Show me your Upwork profile.",
}

type ChatMessage = {
  type: "question" | "typing" | "answer"
  text?: string
  section?: string
}

export default function Page() {
  const [view, setView] = useState<"hero" | "chat">("hero")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [messages])

  const handleSelect = (id: string) => {
    const question = buttonQuestions[id]
    if (!question) return

    setView("chat")
    setActiveSection(id)

    // Replace all messages with just the new question
    setMessages([{ type: "question", text: question }])

    // Show typing indicator after a short delay
    setTimeout(() => {
      setMessages([
        { type: "question", text: question },
        { type: "typing" },
      ])
    }, 300)

    // Replace typing with the answer
    setTimeout(() => {
      setMessages([
        { type: "question", text: question },
        { type: "answer", section: id },
      ])
    }, 1800)
  }

  const handleAskSubmit = (query: string) => {
    setView("chat")
    setActiveSection(null)

    // Replace all messages with just the new question
    setMessages([{ type: "question", text: query }])

    setTimeout(() => {
      setMessages([
        { type: "question", text: query },
        { type: "typing" },
      ])
    }, 300)

    setTimeout(() => {
      setMessages([
        { type: "question", text: query },
        { type: "answer", section: "custom", text: query },
      ])
    }, 1800)
  }

  // Render the answer section for a given button
  function renderAnswer(section: string) {
    switch (section) {
      case "me":
        return <MeCard />
      case "skills":
        return <SkillsCard />
      case "contact":
        return <ContactCard />
      case "location":
        return <LocationCard />
      case "upwork":
        return <UpworkCard />
      case "custom":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              {"Thanks for your question! I'd love to help. Feel free to click on any of the buttons below to learn more about me, my projects, skills, or how to get in touch."}
            </p>
          </div>
        )
      default:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              {"Coming soon! This section is being built."}
            </p>
          </div>
        )
    }
  }

  // ============= HERO VIEW =============
  if (view === "hero") {
    return (
      <main className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FluidCanvas />
        </div>

        <button
          type="button"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors pointer-events-auto"
          aria-label="Information"
        >
          <Info className="w-4 h-4" />
        </button>

        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-16 flex flex-col items-center gap-8 pointer-events-none">
          <div className="text-center">
            <p className="text-lg md:text-xl font-semibold text-foreground">
              {"Hey, I'm Ishant Gupta "}
              <span role="img" aria-label="waving hand">{"👋"}</span>
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground mt-2 text-balance">
              Freelance Web Developer
            </h1>
          </div>

          <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
            <a href="/">
              <Image
                src="/images/profile.PNG"
                alt="ishantgupta - Freelance Web Developer"
                width={224}
                height={224}
                className="rounded-2xl object-cover w-full h-full shadow-lg"
                priority
              />
            </a>
          </div>

          <AskInput onSubmit={handleAskSubmit} />
          <NavButtons onSelect={handleSelect} />
        </div>

        <WatermarkText />
      </main>
    )
  }

  // ============= CHAT VIEW =============
  return (
    <main className="relative min-h-screen bg-background flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FluidCanvas />
      </div>

      <button
        type="button"
        className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors pointer-events-auto"
        aria-label="Information"
      >
        <Info className="w-4 h-4" />
      </button>

      {/* Scrollable chat area */}
      <div
        ref={scrollRef}
        className="relative z-10 flex-1 overflow-y-auto"
      >
        <div className="w-full max-w-2xl mx-auto px-4 pt-6 pb-48 flex flex-col gap-6">
          {/* Profile photo at top */}
          <div className="flex justify-center">
            <div className="relative w-20 h-20">
              <a href="/">
                <Image
                  src="/images/profile.PNG"
                  alt="ishantgupta"
                  width={80}
                  height={80}
                  className="rounded-full object-cover w-full h-full shadow-md"
                />
              </a>
            </div>
          </div>

          {/* Chat messages */}
          {messages.map((msg, idx) => {
            if (msg.type === "question") {
              return <ChatBubble key={`q-${idx}`} message={msg.text!} />
            }
            if (msg.type === "typing") {
              return (
                <div key={`t-${idx}`} className="flex justify-start">
                  <TypingIndicator />
                </div>
              )
            }
            if (msg.type === "answer" && msg.section) {
              return (
                <div key={`a-${idx}`} className="w-full">
                  {renderAnswer(msg.section)}
                </div>
              )
            }
            return null
          })}
        </div>
      </div>

      {/* Bottom bar: nav buttons + input */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-md border-t border-border/50">
        <div className="w-full max-w-2xl mx-auto px-4 py-4 flex flex-col gap-4 items-center">
          <NavButtons onSelect={handleSelect} activeId={activeSection} />
          <AskInput onSubmit={handleAskSubmit} />
        </div>
      </div>
    </main>
  )
}
