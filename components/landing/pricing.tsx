"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDuration: '16s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground">
              Design Partner Program
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Build with us.
            <br />
            <span className="text-muted-foreground">From the ground up.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are accepting <strong className="text-foreground">6 design partners</strong> over the Spring of 2026 — organizations with a genuine need for zero-knowledge collaboration environments.
          </p>
        </div>

        {/* Partner card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative group rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

            <div className="relative p-10 md:p-14">
              {/* Lemon icon */}
              <div className="text-4xl mb-8">🍋</div>

              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Design Partner Program
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                We are accepting <strong className="text-foreground">6 design partners</strong> over the Spring of 2026 — organizations with a genuine need for zero-knowledge collaboration environments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                To apply, reach out directly. We&apos;ll review your use case and, if it&apos;s a fit, send you an onboarding link.
              </p>

              {/* Profile card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-background/60 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/avatar.jpg"
                  alt="Comrade ChaCha20-Poly1305"
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-foreground">Comrade ChaCha20-Poly1305</p>
                  <p className="text-xs text-muted-foreground font-mono break-all">
                    npub1l70twzdewgu852fgvkplyhp068w259zqw724vtr6c4hqmzwc23gqkjmfx7
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <a
                href="https://vectorapp.io/profile/npub1l70twzdewgu852fgvkplyhp068w259zqw724vtr6c4hqmzwc23gqkjmfx7"
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-3"
              >
                <Button className="w-full rounded-2xl h-13 text-base font-semibold bg-foreground text-background hover:bg-foreground/90 shadow-lg gap-2">
                  Message on Vector
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>

              <a
                href="mailto:james@atelierlogos.studio"
                className="block mb-6"
              >
                <Button variant="outline" className="w-full rounded-2xl h-13 text-base font-semibold gap-2">
                  Email Us
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>

              <p className="text-center text-xs text-muted-foreground">
                Only 6 slots available · $45,000 lifetime (unlimited seats)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
