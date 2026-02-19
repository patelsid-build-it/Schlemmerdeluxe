import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { restaurant } from '@/data/restaurant'

export const metadata = {
  title: 'Datenschutz | Schlemmer Deluxe',
  description: 'Datenschutzerklärung von Schlemmer Deluxe',
}

export default function DatenschutzPage() {
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
            <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-3xl">
            {/* Banner removed */}

            <div className="prose prose-neutral max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>

                <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Verantwortlicher</h2>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <p><strong>My Dönerium GmbH</strong></p>
                    <p>Erkrather Str. 169</p>
                    <p>40233 Düsseldorf</p>
                    <p className="mt-4">
                      <strong>Vertreten durch:</strong><br />
                      Geschäftsführer: Calma Murat
                    </p>
                    <p>
                      <strong>Telefon:</strong> {restaurant.phoneFormatted}
                    </p>
                    <p>
                      <strong>E-Mail:</strong> info@schlemmer-deluxe.de
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Urheberrecht & Mediennachweis</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">
                      Die auf dieser Website verwendeten Bilder und Medieninhalte wurden teilweise unter Zuhilfenahme
                      künstlicher Intelligenz (KI) erstellt. Sämtliche Rechte an diesen Bildern liegen bei der
                      My Dönerium GmbH. Eine Verwendung, Vervielfältigung oder Verbreitung dieser Inhalte
                      ohne ausdrückliche Zustimmung ist nicht gestattet.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Datenerfassung auf dieser Website</h2>

                <h3 className="text-xl font-semibold mb-3">Kontaktformular</h3>
                <Card className="mb-4">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                      aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                      zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                      gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold mb-3">Server-Log-Dateien</h3>
                <Card className="mb-4">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">
                      Der Provider der Seiten erhebt und speichert automatisch Informationen in
                      so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground">
                      <li>Browsertyp und Browserversion</li>
                      <li>Verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-brand mb-2">[TODO: Analyse und Anpassung erforderlich]</p>
                    <p className="text-muted-foreground">
                      Diese Website verwendet <span className="text-brand">[TODO: technisch notwendige / Analyse / Marketing]</span> Cookies.
                      Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und
                      die Ihr Browser speichert.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Analyse-Tools und Werbung</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-brand">[TODO: Falls Analytics verwendet wird, hier dokumentieren]</p>
                    <p className="text-muted-foreground mt-2">
                      z.B. Google Analytics, Matomo, etc. – mit Angaben zu Opt-Out-Möglichkeiten.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Plugins und Tools</h2>

                <h3 className="text-xl font-semibold mb-3">Google Maps</h3>
                <Card className="mb-4">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">
                      Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland
                      Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Die Karte
                      wird erst nach expliziter Einwilligung (Klick auf &quot;Karte laden&quot;) geladen, um
                      Ihre Privatsphäre zu schützen.
                    </p>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold mb-3">Social Media</h3>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">
                      Wir verlinken auf unsere Instagram-Seite. Beim Klick auf den Link werden Sie
                      zu Instagram weitergeleitet. Informationen zur Datenverarbeitung durch Instagram
                      finden Sie in der Datenschutzerklärung von Meta/Instagram.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Ihre Rechte</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">Sie haben jederzeit das Recht:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
                      <li>Berichtigung unrichtiger Daten zu verlangen</li>
                      <li>Löschung Ihrer Daten zu verlangen</li>
                      <li>Einschränkung der Verarbeitung zu verlangen</li>
                      <li>Datenübertragbarkeit zu verlangen</li>
                      <li>Widerspruch gegen die Verarbeitung einzulegen</li>
                      <li>Sich bei einer Aufsichtsbehörde zu beschweren</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Änderungen</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">
                      Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets
                      den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer
                      Leistungen umzusetzen.
                    </p>
                    <p className="text-brand mt-4">Stand: [TODO: Datum einfügen]</p>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
