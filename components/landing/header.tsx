"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

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
      <div>
        <nav className={`
          flex items-center justify-between px-6 py-4 transition-all duration-300
          ${scrolled
            ? 'bg-card/80 backdrop-blur-2xl shadow-xl shadow-foreground/5 border-b border-border/50'
            : 'bg-card/60 backdrop-blur-xl'
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
              size="sm"
              className="relative group bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-5 h-9 gap-2.5 shadow-lg shadow-primary/25 font-semibold text-sm overflow-hidden border border-primary/20 hover:shadow-primary/40 transition-all duration-200"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/3840px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="" className="w-4 h-4 relative shrink-0" />
              <span className="relative tracking-wide">Get Extension</span>
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
        <div className="md:hidden animate-fade-in border-b border-border/50">
          <div className="flex flex-col gap-1 p-4 bg-card/95 backdrop-blur-2xl shadow-xl">
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
            <Button className="bg-primary text-primary-foreground rounded-xl gap-2 shadow-lg shadow-primary/25">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/3840px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="" className="w-4 h-4" />
              Get Extension
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
