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
            {/* Banner removed */}

            <div className="prose prose-neutral max-w-none">
              <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>

              <Card className="mb-6">
                <CardContent className="p-6 space-y-2">
                  <p><strong>My Dönerium GmbH</strong></p>
                  <p>Erkrather Str. 169</p>
                  <p>40233 Düsseldorf</p>
                  <p className="mt-4">
                    <strong>Vertreten durch:</strong><br />
                    Geschäftsführer: Calma Murat
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
                    <strong>E-Mail:</strong> info@schlemmer-deluxe.de
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-3">Registereintrag</h3>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <p>
                    Eintragung im Handelsregister.<br />
                    Registergericht: Amtsgericht Düsseldorf<br />
                    Registernummer: HRB 98486
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h3>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                    <span className="text-muted-foreground">[Wird nachgereicht]</span>
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-3">Gegenstand des Unternehmens</h3>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <p>Die Durchführung von Events, das Catering und die Führung eines Spezialitätenimbisses.</p>
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
