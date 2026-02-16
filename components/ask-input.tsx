"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function AskInput() {
  const [query, setQuery] = useState("")

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask me anything..."
        className="w-full rounded-full border border-border bg-background px-6 py-3.5 pr-14 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        aria-label="Submit question"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}
