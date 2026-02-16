"use client"

interface ChatBubbleProps {
  message: string
}

export function ChatBubble({ message }: ChatBubbleProps) {
  return (
    <div className="flex justify-center animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium max-w-md text-center">
        {message}
      </div>
    </div>
  )
}
