import './globals.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Schlemmer Deluxe | Döner, Burger & mehr in Düsseldorf',
  description: 'Schlemmer Deluxe – Ihr Döner & Burger Restaurant im B8 Center Flingern, Düsseldorf. Frisch zubereitet, schnelle Abholung oder Lieferung. 100 kostenlose Parkplätze!',
  keywords: 'Döner Düsseldorf, Burger Düsseldorf, Schlemmer Deluxe, B8 Center Flingern, Fast Food, Lieferservice, Abholung',
  authors: [{ name: 'Schlemmer Deluxe' }],
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'Schlemmer Deluxe | Döner, Burger & mehr in Düsseldorf',
    description: 'Frisch, lecker, schnell – Döner, Burger, Wraps & mehr im B8 Center Flingern. Jetzt bestellen!',
    url: 'https://schlemmer-deluxe.de',
    siteName: 'Schlemmer Deluxe',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schlemmer Deluxe | Döner, Burger & mehr',
    description: 'Frisch, lecker, schnell – Jetzt bestellen in Düsseldorf!',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className="antialiased">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
