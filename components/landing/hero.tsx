"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Lock, Zap, Shield, Sparkles } from "lucide-react"
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
                Your data.
              </span>
              <span className="block font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-1">
                <span className="relative inline-block">
                  <span className="gradient-text">Your keys.</span>
                  <span className="absolute -inset-2 bg-primary/10 blur-xl -z-10" />
                </span>
              </span>
              <span className="block font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Your rules.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              The Google Workspace alternative that&apos;s actually private.
              End-to-end encrypted email, chat, calendars, and wiki built on
              the decentralized Nostr protocol.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
              <Button
                size="lg"
                className="relative group bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-8 h-14 text-base font-medium gap-2 shadow-2xl shadow-primary/30 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative">Start for free</span>
                <ArrowUpRight className="w-5 h-5 relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-8 h-14 text-base font-medium border-border/50 bg-card/50 backdrop-blur-xl hover:bg-card hover:border-primary/30 transition-all"
              >
                Watch demo
              </Button>
            </div>

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
            {/* Stats — compact row above screenshot */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { icon: Lock, label: "E2E Encrypted", value: "100%", color: "text-green-500" },
                { icon: Zap, label: "Faster than Gmail", value: "3x", color: "text-yellow-500" },
                { icon: Shield, label: "Data breaches", value: "Zero", color: "text-blue-500" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group relative text-center p-4 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2 relative`} />
                  <div className="font-serif text-xl font-bold mb-0.5 relative">{stat.value}</div>
                  <div className="text-xs text-muted-foreground relative leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

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
                      mail.lemonwire.io
                    </div>
                  </div>
                  <div className="w-14" />
                </div>
                <div className="relative">
                  <Image
                    src="/images/screenshot-mail.png"
                    alt="Lemonwire Mail Interface"
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
