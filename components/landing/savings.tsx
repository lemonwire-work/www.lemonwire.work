"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Shield, Lock, Key, Radio, Server, Heart, Code, Users, MessageSquare, Mail, Calendar, FileText } from "lucide-react"

const comparisonData5Year = [
  { users: 50, google: 79000, savings: 34000 },
  { users: 100, google: 158000, savings: 113000 },
  { users: 111, google: 175260, savings: 130260 },
  { users: 150, google: 237000, savings: 192000 },
  { users: 200, google: 316000, savings: 271000 },
  { users: 300, google: 474000, savings: 429000 },
  { users: 500, google: 790000, savings: 745000 },
]

const features = [
  { 
    feature: "Unlimited Users", 
    lemonwire: "Unlimited seats, flat fee", 
    google: "$316/user/year" 
  },
  { 
    feature: "E2EE Messaging (MLS)", 
    lemonwire: "End-to-end encrypted", 
    google: "Not available" 
  },
  { 
    feature: "Nostr Identity Layer", 
    lemonwire: "Self-sovereign identity", 
    google: "Google account required" 
  },
  { 
    feature: "NIP-46 Signer", 
    lemonwire: "Built-in key management", 
    google: "Not available" 
  },
  { 
    feature: "Self-hosted Vault", 
    lemonwire: "Your keys, your vault", 
    google: "Third-party only" 
  },
  { 
    feature: "Embedded Relay", 
    lemonwire: "Run your own relay", 
    google: "Not available" 
  },
  { 
    feature: "Team Channels", 
    lemonwire: "Real-time collaboration", 
    google: "Included" 
  },
  { 
    feature: "End-to-end Encryption", 
    lemonwire: "Client-side E2EE", 
    google: "Google-side only" 
  },
  { 
    feature: "NIP-05 Verified Email", 
    lemonwire: "@you@yourdomain.com", 
    google: "Google-only" 
  },
  { 
    feature: "Calendar Integration", 
    lemonwire: "NIP-52 powered", 
    google: "Included" 
  },
  { 
    feature: "Document Collaboration", 
    lemonwire: "Wiki & docs", 
    google: "Included" 
  },
  { 
    feature: "Your Identity, Your Keys", 
    lemonwire: "Portable Nostr identity", 
    google: "Vendor lock-in" 
  },
]

const nostrContributions = [
  {
    title: "🍋's: Lexical Enterprise Mappings On Nostr",
    description: "Two NIPs for enterprise-grade workspaces on Nostr: organizational roster groups with membership lists, capability tags, scoped channels, and MLS E2EE messaging for bounded team communication.",
  },
]

function formatCurrency(amount: number): string {
  return `+$${amount.toLocaleString()}`
}

function formatDollar(amount: number): string {
  return `$${amount.toLocaleString()}`
}

export function Savings() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="savings" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDuration: '18s' }} />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDuration: '22s', animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
                Cost Comparison
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Flat pricing.
              <br />
              <span className="text-muted-foreground">Unlimited seats.</span>
            </h2>
          </div>
          <div className="flex-1 lg:pt-16">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Google charges you <strong className="text-foreground">$316 per seat, per year, forever</strong> — and you still don&apos;t own your identity layer. We give you unlimited users, E2EE messaging, self-sovereign identity, and a full workspace for one flat lifetime cost.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You save money starting at <strong className="text-foreground">111 seats</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          <div className="relative group rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-10 shadow-lg shadow-primary/5 hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
            <div className="relative">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-4">Break-even</p>
              <p className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-2">111</p>
              <p className="text-muted-foreground">users before you start saving</p>
            </div>
          </div>

          <div className="relative group rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-10 shadow-lg shadow-primary/5 hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
            <div className="relative">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-4">At 500 users (5yr)</p>
              <p className="font-serif text-5xl md:text-6xl font-bold gradient-text mb-2">94x</p>
              <p className="text-muted-foreground">ROI vs Google Workspace</p>
            </div>
          </div>

          <div className="relative group rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-10 shadow-lg shadow-primary/5 hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
            <div className="relative">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground mb-4">Lifetime cost</p>
              <p className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-2">$45k</p>
              <p className="text-muted-foreground">one-time, unlimited seats</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden mb-20">
          <div className="p-6 md:p-8 border-b border-border/50 bg-muted/30">
            <h3 className="font-serif text-xl font-bold text-foreground">Feature Comparison</h3>
            <p className="text-sm text-muted-foreground mt-1">What you get with each platform</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground w-1/3">Feature</th>
                  <th className="text-left p-4 text-base font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1920px-Google_%22G%22_logo.svg.png" alt="Google" className="w-5 h-5" />
                      <span>Google Workspace</span>
                    </div>
                  </th>
                  <th className="text-right p-4 text-base font-semibold text-foreground">
                    <div className="flex items-center justify-end gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/logo.png" alt="Lemonwire" className="w-6 h-6 object-contain" />
                      <span>Lemonwire</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => {
                  const lemonwireWins = row.google === "Not available" || row.google === "Google-only" || row.google === "Third-party only" || row.google === "Vendor lock-in"
                  return (
                  <tr key={row.feature} className={`
                    border-b border-border/30 transition-colors
                    ${lemonwireWins ? 'bg-gradient-to-r from-primary/10 to-transparent' : 'hover:bg-muted/20'}
                  `}>
                    <td className="p-5 md:p-6">
                      <div className="text-sm font-medium text-foreground">
                        {row.feature}
                      </div>
                    </td>
                    <td className="p-5 md:p-6">
                      <div className="text-sm text-foreground">
                        {row.google}
                      </div>
                    </td>
                    <td className="p-5 md:p-6 text-right">
                      <div className="text-sm font-medium text-foreground">
                        {row.lemonwire}
                      </div>
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
          <div className="p-5 md:p-6 border-t border-border/50 bg-muted/30">
            <p className="text-sm text-foreground font-medium">
              7 features Google doesn't offer — or charges extra for. Over 5 years, you save $34k at 50 users and up to $745k at 500 users vs Google Workspace.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground">
              Built on Nostr
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {nostrContributions.map((contribution, index) => (
              <div
                key={contribution.title}
                className={`
                  relative group rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8
                  hover:border-primary/30 hover:bg-primary/5 transition-all duration-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="font-serif text-lg font-semibold text-foreground">{contribution.title}</h4>
                </div>
                <a
                    href="https://github.com/lemonwire-work/lemons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-sm font-mono text-foreground hover:bg-primary/20 hover:text-foreground transition-colors mb-4"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://github.com/favicon.ico" alt="" className="w-4 h-4" />
                    github.com/lemonwire-work/lemons
                    <span className="text-muted-foreground">·</span>
                    2 NIPs
                  </a>
                <p className="text-muted-foreground leading-relaxed">{contribution.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-foreground">
              Included at no extra cost
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Key, label: "NIP-46 Signer" },
              { icon: Lock, label: "MLS E2EE Messaging" },
              { icon: Shield, label: "Nostr Identity" },
              { icon: Radio, label: "Embedded Relay" },
              { icon: Server, label: "Self-hosted Secrets Vault" },
            ].map((feature, index) => (
              <div
                key={feature.label}
                className={`
                  inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm
                  hover:border-primary/30 hover:bg-primary/5 transition-all duration-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{
                  transitionDelay: isVisible ? `${600 + index * 100}ms` : '0ms',
                }}
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-foreground">
                  <feature.icon className="w-4.5 h-4.5" />
                </div>
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
                <div className="flex items-center gap-0.5 text-primary">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}