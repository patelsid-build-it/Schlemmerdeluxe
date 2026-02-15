import Link from 'next/link'
import { MapPin, Phone, Clock, Instagram } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-[hsl(15,85%,60%)]">Schlemmer</span>
              <span className="text-2xl font-bold text-[hsl(45,90%,65%)]">Deluxe</span>
            </div>
            <p className="text-white/70 text-sm">
              {restaurant.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-[hsl(45,90%,65%)]">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Startseite</Link></li>
              <li><Link href="/menu" className="text-white/70 hover:text-white transition-colors">Menü</Link></li>
              <li><Link href="/kontakt" className="text-white/70 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold mb-4 text-[hsl(45,90%,65%)]">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[hsl(15,85%,60%)]" />
                <span className="text-white/70">
                  {restaurant.address.street}<br />
                  {restaurant.address.zip} {restaurant.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[hsl(15,85%,60%)]" />
                <a href={`tel:${restaurant.phone}`} className="text-white/70 hover:text-white transition-colors">
                  {restaurant.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-[hsl(15,85%,60%)]" />
                <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  @schlemmer_deluxe
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold mb-4 text-[hsl(45,90%,65%)]">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="text-white/70 hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-white/70 hover:text-white transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
          © {currentYear} {restaurant.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
