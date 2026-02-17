'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { restaurant } from '@/data/restaurant'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/menu', label: 'Menü' },
    { href: '/#standort', label: 'Standort' },
    { href: '/#oeffnungszeiten', label: 'Öffnungszeiten' },
    { href: '/#reservierung', label: 'Tisch reservieren' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.jpg" 
            alt="Schlemmer Deluxe Logo" 
            width={180} 
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href={`tel:${restaurant.phone}`}>
              <Phone className="h-4 w-4 mr-2" />
              Anrufen
            </a>
          </Button>
          <Button size="sm" className="bg-brand hover:bg-brand/90" asChild>
            <a href={restaurant.orderingLinks.lieferando} target="_blank" rel="noopener noreferrer">
              Jetzt bestellen
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-foreground/80 hover:text-brand transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <a href={`tel:${restaurant.phone}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Anrufen
                </a>
              </Button>
              <Button className="w-full bg-brand hover:bg-brand/90" asChild>
                <a href={restaurant.orderingLinks.lieferando} target="_blank" rel="noopener noreferrer">
                  Jetzt bestellen
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
