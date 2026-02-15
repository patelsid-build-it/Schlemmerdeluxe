'use client'

import { Phone, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { restaurant } from '@/data/restaurant'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg">
      <div className="flex gap-2 p-3">
        <Button 
          variant="outline" 
          className="flex-1 h-12"
          asChild
        >
          <a href={`tel:${restaurant.phone}`}>
            <Phone className="h-5 w-5 mr-2" />
            Anrufen
          </a>
        </Button>
        <Button 
          className="flex-1 h-12 bg-brand hover:bg-brand/90"
          asChild
        >
          <a href={restaurant.orderingLinks.primary}>
            <ShoppingBag className="h-5 w-5 mr-2" />
            Bestellen
          </a>
        </Button>
      </div>
    </div>
  )
}
