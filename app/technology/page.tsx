import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TechnologyPage() {
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
            <h1 className="font-display text-6xl md:text-8xl tracking-tighter">TECHNOLOGY</h1>
            <p className="font-mono text-sm md:text-base max-w-2xl">
              ENGINEERING PRINCIPLES BEHIND OPTIMAL DEHYDRATION.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-foreground p-8 space-y-4">
              <h2 className="font-display text-3xl tracking-tighter">AIRFLOW DYNAMICS</h2>
              <div className="h-64 bg-muted border-2 border-foreground overflow-hidden">
                <img
                  src="/food-dehydrator-airflow-diagram-technical-blueprin.jpg"
                  alt="Airflow Dynamics Diagram"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-mono text-sm">
                Horizontal airflow ensures even heat distribution across all trays. Vertical systems create temperature
                gradients requiring tray rotation.
              </p>
            </div>

            <div className="border-2 border-foreground p-8 space-y-4">
              <h2 className="font-display text-3xl tracking-tighter">HEAT DISTRIBUTION</h2>
              <div className="h-64 bg-muted border-2 border-foreground overflow-hidden">
                <img
                  src="/food-dehydrator-heat-distribution-map-thermal-im.jpg"
                  alt="Heat Distribution Map"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-mono text-sm">
                Consistent temperature maintenance between 95°F-165°F preserves nutrients while removing moisture
                efficiently.
              </p>
            </div>
          </div>

          <div className="border-2 border-foreground p-8 space-y-6">
            <h2 className="font-display text-3xl tracking-tighter">TECHNICAL SPECIFICATIONS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-mono font-bold">TEMPERATURE RANGE</h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between border-b border-foreground pb-2">
                    <span>MINIMUM</span>
                    <span>95°F</span>
                  </div>
                  <div className="flex justify-between border-b border-foreground pb-2">
                    <span>OPTIMAL</span>
                    <span>135°F</span>
                  </div>
                  <div className="flex justify-between border-b border-foreground pb-2">
                    <span>MAXIMUM</span>
                    <span>165°F</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-bold">DRYING TIMES</h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between border-b border-foreground pb-2">
                    <span>HERBS</span>
                    <span>2-4 HRS</span>
                  </div>
                  <div className="flex justify-between border-b border-foreground pb-2">
                    <span>FRUITS</span>
                    <span>6-12 HRS</span>
                  </div>
                  <div className="flex justify-between border-b border-foreground pb-2">
                    <span>MEATS</span>
                    <span>4-8 HRS</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-bold">ENERGY EFFICIENCY</h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between border-b border-foreground pb-2">
                    <span>POWER</span>
                    <span>600-650W</span>
                  </div>
                  <div className="flex justify-between border-b border-foreground pb-2">
                    <span>COST/HR</span>
                    <span>$0.08</span>
                  </div>
                  <div className="flex justify-between border-b border-foreground pb-2">
                    <span>EFFICIENCY</span>
                    <span>92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-3xl tracking-tighter">MATERIAL SCIENCE</h2>
            <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
              <div className="border-2 border-foreground p-6 space-y-3">
                <h3 className="font-bold">BPA-FREE CONSTRUCTION</h3>
                <p className="text-muted-foreground">
                  Food-grade polycarbonate trays ensure no chemical leaching during high-temperature operation. FDA
                  approved materials throughout.
                </p>
              </div>
              <div className="border-2 border-foreground p-6 space-y-3">
                <h3 className="font-bold">STAINLESS STEEL ELEMENTS</h3>
                <p className="text-muted-foreground">
                  Heating elements constructed from 304-grade stainless steel provide corrosion resistance and
                  consistent heat output over years of use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
