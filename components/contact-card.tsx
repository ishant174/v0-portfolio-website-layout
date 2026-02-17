"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export function ContactCard() {
  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Contact card */}
      <div className="rounded-2xl bg-muted/60 backdrop-blur-sm p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
            Contact Information
          </h2>
          <span className="text-sm text-muted-foreground">@ishantgupta</span>
        </div>

        {/* Contact rows */}
        <div className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <a
              href="mailto:myuworkacc174@gmail.com"
              className="text-primary hover:underline text-sm md:text-base flex items-center gap-1"
            >
              {"myuworkacc174@gmail.com"}
              <span className="text-primary">{">"}</span>
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <span className="text-sm md:text-base text-foreground">+91 7018512123</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <span className="text-sm md:text-base text-foreground">Mandi, Himachal Pradesh, India</span>
          </div>
        </div>

        {/* Whatsapp section */}
        <div className="mt-6 pt-4 border-t border-border">
          <a
            href="https://wa.me/917018512123?text=Hi%20I%20found%20you%20on%20your%20portfolio%20and%20want%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm rounded-md border border-border bg-background text-foreground hover:bg-muted transition-colors"
          >
            {/* WhatsApp SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-4 h-4"
              fill="currentColor"
            >
              <path d="M16.04 3C9.41 3 4 8.38 4 15c0 2.64.86 5.08 2.32 7.07L4 29l7.13-2.27A11.94 11.94 0 0016.04 27C22.67 27 28 21.62 28 15S22.67 3 16.04 3zm0 21.82c-1.98 0-3.91-.58-5.55-1.66l-.4-.25-4.23 1.35 1.38-4.12-.26-.42A9.8 9.8 0 016.24 15c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.82-9.8 9.82zm5.37-7.37c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15s-.74.93-.91 1.12c-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.47-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.43-.51.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.49.07-.75.37s-.98.96-.98 2.34.99 2.72 1.13 2.91c.14.2 1.95 2.98 4.72 4.17.66.29 1.18.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z" />
            </svg>

            Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-foreground leading-relaxed">
        {"You can find my contact information above. Feel free to reach out; I'd be happy to answer any questions you have! What would you like to discuss?"}
      </p>
    </div>
  )
}
