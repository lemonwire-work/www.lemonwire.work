"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Protocol", href: "#protocol" },
  { label: "Pricing", href: "#pricing" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 md:mx-6 mt-4">
        <nav className={`
          flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300
          ${scrolled 
            ? 'border border-border/50 bg-card/80 backdrop-blur-2xl shadow-xl shadow-foreground/5' 
            : 'border border-border/30 bg-card/60 backdrop-blur-xl shadow-lg shadow-foreground/3'
          }
        `}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
              <Image 
                src="/images/logo.png" 
                alt="Lemonwire" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              Lemonwire
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground rounded-xl font-medium"
            >
              Sign In
            </Button>
            <Button 
              size="sm"
              className="relative group bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-5 gap-2 shadow-lg shadow-primary/25 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative">Get Started</span>
              <ArrowUpRight className="w-4 h-4 relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden mx-4 mt-2 animate-fade-in">
          <div className="flex flex-col gap-1 p-4 border border-border/50 bg-card/95 backdrop-blur-2xl rounded-2xl shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border/50 my-2" />
            <Button 
              variant="ghost" 
              className="justify-start text-muted-foreground rounded-xl font-medium"
            >
              Sign In
            </Button>
            <Button className="bg-primary text-primary-foreground rounded-xl gap-2 shadow-lg shadow-primary/25">
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
