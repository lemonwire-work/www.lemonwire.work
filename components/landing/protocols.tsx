"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const protocols = [
  {
    id: "NIP-05",
    name: "NIP-05",
    tagline: "Identity Verification",
    description: "Human-readable Nostr addresses. your-name@yourcompany.com becomes a verified cryptographic identity.",
    status: "stable",
  },
  {
    id: "NIP-52",
    name: "NIP-52", 
    tagline: "Calendar Events",
    description: "Decentralized calendar protocol. Schedule meetings and events that sync across any Nostr client.",
    status: "stable",
  },
  {
    id: "MARMOT",
    name: "Marmot Protocol",
    tagline: "E2EE Real-time Chat",
    description: "Double Ratchet encryption for Nostr. Perfect forward secrecy for every message, every channel.",
    status: "stable",
  },
  {
    id: "NIP-5A",
    name: "NIP-5A",
    tagline: "Hosted Calendar Pages",
    description: "Public scheduling pages powered by Nostr. Let others book time with you, on your terms.",
    status: "coming soon",
  },
]

export function Protocols() {
  return (
    <section id="protocol" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDuration: '18s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
                Protocol Stack
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Built on open standards
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
            No proprietary lock-in. Every feature is built on documented, 
            interoperable Nostr protocols.
          </p>
        </div>

        {/* Protocol cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
          {protocols.map((protocol, index) => (
            <div
              key={protocol.id}
              className="group relative p-8 md:p-10 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500 pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-mono text-2xl font-bold text-foreground group-hover:text-primary group-hover:scale-105 transition-all inline-block">
                        {protocol.name}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={protocol.status === "stable" 
                          ? "bg-green-500/10 text-green-700 border-green-500/30 text-xs font-medium" 
                          : "bg-blue-500/10 text-blue-700 border-blue-500/30 text-xs font-medium"
                        }
                      >
                        {protocol.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground/80 font-semibold mb-4">
                      {protocol.tagline}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {protocol.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Code snippet with enhanced styling */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-3xl border border-border/50 bg-slate-950 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400/80 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/80 shadow-sm" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400/80 shadow-sm" />
                </div>
                <span className="flex-1 text-center text-sm font-mono text-slate-400">
                  .well-known/nostr.json
                </span>
                <div className="w-16" />
              </div>
              <pre className="p-8 text-sm font-mono overflow-x-auto">
                <code className="text-slate-300">
{`{
  `}<span className="text-amber-400">{`"names"`}</span>{`: {
    `}<span className="text-emerald-400">{`"alice"`}</span>{`: `}<span className="text-slate-100">{`"npub1..."`}</span>{`,
    `}<span className="text-emerald-400">{`"bob"`}</span>{`: `}<span className="text-slate-100">{`"npub1..."`}</span>{`
  },
  `}<span className="text-amber-400">{`"relays"`}</span>{`: {
    `}<span className="text-emerald-400">{`"npub1..."`}</span>{`: [`}<span className="text-slate-100">{`"wss://relay.lemonwire.io"`}</span>{`]
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
