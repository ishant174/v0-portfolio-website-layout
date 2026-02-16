import { ProfileImage } from "@/components/profile-image"
import { AskInput } from "@/components/ask-input"
import { NavButtons } from "@/components/nav-buttons"
import { WatermarkText } from "@/components/watermark-text"
import { FluidCanvas } from "@/components/fluid-canvas"
import { Info } from "lucide-react"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      {/* Fluid background canvas - sits behind everything but captures mouse */}
      <div className="absolute inset-0 z-0">
        <FluidCanvas />
      </div>

      {/* Info button top-right */}
      <button
        type="button"
        className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Information"
      >
        <Info className="w-4 h-4" />
      </button>

      {/* Main card - pointer-events-none so mouse goes through to canvas, re-enable on interactive elements */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-16 flex flex-col items-center gap-8 pointer-events-none">
        {/* Heading */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-semibold text-foreground">
            {"Hey, I'm ishantgupta "}
            <span role="img" aria-label="waving hand">{"👋"}</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground mt-2 text-balance">
            Freelance Web Developer
          </h1>
        </div>

        {/* Profile Image */}
        <ProfileImage />

        {/* Ask Input */}
        <AskInput />

        {/* Navigation Buttons */}
        <NavButtons />
      </div>

      {/* Watermark */}
      <WatermarkText />
    </main>
  )
}
