"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setMousePosition({ x, y })
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-float"
          style={{ top: '10%', left: '5%', animationDelay: '0s', animationDuration: '8s' }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px] animate-float"
          style={{ bottom: '10%', right: '5%', animationDelay: '2s', animationDuration: '10s' }}
        />
      </div>

      {/* Dynamic spotlight */}
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 165, 32, 0.15), transparent 70%)`
        }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* Left column — text & CTAs */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="mb-8">
              <div className="relative inline-flex group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-full blur opacity-40 group-hover:opacity-60 transition" />
                <div className="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/40 bg-card/80 backdrop-blur-xl">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm text-foreground font-medium">
                    Powered by Nostr Protocol
                  </span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="mb-6">
              <span className="block font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-1">
                Nostr-powered
              </span>
              <span className="block font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-1">
                Encrypted
              </span>
              <span className="block font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Collaboration
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              A zero-knowledge workspace for teams that can&apos;t afford to be compromised.
              Email, chat, calendars, and docs — cryptographically private by design,
              not by policy.
            </p>

            {/* Powered-by logos */}
            <div className="border-t border-border/40 pt-8">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium mb-5">
                Powered by
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {/* OpenBao */}
                <a
                  href="https://openbao.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://raw.githubusercontent.com/openbao/artwork/refs/heads/main/color/openbao-vertical-text-color.svg"
                    alt="OpenBao"
                    className="h-10 w-auto"
                  />
                </a>

                <div className="h-8 w-px bg-border/50" />

                {/* Marmot Protocol */}
                <a
                  href="https://github.com/marmot-protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://avatars.githubusercontent.com/u/200956832?s=200&v=4"
                    alt="Marmot Protocol"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    Marmot Protocol
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right column — product preview */}
          <div className="relative">
            {/* Screenshot */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-[2rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative rounded-2xl border border-border/50 overflow-hidden bg-card/60 backdrop-blur-xl shadow-2xl shadow-foreground/10 group-hover:shadow-primary/20 transition-all duration-500 group-hover:-translate-y-1">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30 backdrop-blur-xl">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm text-xs text-muted-foreground font-mono border border-border/30">
                      app.lemonwire.work
                    </div>
                  </div>
                  <div className="w-14" />
                </div>
                <div className="relative">
                  <Image
                    src="/images/screenshot-app-1.png"
                    alt="Lemonwire Admin Dashboard"
                    width={1400}
                    height={800}
                    className="w-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  )
}
