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
        {"I'm Ishant Gupta, a web developer at The Brihaspati Infotech Pvt. Ltd. based in Mandi, Himachal Pradesh, India. I'm passionate about turning ideas into functional and beautiful websites that perform well. My expertise lies in JavaScript, HTML, CSS, React.js, and Shopify, among other technologies."}
      </p>
    </div>
  )
}
