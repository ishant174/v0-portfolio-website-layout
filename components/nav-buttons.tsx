"use client"

import { Smile, FolderOpen, Layers, Users, MapPin } from "lucide-react"

const navItems = [
  { label: "Me", icon: Smile },
  { label: "Projects", icon: FolderOpen },
  { label: "Skills", icon: Layers },
  { label: "Contact", icon: Users },
  { label: "Location", icon: MapPin },
]

export function NavButtons() {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap pointer-events-auto">
      {navItems.map((item) => (
        <button
          key={item.label}
          type="button"
          className="flex flex-col items-center justify-center gap-1.5 w-[100px] h-[80px] rounded-xl border border-border bg-background hover:bg-secondary/50 transition-colors group"
        >
          <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium text-foreground">{item.label}</span>
        </button>
      ))}
    </div>
  )
}
