import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  Protocol: [
    { label: "NIP-05", href: "#protocol" },
    { label: "NIP-52", href: "#protocol" },
    { label: "Marmot Protocol", href: "https://github.com/marmot-protocol/marmot" },
    { label: "OpenBao", href: "https://openbao.org/" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="relative w-9 h-9 transition-transform group-hover:scale-105">
                <Image 
                  src="/images/logo.png" 
                  alt="Lemonwire" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-lg font-semibold">
                Lemonwire
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
              The decentralized workspace for teams who refuse to compromise on privacy.
            </p>
            
            {/* Contact links */}
            <div className="flex items-center gap-3">
              <Link
                href="mailto:james@atelierlogos.studio"
                className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
              <Link
                href="https://njump.me/npub1l70twzdewgu852fgvkplyhp068w259zqw724vtr6c4hqmzwc23gqkjmfx7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center opacity-70 hover:opacity-100 hover:border-primary/30 transition-all"
                aria-label="Nostr"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://user-images.githubusercontent.com/99301796/219715635-58e1cafc-97d4-44ec-bccb-b70e09701579.png"
                  alt="Nostr"
                  className="w-5 h-5 object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-medium text-foreground mb-4 text-sm">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Lemonwire. Open source. Open protocol.
          </p>
        </div>
      </div>
    </footer>
  )
}
