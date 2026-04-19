"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const principles = [
  { value: "Open Protocol", label: "No vendor lock-in. Built on Nostr." },
  { value: "Your Keys", label: "We never hold your cryptographic identity." },
  { value: "E2EE by Default", label: "Encryption isn't a feature. It's the foundation." },
  { value: "Zero Trust", label: "Designed so even we can't read your data." },
]

export function CTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Principles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24">
          {principles.map((item) => (
            <div
              key={item.value}
              className="group relative p-8 md:p-10 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500 pointer-events-none" />
              <div className="relative">
                <div className="font-serif text-lg md:text-xl font-bold text-foreground mb-3">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-[3rem] blur-3xl opacity-40" />
          
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 p-12 md:p-20 text-center overflow-hidden shadow-2xl">
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary/40 animate-float"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${10 + i * 10}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${5 + i}s`
                  }}
                />
              ))}
            </div>

            <div className="relative">
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground font-medium">
                    Join the revolution
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Ready to own your workspace?
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Join thousands who have reclaimed their digital sovereignty. 
                Your keys, your data, your rules.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="https://njump.me/npub1l70twzdewgu852fgvkplyhp068w259zqw724vtr6c4hqmzwc23gqkjmfx7" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="relative group bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-10 h-16 text-lg font-medium gap-2 shadow-2xl shadow-primary/30 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://user-images.githubusercontent.com/99301796/219715635-58e1cafc-97d4-44ec-bccb-b70e09701579.png" alt="" className="w-5 h-5 relative" />
                  <span className="relative">Find us on Nostr</span>
                </Button>
              </a>
                <a href="mailto:admin@ops.lemonwire.work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-2xl px-10 h-16 text-lg font-medium border-border/50 bg-card/50 backdrop-blur-xl hover:bg-card hover:border-primary/30 transition-all"
                  >
                    Email Us
                  </Button>
                </a>
              </div>

              {/* Trust points */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm shadow-green-500/50" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm shadow-green-500/50" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm shadow-green-500/50" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
