"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [gridVisible, setGridVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "PRODUCTS", href: "/products" },
    { label: "TECHNOLOGY", href: "/technology" },
    { label: "REVIEWS", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "CONTACT", href: "/contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b-2 border-foreground bg-background">
        <div className="container mx-auto flex items-center justify-between p-6">
          <Link href="/" className="font-mono text-xl tracking-tighter hover:opacity-70 transition-opacity">
            FRUITDRYER.
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 font-mono text-sm tracking-tight border-2 border-transparent hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden border-2 border-foreground hover:bg-foreground hover:text-background"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-2 border-foreground hover:bg-foreground hover:text-background"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-foreground bg-background">
            <nav className="container mx-auto flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 font-mono text-sm tracking-tight border-2 border-foreground hover:bg-foreground hover:text-background transition-colors text-center"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {gridVisible && (
        <div className="fixed inset-0 z-30 pointer-events-none">
          <div className="container mx-auto h-full grid grid-cols-12 gap-4 opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-x border-foreground" />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
