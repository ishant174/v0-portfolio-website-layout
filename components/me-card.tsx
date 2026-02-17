"use client"

import Image from "next/image"

const skills = ["Shopify", "JavaScript", "Git", "React.js", "Web Development"]

export function MeCard() {
  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Profile card */}
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start rounded-2xl border border-border bg-background/80 backdrop-blur-sm p-6">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0">
          <Image
            src="/images/avatar-illustration.jpg"
            alt="Ishant Gupta illustration"
            width={192}
            height={192}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground font-serif">Ishant Gupta</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Mandi, Himachal Pradesh, India</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {"I'm a freelance web developer specializing in custom website development, Shopify theme customization, and web performance optimization."}
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
      <p className="text-sm md:text-base text-foreground leading-relaxed">
        {"I'm Ishant Gupta, I help businesses turn ideas into fast, conversion-focused websites that actually grow revenue — not just look good.With 8+ years of hands-on experience in Shopify and modern web development, I’ve worked with startups, growing brands, and established stores to solve real problems: slow websites, low conversions, and limited customization. My approach is simple — understand the business first, then build solutions that make selling easier.Clients usually come to me when they need someone reliable who can think beyond code. Whether it’s a custom Shopify feature, performance optimization, or a complete storefront rebuild, I focus on clean execution, clear communication, and long-term results.If you’re looking for a developer who treats your project like a business investment — not just another task — we’ll get along well.Let’s build something that works beautifully and performs."}
      </p>
    </div>
  )
}
