import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

export const metadata = {
  title: 'Impressum | Schlemmer Deluxe',
  description: 'Impressum und rechtliche Informationen von Schlemmer Deluxe',
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted py-12">
          <div className="container">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-brand mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Zurück zur Startseite
            </Link>
            <h1 className="text-4xl font-bold">Impressum</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-3xl">
            {/* TODO Hinweis */}
            <Card className="mb-8 border-brand/50 bg-brand/5">
              <CardContent className="p-4 flex gap-3">
                <AlertCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand">Platzhalter-Inhalte</p>
                  <p className="text-sm text-muted-foreground">
                    Die markierten Felder [TODO] müssen mit den echten Unternehmensdaten ausgefüllt werden.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
              
              <Card className="mb-6">
                <CardContent className="p-6 space-y-2">
                  <p><strong>{restaurant.name}</strong></p>
                  <p>{restaurant.address.street}</p>
                  <p>{restaurant.address.zip} {restaurant.address.city}</p>
                  <p className="mt-4">
                    <strong>Vertreten durch:</strong><br />
                    <span className="text-brand">[TODO: Name des Inhabers/Geschäftsführers]</span>
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-3">Kontakt</h3>
              <Card className="mb-6">
                <CardContent className="p-6 space-y-2">
                  <p>
                    <strong>Telefon:</strong> {restaurant.phoneFormatted}
                  </p>
                  <p>
                    <strong>E-Mail:</strong> <span className="text-brand">[TODO: E-Mail-Adresse einfügen]</span>
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h3>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                    <span className="text-brand">[TODO: USt-IdNr. einfügen, falls vorhanden]</span>
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-3">Aufsichtsbehörde</h3>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <p>
                    <span className="text-brand">[TODO: Zuständige Aufsichtsbehörde einfügen, falls erforderlich]</span>
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <p className="text-brand">[TODO: Falls zutreffend, Berufsbezeichnung und zuständige Kammer einfügen]</p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-3">Streitschlichtung</h3>
              <Card className="mb-6">
                <CardContent className="p-6 space-y-4">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline ml-1">
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                  <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-3">Haftung für Inhalte</h3>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                    Tätigkeit hinweisen.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-3">Haftung für Links</h3>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                    Seiten verantwortlich.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
