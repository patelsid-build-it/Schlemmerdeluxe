import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, Instagram, Car } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image 
                src="/logo.jpg" 
                alt="Schlemmer Deluxe Logo" 
                width={150} 
                height={40}
                className="h-10 w-auto object-contain bg-[#CC0000] rounded p-1"
              />
            </div>
            <p className="text-white/70 text-sm">
              {restaurant.description}
            </p>
            <p className="text-white/70 text-sm mt-2">
              {restaurant.address.location}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-[#CC0000]">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Startseite</Link></li>
              <li><Link href="/menu" className="text-white/70 hover:text-white transition-colors">Menü</Link></li>
              <li><Link href="/#reservierung" className="text-white/70 hover:text-white transition-colors">Tisch reservieren</Link></li>
              <li><Link href="/kontakt" className="text-white/70 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold mb-4 text-[#CC0000]">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[#CC0000]" />
                <span className="text-white/70">
                  {restaurant.address.street}<br />
                  {restaurant.address.zip} {restaurant.address.city}<br />
                  <span className="text-[#CC0000]">{restaurant.address.location}</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Car className="h-4 w-4 text-[#CC0000]" />
                <span className="text-white/70">100 kostenlose Parkplätze</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#CC0000]" />
                <a href={`tel:${restaurant.phone}`} className="text-white/70 hover:text-white transition-colors">
                  {restaurant.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-[#CC0000]" />
                <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  @schlemmer_deluxe
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold mb-4 text-[#CC0000]">Rechtliches</h3>
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
