"use client"

import Image from "next/image"
import { ExternalLink, Star, Award, CheckCircle, Briefcase, Clock, DollarSign } from "lucide-react"

export function UpworkCard() {
  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Upwork profile card */}
      <div className="rounded-2xl border border-border bg-background/80 backdrop-blur-sm overflow-hidden">
        {/* Green accent bar */}
        <div className="h-1.5 bg-[#14a800]" />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/images/profile.PNG"
                alt="Ishant G. on Upwork"
                width={64}
                height={64}
                className="rounded-full object-cover w-full h-full border-2 border-[#14a800]"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#14a800] border-2 border-background" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-foreground font-serif">
                  Ishant G.
                </h2>
                <svg className="w-5 h-5 text-[#14a800] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                Shopify Pro | Theme Customization | Theme Building | AI Expert
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14a800]/10 text-[#14a800]">
              <CheckCircle className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">100% Job Success</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14a800]/10 text-[#14a800]">
              <Star className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">Top Rated</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 text-foreground">
              <DollarSign className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold">$20.00/hr</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 mb-6 py-5 px-4 rounded-xl bg-muted/50">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-foreground earnedval">$cnfK+</p>
              <p className="text-xs text-muted-foreground mt-0.5">Total earnings</p>
            </div>
            <div className="text-center border-x border-border">
              <p className="text-xl md:text-2xl font-bold text-foreground">70</p>
              <p className="text-xs text-muted-foreground mt-0.5">Total jobs</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-foreground">1,417</p>
              <p className="text-xs text-muted-foreground mt-0.5">Total hours</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-2.5 mb-6 text-sm text-foreground">
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-[#14a800] mt-0.5 flex-shrink-0" />
              <span>Top rated Freelancer & Upwork verified</span>
            </div>
            <div className="flex items-start gap-2">
              <Briefcase className="w-4 h-4 text-[#14a800] mt-0.5 flex-shrink-0" />
              <span>50+ projects successfully completed</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#14a800] mt-0.5 flex-shrink-0" />
              <span>8+ years of experience in web development</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://www.upwork.com/freelancers/~0144664f70febd1d18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#14a800] text-white font-semibold text-sm hover:bg-[#118a00] transition-colors"
          >
            View Upwork Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-foreground leading-relaxed">
        {"I'm a Web developer with more than 8 years of experience in developing websites. I have done 50+ projects and I'm skilled in Shopify, Shopify theme customization, WordPress, website customization, React, and Next.js. Feel free to hire me on Upwork!"}
      </p>
    </div>
  )
}
