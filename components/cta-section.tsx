import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-foreground text-background py-24">
      <div className="container mx-auto px-6">
        <div className="space-y-12 text-center">
          <h2 className="text-[clamp(3rem,10vw,10rem)] font-bold leading-[0.85] tracking-tighter">
            DRY. STRUCTURE. PRESERVE.
          </h2>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="group border-4 border-background bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-300 font-mono tracking-wider text-2xl px-12 py-8"
            >
              SHOP NOW
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <p className="text-xl font-mono tracking-wide opacity-60">CONTROL THE ELEMENTS</p>
        </div>
      </div>
    </section>
  )
}
