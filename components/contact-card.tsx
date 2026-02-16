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
          <h3 className="text-base font-bold text-foreground underline mb-3">Whatsapp</h3>
          <a
            href="https://wa.me/917018512123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-1.5 text-sm rounded-md border border-border bg-background text-foreground hover:bg-muted transition-colors"
          >
            Whatsapp
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
