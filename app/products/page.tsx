import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const products = [
    {
      slug: "nesco-fd-5tc",
      name: "NESCO FD-5TC",
      price: "$57.88",
      image: "https://m.media-amazon.com/images/I/814Kijo+HiL._AC_SX679_.jpg",
      features: ["5 BPA-FREE TRAYS", "420W POWER", "ADJUSTABLE TEMP", "COMPACT DESIGN"],
      specs: '12.6"D x 10.71"W x 9.65"H | Weight: 6 lbs',
    },
    {
      slug: "cosori-cp267-fd",
      name: "COSORI CP267-FD",
      price: "$143.99",
      image: "https://m.media-amazon.com/images/I/81Gik0nihuL._AC_SX679_.jpg",
      features: ["6 TRAYS", "600W POWER", "DIGITAL CONTROL", "TIMER FUNCTION"],
      specs: 'Dimensions: 13.8" x 11.8" x 12.2" | Weight: 9.5 lbs',
    },
    {
      slug: "excalibur-3926tcdb",
      name: "EXCALIBUR 3926TCDB",
      price: "$337.81",
      image: "https://m.media-amazon.com/images/I/8115WHUBueL._AC_SX679_.jpg",
      features: ["9 TRAYS", "600W POWER", "26-HOUR TIMER", "PROFESSIONAL"],
      specs: '18"D x 17"W x 10"H | Weight: 18 lbs',
    },
    {
      slug: "magic-mill-mfd-6100",
      name: "MAGIC MILL MFD-6100",
      price: "$89.99",
      image: "https://m.media-amazon.com/images/I/81T6ZUPEZ0L._AC_SX679_.jpg",
      features: ["5 TRAYS", "500W POWER", "REAR-MOUNTED FAN", "BPA-FREE"],
      specs: 'Diameter: 12" | Height: 9" | Weight: 5.5 lbs',
    },
    {
      slug: "presto-06300",
      name: "PRESTO 06300",
      price: "$59.99",
      image: "https://m.media-amazon.com/images/I/71UeiUBDxGL._AC_SX679_.jpg",
      features: ["4 TRAYS", "620W POWER", "EXPANDABLE", "BUDGET OPTION"],
      specs: 'Diameter: 14" | Height: 7" | Weight: 4 lbs',
    },
    {
      slug: "hamilton-beach-32100a",
      name: "HAMILTON BEACH 32100A",
      price: "$79.99",
      image: "https://m.media-amazon.com/images/I/71XE0WNRryL._AC_SX679_.jpg",
      features: ["5 TRAYS", "500W POWER", "STACKABLE", "EASY CLEAN"],
      specs: 'Dimensions: 13" x 13" x 8" | Weight: 6.5 lbs',
    },
    {
      slug: "tribest-sedona-express",
      name: "TRIBEST SEDONA EXPRESS",
      price: "$399.99",
      image: "https://m.media-amazon.com/images/I/71yZ9ihLPKL._AC_SX679_.jpg",
      features: ["11 TRAYS", "780W POWER", "DUAL ZONE", "RAW FOOD"],
      specs: 'Dimensions: 18" x 17" x 12" | Weight: 25 lbs',
    },
    {
      slug: "chefman-food-dehydrator",
      name: "CHEFMAN 6-TRAY",
      price: "$119.99",
      image: "https://m.media-amazon.com/images/I/81eOHKSRVDL._AC_SX679_.jpg",
      features: ["6 TRAYS", "480W POWER", "TRANSPARENT DOOR", "SPACE SAVING"],
      specs: 'Dimensions: 12" x 11" x 11" | Weight: 7 lbs',
    },
    {
      slug: "ivation-10-tray",
      name: "IVATION 10-TRAY",
      price: "$249.99",
      image: "https://m.media-amazon.com/images/I/71vTOLaDQkL._AC_SX679_.jpg",
      features: ["10 TRAYS", "1000W POWER", "DIGITAL TIMER", "COMMERCIAL"],
      specs: 'Dimensions: 16" x 18" x 13" | Weight: 18 lbs',
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-8 border-2 border-foreground hover:bg-foreground hover:text-background">
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK
          </Button>
        </Link>

        <div className="space-y-16">
          <div className="space-y-4">
            <h1 className="font-display text-6xl md:text-8xl tracking-tighter">PRODUCTS</h1>
            <p className="font-mono text-sm md:text-base max-w-2xl">
              ENGINEERED FOR PRECISION. DESIGNED FOR DURABILITY. BUILT TO LAST.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="border-2 border-foreground p-8 space-y-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]"
              >
                <div className="space-y-2">
                  <h3 className="font-display text-2xl tracking-tighter">{product.name}</h3>
                </div>

                <div className="h-48 bg-muted border-2 border-foreground overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="border-l-4 border-foreground pl-4 font-mono text-xs">
                      {feature}
                    </div>
                  ))}
                </div>

                <p className="font-mono text-xs text-muted-foreground pt-4 border-t-2 border-foreground">
                  {product.specs}
                </p>

                <div className="font-mono text-xs text-center pt-2 border-t-2 border-foreground">VIEW DETAILS →</div>
              </Link>
            ))}
          </div>

          <div className="border-2 border-foreground p-8 space-y-4">
            <h2 className="font-display text-3xl tracking-tighter">SELECTION CRITERIA</h2>
            <div className="grid md:grid-cols-3 gap-6 font-mono text-sm">
              <div className="space-y-2">
                <h3 className="font-bold">CAPACITY</h3>
                <p className="text-muted-foreground">
                  Number of trays determines batch size. Consider your typical usage volume.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">POWER</h3>
                <p className="text-muted-foreground">
                  Higher wattage means faster drying times. Balance efficiency with energy consumption.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">CONTROL</h3>
                <p className="text-muted-foreground">
                  Digital controls offer precision. Analog systems provide simplicity and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
