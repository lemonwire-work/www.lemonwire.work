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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-float"
          style={{
            top: '10%',
            left: '10%',
            animationDelay: '0s',
            animationDuration: '8s'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px] animate-float"
          style={{
            bottom: '10%',
            right: '10%',
            animationDelay: '2s',
            animationDuration: '10s'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-[80px] animate-float"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animationDelay: '4s',
            animationDuration: '12s'
          }}
        />
      </div>

      {/* Dynamic spotlight following mouse */}
      <div 
        className="absolute inset-0 opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 165, 32, 0.15), transparent 70%)`
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/40 animate-float"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Badge with shimmer effect */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-full blur opacity-40 group-hover:opacity-60 transition" />
              <div className="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/40 bg-card/80 backdrop-blur-xl">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm text-foreground font-medium">
                  Powered by Nostr Protocol
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-center mb-10">
            <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-3">
              Your data.
            </span>
            <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-3">
              <span className="relative inline-block">
                <span className="gradient-text">Your keys.</span>
                <span className="absolute -inset-2 bg-primary/10 blur-xl -z-10" />
              </span>
            </span>
            <span className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
              Your rules.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed">
            The Google Workspace alternative that&apos;s actually private. 
            End-to-end encrypted email, chat, calendars, and wiki built on 
            the decentralized Nostr protocol.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <Button 
              size="lg" 
              className="relative group bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-10 h-16 text-lg font-medium gap-2 shadow-2xl shadow-primary/30 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative">Start for free</span>
              <ArrowUpRight className="w-5 h-5 relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-2xl px-10 h-16 text-lg font-medium border-border/50 bg-card/50 backdrop-blur-xl hover:bg-card hover:border-primary/30 transition-all"
            >
              Watch demo
            </Button>
          </div>

          {/* Stats row with glassmorphism */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-20">
            {[
              { icon: Lock, label: "E2E Encrypted", value: "100%", color: "text-green-500" },
              { icon: Zap, label: "Faster than Gmail", value: "3x", color: "text-yellow-500" },
              { icon: Shield, label: "Data breaches", value: "Zero", color: "text-blue-500" },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className="group relative text-center p-6 md:p-8 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <stat.icon className={`w-7 h-7 md:w-8 md:h-8 ${stat.color} mx-auto mb-4 relative`} />
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-2 relative">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground relative">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Product preview with enhanced effects */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-[2rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative rounded-3xl border border-border/50 overflow-hidden bg-card/60 backdrop-blur-xl shadow-2xl shadow-foreground/10 group-hover:shadow-primary/20 transition-all duration-500 group-hover:-translate-y-2">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-border/50 bg-muted/30 backdrop-blur-xl">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-6 py-2 rounded-xl bg-background/80 backdrop-blur-sm text-sm text-muted-foreground font-mono border border-border/30">
                    mail.lemonwire.io
                  </div>
                </div>
                <div className="w-20" />
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

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground animate-bounce">
        <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  )
}
