export function WatermarkText() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <p className="text-[12vw] font-serif font-bold text-foreground/[0.03] whitespace-nowrap leading-none tracking-tight translate-y-[30%]">
        ishantgupta
      </p>
    </div>
  )
}
