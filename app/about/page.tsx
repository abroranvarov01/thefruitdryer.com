import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/" className="inline-block mb-8 font-mono text-sm hover:underline">
            ← BACK TO HOME
          </Link>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-12 tracking-tight">ABOUT FRUITDRYER</h1>

          <div className="space-y-12">
            <div className="space-y-6 font-mono text-sm leading-relaxed">
              <p className="text-lg opacity-80">
                We believe kitchen appliances should be treated as architectural objects. Form follows function.
                Discipline creates beauty.
              </p>
            </div>

            <div className="border-2 border-foreground p-12 space-y-8">
              <h2 className="font-display text-3xl font-bold">OUR PHILOSOPHY</h2>
              <div className="space-y-6 font-mono text-sm opacity-80">
                <p>
                  FruitDryer.com was founded on the principle that food preservation technology deserves the same
                  rigorous analysis and aesthetic consideration as any piece of industrial design.
                </p>
                <p>
                  We approach fruit dehydrators not as mere kitchen gadgets, but as precision instruments—engineered
                  systems that transform raw materials through controlled processes.
                </p>
                <p>
                  Our brutalist design philosophy strips away unnecessary decoration to reveal the essential truth:
                  great design is honest, functional, and timeless.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-foreground p-8 space-y-4">
                <div className="font-display text-4xl font-bold">01</div>
                <h3 className="font-display text-xl font-bold">RESEARCH</h3>
                <p className="font-mono text-xs opacity-80">
                  We test and analyze every dehydrator with engineering precision
                </p>
              </div>

              <div className="border-2 border-foreground p-8 space-y-4">
                <div className="font-display text-4xl font-bold">02</div>
                <h3 className="font-display text-xl font-bold">CURATE</h3>
                <p className="font-mono text-xs opacity-80">
                  Only products that meet our strict standards make the cut
                </p>
              </div>

              <div className="border-2 border-foreground p-8 space-y-4">
                <div className="font-display text-4xl font-bold">03</div>
                <h3 className="font-display text-xl font-bold">RECOMMEND</h3>
                <p className="font-mono text-xs opacity-80">
                  We provide honest, unbiased recommendations based on data
                </p>
              </div>
            </div>

            <div className="space-y-6 font-mono text-sm">
              <h2 className="font-display text-3xl font-bold">TRANSPARENCY</h2>
              <p className="opacity-80">
                As an Amazon Associate, we earn from qualifying purchases. This allows us to maintain our website and
                continue providing detailed product analysis at no cost to you. Our recommendations are based solely on
                product quality and performance—never on commission rates.
              </p>
            </div>

            <div className="border-t-2 border-foreground pt-12 text-center space-y-4">
              <p className="font-display text-2xl font-bold">FORM. FUNCTION. DISCIPLINE.</p>
              <p className="font-mono text-xs opacity-60">The architecture of flavor preservation</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
