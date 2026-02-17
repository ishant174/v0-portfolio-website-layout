"use client"

import Image from "next/image"

const skills = ["Shopify", "JavaScript", "Git", "React.js", "Web Development"]

export function MeCard() {
  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Profile card */}
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start rounded-2xl border border-border bg-background/80 backdrop-blur-sm p-6">

        <div className="flex flex-col gap-3 text-center sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground font-serif">Ishant Gupta</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Mandi, Himachal Pradesh, India</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            Freelance web developer focused on building modern, high-performance websites with clean architecture,
            scalable solutions, and strong attention to user experience and performance.
          </p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description text */}
      <div className="text-sm md:text-base text-foreground leading-relaxed space-y-4">
        <p>
          I'm <strong>Ishant Gupta</strong>, and I help businesses turn ideas into{" "}
          <strong>fast, conversion-focused websites</strong> that actually grow
          revenue — not just look good.
        </p>

        <p>
          With <strong>8+ years of hands-on experience</strong> in Shopify and modern
          web development, I’ve worked with startups, growing brands, and established
          stores to solve real problems like{" "}
          <strong>slow websites, low conversions, and limited customization</strong>.
          My approach is simple — understand the business first, then build solutions
          that make selling easier.
        </p>

        <p>
          Clients usually come to me when they need someone{" "}
          <strong>reliable who thinks beyond code</strong>. Whether it’s a custom
          Shopify feature, performance optimization, or a complete storefront rebuild,
          I focus on <strong>clean execution, clear communication, and long-term results</strong>.
        </p>

        <p>
          If you’re looking for a developer who treats your project like a{" "}
          <strong>business investment</strong> — not just another task — we’ll get
          along well.
        </p>

        <p className="font-medium">
          Let’s build something that works beautifully <strong>and performs</strong>.
        </p>
      </div>

    </div>
  )
}
