export function WatermarkText() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none z-[5]"
      aria-hidden="true"
    >
      <p className="text-[14vw] font-serif font-bold text-foreground/[0.06] whitespace-nowrap leading-none tracking-tight translate-y-[25%]">
        ishantgupta
      </p>
    </div>
  )
}
