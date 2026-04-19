import { AnimatedBackground } from "@/components/landing/animated-background"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Protocols } from "@/components/landing/protocols"
import { Screenshots } from "@/components/landing/screenshots"
import { Savings } from "@/components/landing/savings"
import { Pricing } from "@/components/landing/pricing"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <Hero />
      <Features />
      <Protocols />
      <Screenshots />
      <Savings />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
