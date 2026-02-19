'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has already accepted cookies
        const cookieConsent = localStorage.getItem('cookie-consent')
        if (!cookieConsent) {
            setIsVisible(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true')
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg animate-in slide-in-from-bottom-full duration-500">
            <div className="container max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand/10 rounded-full shrink-0 hidden sm:block">
                        <Cookie className="h-6 w-6 text-brand" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <p className="font-semibold text-foreground mb-1">Wir verwenden Cookies</p>
                        <p>
                            Wir nutzen auf dieser Website ausschließlich technisch notwendige Cookies, um die
                            Funktionalität sicherzustellen. Es werden keine Tracking- oder Werbe-Cookies verwendet.
                            Weitere Informationen finden Sie in unserer{' '}
                            <Link href="/datenschutz" className="text-brand hover:underline underline-offset-4">
                                Datenschutzerklärung
                            </Link>.
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 shrink-0 w-full sm:w-auto">
                    <Button onClick={handleAccept} className="w-full sm:w-auto bg-brand hover:bg-brand/90 text-white">
                        Verstanden
                    </Button>
                </div>
            </div>
        </div>
    )
}
