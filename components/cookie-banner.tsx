"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-foreground bg-background p-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-mono tracking-tight">
          This website uses cookies to improve your browsing experience. By continuing, you consent to our use of
          cookies.
        </p>
        <Button
          onClick={acceptCookies}
          variant="outline"
          className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-mono tracking-wider"
        >
          [ACCEPT STRUCTURE]
        </Button>
      </div>
    </div>
  )
}
