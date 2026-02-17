'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import ContactForm from '@/components/ContactForm'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Clock, Navigation, ArrowLeft, Map, Car } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

export default function KontaktPage() {
  const [showMap, setShowMap] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20 md:pb-0">
        {/* Hero */}
        <section className="gradient-hero text-white py-12">
          <div className="container">
            <Link href="/" className="inline-flex items-center text-sm text-white/80 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Zurück zur Startseite
            </Link>
            <h1 className="text-4xl font-bold mb-2">Kontakt</h1>
            <p className="text-white/80">Wir freuen uns auf Ihre Nachricht!</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Kontaktinformationen */}
              <div className="space-y-6">
                {/* Telefon */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center">
                        <Phone className="h-7 w-7 text-brand" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg">Rufen Sie uns an</h2>
                        <a 
                          href={`tel:${restaurant.phone}`}
                          className="text-2xl font-bold text-brand hover:underline"
                        >
                          {restaurant.phoneFormatted}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Adresse */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-7 w-7 text-brand" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg mb-2">Besuchen Sie uns</h2>
                        <address className="not-italic text-muted-foreground mb-2">
                          <p className="font-medium text-foreground">{restaurant.name}</p>
                          <p>{restaurant.address.street}</p>
                          <p>{restaurant.address.zip} {restaurant.address.city}</p>
                          <p className="text-brand font-medium">{restaurant.address.location}</p>
                        </address>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Car className="h-4 w-4 text-brand" />
                          <span>100 kostenlose Parkplätze</span>
                        </div>
                        <Button className="bg-brand hover:bg-brand/90" asChild>
                          <a href={restaurant.googleMapsLink} target="_blank" rel="noopener noreferrer">
                            <Navigation className="mr-2 h-4 w-4" />
                            Route in Google Maps
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Öffnungszeiten */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center">
                        <Clock className="h-7 w-7 text-brand" />
                      </div>
                      <h2 className="font-semibold text-lg">Öffnungszeiten</h2>
                    </div>
                    <ul className="space-y-2">
                      {restaurant.openingHours.map((item, index) => (
                        <li key={index} className="flex justify-between py-2 border-b border-border last:border-0">
                          <span className="font-medium">{item.day}</span>
                          <span className="text-muted-foreground">{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Karte (Datenschutzfreundlich) */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center">
                        <Map className="h-7 w-7 text-brand" />
                      </div>
                      <h2 className="font-semibold text-lg">Karte</h2>
                    </div>
                    
                    {!showMap ? (
                      <div className="bg-muted rounded-lg p-8 text-center">
                        <Map className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-sm text-muted-foreground mb-4">
                          Mit Klick auf den Button wird eine Verbindung zu Google Maps hergestellt.
                        </p>
                        <Button onClick={() => setShowMap(true)} variant="outline">
                          <Map className="mr-2 h-4 w-4" />
                          Karte laden
                        </Button>
                      </div>
                    ) : (
                      <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                        <iframe
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(`${restaurant.address.street}, ${restaurant.address.zip} ${restaurant.address.city}`)}&output=embed`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Standort Schlemmer Deluxe"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Kontaktformular */}
              <div>
                <Card className="sticky top-20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2">Schreiben Sie uns</h2>
                    <p className="text-muted-foreground mb-6">
                      Haben Sie Fragen, Anregungen oder Feedback? Wir freuen uns auf Ihre Nachricht!
                    </p>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
