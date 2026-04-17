"use client"

import { Mail, MessageSquare, Users, Calendar, BookOpen, KeyRound } from "lucide-react"
import { useEffect, useRef } from "react"

const features = [
  {
    icon: Mail,
    title: "Encrypted Email",
    description: "NIP-05 verified addresses. Your inbox, truly private. No scanning, no ads, no surveillance.",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description: "Marmot Protocol for E2EE messaging. Slack-like channels without the corporate backdoors.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Onboard teammates with Nostr identities. Granular permissions without compromising privacy.",
    highlight: false,
  },
  {
    icon: Calendar,
    title: "Calendars",
    description: "NIP-52 powered scheduling. Your meetings, your data. Coming soon: NIP-5A for public calendar pages.",
    highlight: false,
  },
  {
    icon: BookOpen,
    title: "Wiki",
    description: "Collaborative docs that stay between you and your team. Knowledge bases without the knowledge harvesting.",
    highlight: false,
  },
  {
    icon: KeyRound,
    title: "OpenBao Vault",
    description: "Managed secret storage for your nsec keys. Enterprise-grade security for your cryptographic identity.",
    highlight: true,
  },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('.feature-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDuration: '20s', animationDelay: '5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
              Features
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Everything you need.
            <br />
            <span className="text-muted-foreground">Nothing they can spy on.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A complete workspace suite rebuilt from the ground up with privacy as the foundation, 
            not an afterthought.
          </p>
        </div>

        {/* Features grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`
                feature-card group relative p-8 md:p-10 rounded-3xl border transition-all duration-500 opacity-0 translate-y-8
                ${feature.highlight 
                  ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30 hover:border-primary/50 shadow-lg shadow-primary/5' 
                  : 'bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 shadow-lg'
                }
                ${index === 0 ? 'lg:col-span-2' : ''}
                ${index === 5 ? 'lg:col-span-2' : ''}
                hover:-translate-y-2 hover:shadow-2xl
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
              
              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div className={`
                  absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100
                  ${feature.highlight ? 'bg-primary/30' : 'bg-primary/20'}
                `} />
                <div className={`
                  relative inline-flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                  ${feature.highlight ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' : 'bg-muted text-foreground'}
                `}>
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
