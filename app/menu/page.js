'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Utensils, Star, ArrowLeft, Phone, ExternalLink } from 'lucide-react'
import { restaurant, getAllMenuItems } from '@/data/restaurant'

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  
  const allItems = useMemo(() => getAllMenuItems(), [])
  
  const filteredItems = useMemo(() => {
    let items = activeCategory === 'all' 
      ? allItems 
      : allItems.filter(item => item.categoryId === activeCategory)
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      items = items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      )
    }
    
    return items
  }, [allItems, activeCategory, searchQuery])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pb-20 md:pb-0">
        {/* Hero */}
        <section className="gradient-hero text-white py-12">
          <div className="container">
            <Link href="/" className="inline-flex items-center text-sm text-white/80 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Zurück zur Startseite
            </Link>
            <h1 className="text-4xl font-bold mb-2">Unser Menü</h1>
            <p className="text-white/80">Entdecken Sie unsere vielfältige Auswahl</p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-40 bg-background dark:bg-background border-b border-border py-4">
          <div className="container">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Suchen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant={activeCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setActiveCategory('all')}
                  className={activeCategory === 'all' ? 'bg-brand' : ''}
                >
                  Alle
                </Button>
                {restaurant.menuCategories.map((category) => (
                  <Button
                    key={category.id}
                    size="sm"
                    variant={activeCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setActiveCategory(category.id)}
                    className={activeCategory === category.id ? 'bg-brand' : ''}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-8">
          <div className="container">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <Utensils className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Keine Ergebnisse gefunden</h3>
                <p className="text-muted-foreground">Versuchen Sie es mit einem anderen Suchbegriff</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-4">
                  {filteredItems.length} {filteredItems.length === 1 ? 'Gericht' : 'Gerichte'} gefunden
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-card">
                      <CardContent className="p-0">
                        <div className="h-48 relative overflow-hidden">
                          {item.image ? (
                            <Image 
                              src={item.image} 
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="w-full h-full gradient-hero flex items-center justify-center">
                              <Utensils className="h-10 w-10 text-white/40" />
                            </div>
                          )}
                          {item.bestseller && (
                            <Badge className="absolute top-2 right-2 bg-white text-brand">
                              <Star className="h-3 w-3 mr-1" /> Bestseller
                            </Badge>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="font-semibold">{item.name}</h3>
                            <Badge variant="secondary" className="text-xs shrink-0">
                              {item.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-brand">{item.price}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 gradient-hero text-white">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Hunger bekommen?</h2>
            <p className="mb-6 text-white/90">Bestellen Sie jetzt über Lieferando oder Wolt!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-[#FF8000] hover:bg-[#FF8000]/90" asChild>
                <a href={restaurant.orderingLinks.lieferando} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Bei Lieferando bestellen
                </a>
              </Button>
              <Button size="lg" className="bg-[#009DE0] hover:bg-[#009DE0]/90" asChild>
                <a href={restaurant.orderingLinks.wolt} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Bei Wolt bestellen
                </a>
              </Button>
            </div>
            <p className="mt-6 text-white/80">
              Oder rufen Sie uns an: <a href={`tel:${restaurant.phone}`} className="font-bold hover:underline">{restaurant.phoneFormatted}</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
