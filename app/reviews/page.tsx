import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "SARAH M.",
      product: "NESCO FD-75A",
      rating: 5,
      date: "2024.03.15",
      text: "Perfect for beginners. Compact design fits on my counter. Made apple chips and beef jerky - both turned out excellent. Temperature control is precise.",
    },
    {
      name: "JAMES K.",
      product: "COSORI CP267-FD",
      rating: 5,
      date: "2024.03.10",
      text: "Digital controls make this incredibly easy to use. Timer function is essential for overnight drying. Six trays handle large batches efficiently.",
    },
    {
      name: "MARIA L.",
      product: "EXCALIBUR 3926TB",
      rating: 5,
      date: "2024.03.05",
      text: "Professional grade equipment. Nine trays allow me to process entire harvests at once. Horizontal airflow ensures even drying without rotation.",
    },
    {
      name: "DAVID R.",
      product: "NESCO FD-75A",
      rating: 4,
      date: "2024.02.28",
      text: "Great value for the price. Quiet operation. Only wish it had a timer function, but for basic dehydrating it's perfect.",
    },
    {
      name: "EMILY T.",
      product: "COSORI CP267-FD",
      rating: 5,
      date: "2024.02.20",
      text: "Sleek design that doesn't look out of place in a modern kitchen. Easy to clean. Temperature accuracy is impressive.",
    },
    {
      name: "ROBERT H.",
      product: "EXCALIBUR 3926TB",
      rating: 5,
      date: "2024.02.15",
      text: "Investment worth making. Built like a tank. After two years of heavy use, still performs like new. Temperature consistency is unmatched.",
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
            <h1 className="font-display text-6xl md:text-8xl tracking-tighter">REVIEWS</h1>
            <p className="font-mono text-sm md:text-base max-w-2xl">
              VERIFIED USER EXPERIENCES. REAL RESULTS. HONEST FEEDBACK.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border-2 border-foreground p-6 space-y-4 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-mono font-bold">{review.name}</h3>
                    <p className="font-mono text-xs text-muted-foreground">{review.product}</p>
                  </div>
                  <span className="font-mono text-xs">{review.date}</span>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-foreground stroke-foreground" />
                  ))}
                </div>

                <p className="font-mono text-sm leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="border-2 border-foreground p-8 space-y-6">
            <h2 className="font-display text-3xl tracking-tighter">RATING BREAKDOWN</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="font-mono text-5xl">4.8</div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-foreground stroke-foreground" />
                  ))}
                </div>
                <p className="font-mono text-xs text-muted-foreground">AVERAGE RATING</p>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-12">5 ★</span>
                  <div className="flex-1 h-6 border-2 border-foreground">
                    <div className="h-full bg-foreground" style={{ width: "85%" }} />
                  </div>
                  <span className="w-12 text-right">85%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-12">4 ★</span>
                  <div className="flex-1 h-6 border-2 border-foreground">
                    <div className="h-full bg-foreground" style={{ width: "12%" }} />
                  </div>
                  <span className="w-12 text-right">12%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-12">3 ★</span>
                  <div className="flex-1 h-6 border-2 border-foreground">
                    <div className="h-full bg-foreground" style={{ width: "2%" }} />
                  </div>
                  <span className="w-12 text-right">2%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-12">2 ★</span>
                  <div className="flex-1 h-6 border-2 border-foreground">
                    <div className="h-full bg-foreground" style={{ width: "1%" }} />
                  </div>
                  <span className="w-12 text-right">1%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-12">1 ★</span>
                  <div className="flex-1 h-6 border-2 border-foreground">
                    <div className="h-full bg-foreground" style={{ width: "0%" }} />
                  </div>
                  <span className="w-12 text-right">0%</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-bold">TOP MENTIONS</h3>
                <div className="space-y-2 font-mono text-xs">
                  <div className="border-l-4 border-foreground pl-3">EASY TO USE</div>
                  <div className="border-l-4 border-foreground pl-3">EVEN DRYING</div>
                  <div className="border-l-4 border-foreground pl-3">QUIET OPERATION</div>
                  <div className="border-l-4 border-foreground pl-3">DURABLE BUILD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
