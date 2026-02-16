"use client"

export function LocationCard() {
  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Map embed */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-muted/40">
        <iframe
          title="Mandi, Himachal Pradesh location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54000!2d76.9!3d31.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904e9fd4e40e1e3%3A0x4ab5f1d875e7e3a9!2sMandi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
        {/* Location label overlay */}
        <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-sm border border-border shadow-sm">
          <span className="text-sm font-medium text-foreground">Mandi, India</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-foreground leading-relaxed">
        {"You can see my location displayed on the map above. I'm currently based in Mandi, Himachal Pradesh, India. Is there anything specific you'd like to know about my area or my work?"}
      </p>
    </div>
  )
}
