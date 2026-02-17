import { Star, CheckCircle2, ArrowUpRight } from "lucide-react"

export function TrustBadges() {
  return (
    <div className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
      {/* Badge row */}
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/[0.04] border border-border px-3.5 py-1.5 text-xs font-medium text-foreground">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          Top Rated on Upwork
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/[0.04] border border-border px-3.5 py-1.5 text-xs font-medium text-foreground">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          70+ Projects Delivered
        </span>
      </div>

      {/* CTA link */}
      <a
        href="https://www.upwork.com/freelancers/~0144664f70febd1d18"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-2 decoration-primary/30 hover:decoration-primary/60"
      >
        View my Upwork profile
        <ArrowUpRight className="w-3 h-3" />
      </a>
    </div>
  )
}
