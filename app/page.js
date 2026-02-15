'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import ContactForm from '@/components/ContactForm'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, Phone, Clock, ChefHat, Utensils, BadgeEuro, ExternalLink, 
  Instagram, Navigation, Star, ArrowRight
} from 'lucide-react'
import { restaurant, getBestsellers } from '@/data/restaurant'

// USP Icons Mapping
const iconMap = {
  ChefHat: ChefHat,
  Clock: Clock,
  Utensils: Utensils,
  BadgeEuro: BadgeEuro
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(restaurant.menuCategories[0]?.id || 'doener')
  const bestsellers = getBestsellers()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="relative gradient-hero text-white">
          <div className="container py-16 md:py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {restaurant.name} – <span className="text-[hsl(45,90%,65%)]">frisch, lecker, schnell.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {restaurant.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button size="lg" className="bg-white text-brand hover:bg-white/90" asChild>
                  <a href={restaurant.orderingLinks.primary}>
                    Jetzt bestellen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href={`tel:${restaurant.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Anrufen
                  </a>
                </Button>
              </div>

              {/* Info Block */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[hsl(45,90%,65%)]" />
                    <span>{restaurant.address.street}, {restaurant.address.zip} {restaurant.address.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[hsl(45,90%,65%)]" />
                    <a href={`tel:${restaurant.phone}`} className="hover:underline">{restaurant.phoneFormatted}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60V30C240 10 480 0 720 0C960 0 1200 10 1440 30V60H0Z" fill="hsl(30, 40%, 98%)" />
            </svg>
          </div>
        </section>

        {/* USP Strip */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {restaurant.usps.map((usp, index) => {
                const Icon = iconMap[usp.icon] || ChefHat
                return (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-brand/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-brand" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{usp.title}</h3>
                    <p className="text-sm text-muted-foreground">{usp.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Bestseller Section */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="text-center mb-8">
              <Badge className="mb-2 bg-brand-2 text-foreground">Unsere Hits</Badge>
              <h2 className="text-3xl font-bold">Bestseller & Highlights</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bestsellers.slice(0, 6).map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="h-32 bg-gradient-to-br from-brand/20 to-brand-2/20 flex items-center justify-center">
                      <Utensils className="h-12 w-12 text-brand/50" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <span className="text-xs text-muted-foreground">{item.category}</span>
                        </div>
                        <Badge className="bg-brand text-white shrink-0">
                          <Star className="h-3 w-3 mr-1" />
                          Bestseller
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-brand">{item.price}</span>
                        <Button size="sm" className="bg-brand hover:bg-brand/90" asChild>
                          <a href={restaurant.orderingLinks.primary}>Bestellen</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Preview with Tabs */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Unser Menü</h2>
              <p className="text-muted-foreground">Entdecken Sie unsere Vielfalt</p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-1 h-auto bg-muted p-1 mb-6">
                {restaurant.menuCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-brand data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {restaurant.menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.items.slice(0, 4).map((item) => (
                      <Card key={item.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4 flex gap-4">
                          <div className="w-20 h-20 shrink-0 rounded-lg bg-gradient-to-br from-brand/10 to-brand-2/10 flex items-center justify-center">
                            <Utensils className="h-8 w-8 text-brand/40" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-semibold">{item.name}</h3>
                              {item.bestseller && (
                                <Badge variant="secondary" className="bg-brand-2/20 text-foreground text-xs">
                                  <Star className="h-3 w-3 mr-1" /> Hit
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="font-bold text-brand">{item.price}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="border-brand text-brand hover:bg-brand hover:text-white" asChild>
                <Link href="/menu">
                  Vollständiges Menü ansehen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-12 bg-gradient-to-br from-brand/5 to-brand-2/5">
          <div className="container">
            <div className="text-center mb-8">
              <Instagram className="h-10 w-10 mx-auto mb-3 text-brand" />
              <h2 className="text-3xl font-bold mb-2">Folgen Sie uns</h2>
              <p className="text-muted-foreground">Entdecken Sie unsere neuesten Kreationen auf Instagram</p>
            </div>
            
            {/* Placeholder Grid für Instagram-Posts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-brand/20 to-brand-2/20 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                  <Instagram className="h-8 w-8 text-brand/30" />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90" asChild>
                <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  Mehr auf Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Standort & Öffnungszeiten */}
        <section id="standort" className="py-12 bg-background scroll-mt-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Standort */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-brand" />
                    </div>
                    <h2 className="text-2xl font-bold">Standort</h2>
                  </div>
                  
                  <address className="not-italic text-lg mb-6">
                    <p className="font-semibold">{restaurant.name}</p>
                    <p>{restaurant.address.street}</p>
                    <p>{restaurant.address.zip} {restaurant.address.city}</p>
                  </address>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-brand hover:bg-brand/90" asChild>
                      <a href={restaurant.googleMapsLink} target="_blank" rel="noopener noreferrer">
                        <Navigation className="mr-2 h-4 w-4" />
                        Route öffnen
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={`tel:${restaurant.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Anrufen
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Öffnungszeiten */}
              <Card id="oeffnungszeiten" className="scroll-mt-20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-2/20 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-brand" />
                    </div>
                    <h2 className="text-2xl font-bold">Öffnungszeiten</h2>
                  </div>
                  
                  {/* TODO: Echte Öffnungszeiten einfügen */}
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
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="kontakt" className="py-12 bg-muted scroll-mt-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Kontakt</h2>
                <p className="text-muted-foreground">Haben Sie Fragen? Wir helfen Ihnen gerne!</p>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  {/* Telefon prominent */}
                  <div className="text-center mb-6 pb-6 border-b border-border">
                    <p className="text-muted-foreground mb-2">Rufen Sie uns direkt an:</p>
                    <a 
                      href={`tel:${restaurant.phone}`}
                      className="inline-flex items-center gap-2 text-2xl font-bold text-brand hover:underline"
                    >
                      <Phone className="h-6 w-6" />
                      {restaurant.phoneFormatted}
                    </a>
                  </div>
                  
                  <p className="text-center text-muted-foreground mb-6">Oder schreiben Sie uns:</p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
