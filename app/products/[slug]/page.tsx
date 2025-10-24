import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const products = [
  {
    slug: "nesco-fd-5tc",
    name: "NESCO FD-5TC",
    price: "$57.88",
    rating: "4.5/5",
    reviews: 1234,
    image: "https://m.media-amazon.com/images/I/814Kijo+HiL._AC_SX679_.jpg",
    features: ["5 BPA-FREE TRAYS", "420W POWER", "ADJUSTABLE TEMP", "COMPACT DESIGN"],
    specs: '12.6"D x 10.71"W x 9.65"H | Weight: 6 lbs',
    description:
      "The NESCO FD-5TC is a compact and efficient dehydrator perfect for small to medium batches. Its adjustable temperature control (95°F–160°F) and digital timer (1–24 hours) make it versatile for drying jerky, fruits, herbs, and pet treats. The lightweight design and built-in cord storage enhance kitchen convenience.",
    technicalSpecs: {
      power: "420 Watts",
      voltage: "120V",
      trays: "5 BPA-Free",
      material: "BPA-Free Plastic",
      tempRange: "95°F - 160°F",
      warranty: "1 Year Limited",
    },
    amazonLink: "https://www.amazon.com/NESCO-FD-5TC-Snackmaster-Food-Dehydrator/dp/B0F9XD73TL",
  },
  {
    slug: "cosori-cp267-fd",
    name: "COSORI CP267-FD",
    price: "$143.99",
    rating: "4.7/5",
    reviews: 22345,
    image: "https://m.media-amazon.com/images/I/81Gik0nihuL._AC_SX679_.jpg",
    features: ["6 TRAYS", "600W POWER", "DIGITAL CONTROL", "TIMER FUNCTION"],
    specs: 'Dimensions: 13.8" x 11.8" x 12.2" | Weight: 9.5 lbs',
    description:
      "COSORI CP267-FD offers a spacious 6.5 ft² drying area with 6 stainless steel trays. The 600W motor and advanced airflow technology ensure fast, even drying. Its quiet brushless motor (<48 dB) and digital control panel with a 48-hour timer make it ideal for fruits, meats, and yogurt.",
    technicalSpecs: {
      power: "600 Watts",
      voltage: "120V",
      trays: "6 Stainless Steel",
      material: "Stainless Steel & BPA-Free Plastic",
      tempRange: "95°F - 165°F",
      warranty: "2 Year Limited",
    },
    amazonLink: "https://www.amazon.com/COSORI-Dehydrator-Stainless-Temperature-Compliant/dp/B07PY5M579",
  },
  {
    slug: "excalibur-3926tcdb",
    name: "EXCALIBUR 3926TCDB",
    price: "$337.81",
    rating: "4.2/5",
    reviews: 352,
    image: "https://m.media-amazon.com/images/I/8115WHUBueL._AC_SX679_.jpg",
    features: ["9 TRAYS", "600W POWER", "26-HOUR TIMER", "PROFESSIONAL"],
    specs: '18"D x 17"W x 10"H | Weight: 18 lbs',
    description:
      "The Excalibur 3926TCDB is a professional-grade dehydrator with 15 ft² of drying space across 9 trays. Its patented Hyperwave technology and horizontal airflow ensure uniform drying without tray rotation. Ideal for large families or serious food preservers, it includes a 26-hour timer and adjustable thermostat (105°F–165°F).",
    technicalSpecs: {
      power: "600 Watts",
      voltage: "120V",
      trays: "9 (15 sq ft drying area)",
      material: "Polycarbonate",
      tempRange: "105°F - 165°F",
      warranty: "5 Year Limited",
    },
    amazonLink: "https://www.amazon.com/Excalibur-3926TCDB-Dehydrator-Adjustable-Temperature/dp/B00HVKKZR0",
  },
  {
    slug: "magic-mill-mfd-6100",
    name: "MAGIC MILL MFD-6100",
    price: "$89.99",
    rating: "4.4/5",
    reviews: 892,
    image: "https://m.media-amazon.com/images/I/81T6ZUPEZ0L._AC_SX679_.jpg",
    features: ["5 TRAYS", "500W POWER", "REAR-MOUNTED FAN", "BPA-FREE"],
    specs: 'Diameter: 12" | Height: 9" | Weight: 5.5 lbs',
    description:
      "Magic Mill MFD-6100 features a rear-mounted fan for consistent air circulation and even drying. With 5 BPA-free trays, it's perfect for small to medium batches of jerky, fruits, or herbs. The transparent door allows easy monitoring, and its compact design suits any kitchen.",
    technicalSpecs: {
      power: "500 Watts",
      voltage: "120V",
      trays: "5 BPA-Free",
      material: "BPA-Free Plastic",
      tempRange: "95°F - 158°F",
      warranty: "1 Year Limited",
    },
    amazonLink: "https://www.amazon.com/Magic-Mill-Dehydrator-Trays-Temperature/dp/B06XZV5RY8",
  },
  {
    slug: "presto-06300",
    name: "PRESTO 06300",
    price: "$59.99",
    rating: "4.3/5",
    reviews: 4156,
    image: "https://m.media-amazon.com/images/I/71UeiUBDxGL._AC_SX679_.jpg",
    features: ["4 TRAYS", "620W POWER", "EXPANDABLE", "BUDGET OPTION"],
    specs: 'Diameter: 14" | Height: 7" | Weight: 4 lbs',
    description:
      "The Presto 06300 is an affordable, entry-level dehydrator with 4 expandable trays. Its 620W power ensures reliable drying for fruits, vegetables, and jerky. The simple design and lightweight build make it a great choice for beginners on a budget.",
    technicalSpecs: {
      power: "620 Watts",
      voltage: "120V",
      trays: "4 (Expandable to 8)",
      material: "BPA-Free Plastic",
      tempRange: "Fixed at 165°F",
      warranty: "1 Year Limited",
    },
    amazonLink: "https://www.amazon.com/Presto-06300-Dehydro-Electric-Dehydrator/dp/B008H2OELY",
  },
  {
    slug: "hamilton-beach-32100a",
    name: "HAMILTON BEACH 32100A",
    price: "$79.99",
    rating: "4.2/5",
    reviews: 1678,
    image: "https://m.media-amazon.com/images/I/71XE0WNRryL._AC_SX679_.jpg",
    features: ["5 TRAYS", "500W POWER", "STACKABLE", "EASY CLEAN"],
    specs: 'Dimensions: 13" x 13" x 8" | Weight: 6.5 lbs',
    description:
      "Hamilton Beach 32100A offers a balance of functionality and affordability. Its 5 stackable trays and 500W power make it versatile for drying various foods. The adjustable thermostat (100°F–160°F) and easy-to-clean design suit small kitchens and frequent use.",
    technicalSpecs: {
      power: "500 Watts",
      voltage: "120V",
      trays: "5 Stackable",
      material: "BPA-Free Plastic",
      tempRange: "100°F - 160°F",
      warranty: "1 Year Limited",
    },
    amazonLink: "https://www.amazon.com/Hamilton-Beach-32100A-Digital-Dehydrator/dp/B012CG8N26",
  },
  {
    slug: "tribest-sedona-express",
    name: "TRIBEST SEDONA EXPRESS",
    price: "$399.99",
    rating: "4.9/5",
    reviews: 567,
    image: "https://m.media-amazon.com/images/I/71yZ9ihLPKL._AC_SX679_.jpg",
    features: ["11 TRAYS", "780W POWER", "DUAL ZONE", "RAW FOOD"],
    specs: 'Dimensions: 18" x 17" x 12" | Weight: 25 lbs',
    description:
      "The Tribest Sedona Express is a premium dehydrator with 11 stainless steel trays and dual-zone temperature control for simultaneous drying of different foods. Its 780W power and 77°F–167°F range make it ideal for raw food enthusiasts and large-scale dehydration.",
    technicalSpecs: {
      power: "780 Watts",
      voltage: "120V",
      trays: "11 Stainless Steel",
      material: "Stainless Steel",
      tempRange: "77°F - 167°F",
      warranty: "10 Year Motor / 2 Year Parts",
    },
    amazonLink: "https://www.amazon.com/Tribest-Express-SDE-S6780-B-Dehydrator-Stainless/dp/B00YZG07SU",
  },
  {
    slug: "chefman-food-dehydrator",
    name: "CHEFMAN 6-TRAY",
    price: "$119.99",
    rating: "4.5/5",
    reviews: 1234,
    image: "https://m.media-amazon.com/images/I/81eOHKSRVDL._AC_SX679_.jpg",
    features: ["6 TRAYS", "480W POWER", "TRANSPARENT DOOR", "SPACE SAVING"],
    specs: 'Dimensions: 12" x 11" x 11" | Weight: 7 lbs',
    description:
      "Chefman's 6-tray dehydrator combines a space-saving design with a transparent door for easy monitoring. The 480W motor and digital controls (95°F–158°F) provide precision for drying fruits, vegetables, and jerky, making it a practical choice for home use.",
    technicalSpecs: {
      power: "480 Watts",
      voltage: "120V",
      trays: "6 BPA-Free",
      material: "BPA-Free Plastic",
      tempRange: "95°F - 158°F",
      warranty: "1 Year Limited",
    },
    amazonLink: "https://www.amazon.com/Chefman-12-Quart-Digital-Touchscreen-Presets/dp/B0CGMFGX87",
  },
  {
    slug: "ivation-10-tray",
    name: "IVATION 10-TRAY",
    price: "$249.99",
    rating: "4.6/5",
    reviews: 789,
    image: "https://m.media-amazon.com/images/I/71vTOLaDQkL._AC_SX679_.jpg",
    features: ["10 TRAYS", "1000W POWER", "DIGITAL TIMER", "COMMERCIAL"],
    specs: 'Dimensions: 16" x 18" x 13" | Weight: 18 lbs',
    description:
      "The Ivation 10-tray dehydrator is built for high-volume food processing with 1000W power and 10 stainless steel trays. Its digital timer and temperature controls (95°F–167°F) offer precision, making it suitable for both home and commercial use.",
    technicalSpecs: {
      power: "1000 Watts",
      voltage: "120V",
      trays: "10 Stainless Steel",
      material: "Stainless Steel & BPA-Free Plastic",
      tempRange: "95°F - 167°F",
      warranty: "2 Year Limited",
    },
    amazonLink: "https://www.amazon.com/Dual-Zone-Fryer-French-Door/dp/B0DD5QYL6D",
  },
]

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link href="/products">
          <Button variant="ghost" className="mb-8 border-2 border-foreground hover:bg-foreground hover:text-background">
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK TO PRODUCTS
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="aspect-square border-2 border-foreground bg-muted overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-7xl tracking-tighter">{product.name}</h1>
            </div>

            <Button
              className="w-full h-14 border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground font-mono text-lg"
              asChild
            >
              <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                VIEW ON AMAZON →
              </a>
            </Button>

            <p className="font-mono text-xs text-muted-foreground text-center">
              * As an Amazon Associate, we earn from qualifying purchases
            </p>

            <div className="border-2 border-foreground p-6 space-y-4">
              <h2 className="font-display text-2xl tracking-tighter">KEY FEATURES</h2>
              <div className="space-y-3">
                {product.features.map((feature, i) => (
                  <div key={i} className="border-l-4 border-foreground pl-4 font-mono text-sm">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl tracking-tighter">DESCRIPTION</h2>
              <p className="font-mono text-sm leading-relaxed">{product.description}</p>
            </div>

            <div className="border-2 border-foreground p-6 space-y-4">
              <h2 className="font-display text-2xl tracking-tighter">TECHNICAL SPECIFICATIONS</h2>
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                {Object.entries(product.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <p className="font-bold uppercase">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="border-2 border-foreground p-6 space-y-3">
            <h3 className="font-display text-xl tracking-tighter">SHIPPING</h3>
            <p className="font-mono text-xs text-muted-foreground">
              Free shipping on orders over $50. Standard delivery 3-5 business days.
            </p>
          </div>
          <div className="border-2 border-foreground p-6 space-y-3">
            <h3 className="font-display text-xl tracking-tighter">WARRANTY</h3>
            <p className="font-mono text-xs text-muted-foreground">
              {product.technicalSpecs.warranty} manufacturer warranty included with purchase.
            </p>
          </div>
          <div className="border-2 border-foreground p-6 space-y-3">
            <h3 className="font-display text-xl tracking-tighter">SUPPORT</h3>
            <p className="font-mono text-xs text-muted-foreground">
              24/7 customer support available. Contact us for technical assistance.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
