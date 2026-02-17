'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { restaurant } from '@/data/restaurant'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const navLinks = [
    { href: '/menu', label: 'Menü' },
    { href: '/#oeffnungszeiten', label: 'Öffnungszeiten' },
    { href: '/#reservierung', label: 'Tisch reservieren' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-[#1a1a1a]/80 border-b border-border dark:border-white/10">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.jpg" 
            alt="Schlemmer Deluxe Logo" 
            width={48} 
            height={48}
            className="h-10 w-10 object-contain rounded"
            priority
          />
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-brand">Schlemmer</span>
            <span className="text-xl font-bold text-foreground dark:text-white ml-1">Deluxe</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 dark:text-white/80 hover:text-brand transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Dark Mode */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-muted dark:hover:bg-white/10 transition-colors"
            aria-label="Theme wechseln"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-foreground/70" />
            )}
          </button>
          <Button variant="outline" size="sm" className="dark:border-white/20 dark:text-white dark:hover:bg-white/10" asChild>
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

        {/* Mobile: Dark Mode + Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-muted dark:hover:bg-white/10 transition-colors"
            aria-label="Theme wechseln"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-foreground/70" />
            )}
          </button>
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 dark:text-white" /> : <Menu className="h-6 w-6 dark:text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1a1a1a] border-b border-border dark:border-white/10">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-foreground/80 dark:text-white/80 hover:text-brand transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="outline" className="w-full dark:border-white/20 dark:text-white" asChild>
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
