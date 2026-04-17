"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowUpRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For individuals exploring the decentralized future.",
    features: [
      "Up to 5 team members",
      "1 NIP-05 domain",
      "100MB encrypted email",
      "Basic calendar",
      "Community Discord",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Team",
    price: "$12",
    period: "/user/mo",
    description: "For teams serious about privacy and sovereignty.",
    features: [
      "Unlimited members",
      "5 NIP-05 domains",
      "10GB encrypted email",
      "Marmot E2EE chat",
      "Wiki & docs",
      "OpenBao key vault",
      "Priority support",
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with compliance and scale needs.",
    features: [
      "Everything in Team",
      "Unlimited domains",
      "Unlimited storage",
      "Self-hosted option",
      "Custom relay deployment",
      "SSO / SCIM",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

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
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
              Pricing
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Simple pricing.
            <br />
            <span className="text-muted-foreground">No surveillance tax.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Start free, scale when ready. You pay for features, not for us to mine your data.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative group rounded-3xl border transition-all duration-500",
                plan.popular
                  ? "border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent md:scale-105 shadow-2xl shadow-primary/20"
                  : "border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 shadow-lg hover:shadow-xl hover:-translate-y-1"
              )}
            >
              {/* Glow effect for popular plan */}
              {plan.popular && (
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[2rem] blur-2xl opacity-50" />
              )}

              <div className="relative p-8 md:p-10">
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg shadow-primary/30">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8 pt-2">
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-serif text-5xl font-bold">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground font-medium">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-110",
                        plan.popular ? "bg-primary/20" : "bg-muted"
                      )}>
                        <Check className={cn(
                          "w-3.5 h-3.5",
                          plan.popular ? "text-primary" : "text-foreground/70"
                        )} />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={cn(
                    "w-full rounded-2xl h-12 gap-2 font-medium transition-all",
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  )}
                >
                  {plan.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            All plans include end-to-end encryption and Nostr protocol support.
          </p>
        </div>
      </div>
    </section>
  )
}
