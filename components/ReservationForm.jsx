'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { CalendarDays, Users, Clock, Loader2, CheckCircle, Armchair, TreePine } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    location: 'indoor',
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulierte Formularübermittlung (Prototyp)
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success('Reservierung angefragt!', {
      description: `Wir haben Ihre Anfrage für ${formData.guests} Personen am ${formData.date} um ${formData.time} Uhr erhalten. Wir melden uns schnellstmöglich bei Ihnen.`,
      duration: 5000,
    })

    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      location: 'indoor',
      notes: ''
    })
    setIsSubmitting(false)
  }

  // Generate time slots
  const timeSlots = []
  for (let h = 11; h <= 22; h++) {
    timeSlots.push(`${h}:00`)
    if (h < 22) timeSlots.push(`${h}:30`)
  }

  // Get tomorrow's date as minimum
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Location Selection */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => handleSelectChange('location', 'indoor')}
          className={`p-4 rounded-lg border-2 transition-all ${
            formData.location === 'indoor' 
              ? 'border-brand bg-brand/5' 
              : 'border-border hover:border-brand/50'
          }`}
        >
          <Armchair className={`h-8 w-8 mx-auto mb-2 ${formData.location === 'indoor' ? 'text-brand' : 'text-muted-foreground'}`} />
          <p className="font-semibold">Drinnen</p>
          <p className="text-sm text-muted-foreground">{restaurant.tables.indoor} Tische verfügbar</p>
        </button>
        <button
          type="button"
          onClick={() => handleSelectChange('location', 'outdoor')}
          className={`p-4 rounded-lg border-2 transition-all ${
            formData.location === 'outdoor' 
              ? 'border-brand bg-brand/5' 
              : 'border-border hover:border-brand/50'
          }`}
        >
          <TreePine className={`h-8 w-8 mx-auto mb-2 ${formData.location === 'outdoor' ? 'text-brand' : 'text-muted-foreground'}`} />
          <p className="font-semibold">Draußen</p>
          <p className="text-sm text-muted-foreground">{restaurant.tables.outdoor} Tische verfügbar</p>
        </button>
      </div>

      {/* Date, Time, Guests Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date" className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            Datum *
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            min={minDate}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Uhrzeit *
          </Label>
          <Select value={formData.time} onValueChange={(value) => handleSelectChange('time', value)} required>
            <SelectTrigger>
              <SelectValue placeholder="Uhrzeit wählen" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>{time} Uhr</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="guests" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Personen *
          </Label>
          <Select value={formData.guests} onValueChange={(value) => handleSelectChange('guests', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Anzahl" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? 'Person' : 'Personen'}
                </SelectItem>
              ))}
              <SelectItem value="10+">Mehr als 10</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Ihr Name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="0211 ..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-Mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ihre@email.de (optional)"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Besondere Wünsche</Label>
        <Textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          placeholder="z.B. Kinderstuhl, Allergien, besonderer Anlass..."
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-brand hover:bg-brand/90 h-12 text-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <CheckCircle className="h-5 w-5 mr-2" />
            Tisch reservieren
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Sie erhalten eine Bestätigung per Telefon oder E-Mail. Bei Fragen rufen Sie uns an: {restaurant.phoneFormatted}
      </p>
    </form>
  )
}
