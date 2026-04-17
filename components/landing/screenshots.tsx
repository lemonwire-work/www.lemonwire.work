"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Mail, AtSign, Calendar } from "lucide-react"

const tabs = [
  {
    id: "mail",
    label: "Mail",
    icon: Mail,
    image: "/images/screenshot-mail.png",
    description: "Full-featured email with NIP-05 verified addresses and legacy SMTP bridge.",
  },
  {
    id: "identity",
    label: "Identity",
    icon: AtSign,
    image: "/images/screenshot-nip05.png",
    description: "Manage your NIP-05 handle with domain verification and instant propagation.",
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: Calendar,
    image: "/images/screenshot-calendar.png",
    description: "NIP-52 calendars with team scheduling, RSVPs, and Nostr event signing.",
  },
]

export function Screenshots() {
  const [activeTab, setActiveTab] = useState("mail")
  const activeItem = tabs.find((tab) => tab.id === activeTab) || tabs[0]

  return (
    <section id="screenshots" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDuration: '14s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
              Product
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            See it in action
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A familiar interface with decentralized superpowers under the hood.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 p-2 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshot display */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[3rem] blur-3xl opacity-40" />
          
          {/* Browser frame */}
          <div className="relative rounded-3xl border border-border/50 overflow-hidden bg-card/60 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-muted/30 backdrop-blur-xl">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-sm" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-6 py-2 rounded-xl bg-background/80 backdrop-blur-sm text-sm text-muted-foreground font-mono border border-border/30">
                  app.lemonwire.io
                </div>
              </div>
              <div className="w-20" />
            </div>
            
            <div className="relative">
              <Image
                src={activeItem.image}
                alt={activeItem.label}
                width={1400}
                height={800}
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-10">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {activeItem.description}
          </p>
        </div>
      </div>
    </section>
  )
}
