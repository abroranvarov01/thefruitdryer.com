"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "Nesco FD-5TC Snackmaster",
    slug: "nesco-fd-5tc",
    trays: 5,
    power: "420W",
    material: "BPA-Free Plastic",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/814Kijo+HiL._AC_SX679_.jpg",
  },
  {
    name: "COSORI CP267-FD Premium",
    slug: "cosori-cp267-fd",
    trays: 6,
    power: "600W",
    material: "Stainless Steel",
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81Gik0nihuL._AC_SX679_.jpg",
  },
  {
    name: "Excalibur 3926TCDB",
    slug: "excalibur-3926tcdb",
    trays: 9,
    power: "600W",
    material: "Polycarbonate",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/8115WHUBueL._AC_SX679_.jpg",
  },
]

export function ProductsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">STRUCTURED PERFORMANCE</h2>
            <div className="h-0.5 w-full bg-foreground" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group border-2 border-foreground bg-background hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square bg-muted border-b-2 border-foreground relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight text-balance">{product.name}</h3>

                  <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                    <div>TRAYS: {product.trays}</div>
                    <div>POWER: {product.power}</div>
                    <div className="col-span-2">MATERIAL: {product.material}</div>
                  </div>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 border border-foreground ${
                          i < product.rating ? "bg-foreground" : "bg-background"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    className="w-full border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-mono"
                    asChild
                  >
                    <Link href={`/products/${product.slug}`}>
                      VIEW DETAILS
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
