"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-24">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-[clamp(3rem,12vw,12rem)] font-bold leading-[0.85] tracking-tighter text-balance">
              THE FORM OF FUNCTION
            </h1>
            <div className="h-1 w-full bg-foreground" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <p className="text-2xl md:text-4xl font-mono tracking-tight max-w-2xl">
              FRUIT DRYER / INDUSTRIAL PRECISION
            </p>

            <Button
              size="lg"
              className="group border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-mono tracking-wider text-lg px-8 py-6"
              asChild
            >
              <Link href="/products">
                EXPLORE PRODUCTS
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
