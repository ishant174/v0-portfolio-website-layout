"use client"

import { Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Performance Optimization"
    ],
  },
  {
    title: "Backend & eCommerce",
    skills: [
      "Shopify",
      "Shopify Theme Development",
      "Liquid",
      "Shopify Customization",
      "Shopify APIs",
      "WordPress",
      "PHP",
      "REST APIs",
      "Custom Web Development"
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Shopify CLI",
      "Figma to Code",
      "Debugging & Optimization",
      "SEO Best Practices",
      "Page Speed Optimization",
      "Upwork Client Management"
    ],
  },
]


export function SkillsCard() {
  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Skills card */}
      <div className="rounded-2xl border border-border bg-background/80 backdrop-blur-sm p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif mb-6">
          {"Skills & Expertise"}
        </h2>

        <div className="flex flex-col gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 text-sm font-medium rounded-full bg-foreground text-background"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-foreground leading-relaxed">
        {"These are the tools and technologies I work with daily to build fast, reliable, and scalable websites. Along with technical expertise, I focus heavily on communication, problem-solving, and understanding business goals — because great development is not just about code, it’s about delivering results.If you’d like to know more about how I can help with your project, feel free to reach out."}
      </p>
    </div>
  )
}
