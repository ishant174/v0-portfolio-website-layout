"use client"

import { Smile, Layers, Users, MapPin, MessageCircle, Briefcase } from "lucide-react"

const navItems = [
  { label: "Me", icon: Smile, id: "me" },
  { label: "Skills", icon: Layers, id: "skills" },
  { label: "Contact", icon: Users, id: "contact" },
  { label: "Location", icon: MapPin, id: "location" },
  { label: "Upwork", icon: Briefcase, id: "upwork" },
]

interface NavButtonsProps {
  onSelect?: (id: string) => void
  activeId?: string | null
}

export function NavButtons({ onSelect, activeId }: NavButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap pointer-events-auto">
      {navItems.map((item) => (
        <button
          key={item.label}
          type="button"
          onClick={() => onSelect?.(item.id)}
          className={`flex flex-col items-center justify-center gap-1.5 w-[100px] h-[80px] rounded-xl border transition-colors group ${
            activeId === item.id
              ? "border-primary bg-primary/5"
              : "border-border bg-background hover:bg-secondary/50"
          }`}
        >
          <item.icon className={`w-5 h-5 group-hover:scale-110 transition-transform ${
            activeId === item.id ? "text-primary" : "text-primary"
          }`} />
          <span className="text-xs font-medium text-foreground">{item.label}</span>
        </button>
      ))}
      <button
        type="button"
        className="flex items-center justify-center w-[52px] h-[80px] rounded-xl border border-border bg-background hover:bg-secondary/50 transition-colors"
        aria-label="Chat"
      >
        <MessageCircle className="w-5 h-5 text-primary" />
      </button>
    </div>
  )
}
