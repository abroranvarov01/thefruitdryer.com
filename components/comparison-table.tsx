const comparisonData = [
  {
    product: "Nesco FD-75A",
    trays: 5,
    tempControl: "Digital",
    material: "Plastic",
    power: "600W",
    rating: 5,
  },
  {
    product: "COSORI Premium",
    trays: 6,
    tempControl: "Digital",
    material: "Stainless",
    power: "700W",
    rating: 4,
  },
  {
    product: "Excalibur 9-Tray",
    trays: 9,
    tempControl: "Manual",
    material: "Steel",
    power: "600W",
    rating: 4,
  },
]

export function ComparisonTable() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">STRUCTURE VS CHAOS</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-2 border-foreground font-mono">
              <thead>
                <tr className="border-b-2 border-foreground bg-foreground text-background">
                  <th className="p-4 text-left font-bold">PRODUCT</th>
                  <th className="p-4 text-left font-bold">TRAYS</th>
                  <th className="p-4 text-left font-bold">TEMP CONTROL</th>
                  <th className="p-4 text-left font-bold">MATERIAL</th>
                  <th className="p-4 text-left font-bold">POWER</th>
                  <th className="p-4 text-left font-bold">RATING</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-foreground hover:bg-foreground hover:text-background transition-colors duration-300 group"
                  >
                    <td className="p-4 font-bold">{item.product}</td>
                    <td className="p-4">{item.trays}</td>
                    <td className="p-4">{item.tempControl}</td>
                    <td className="p-4">{item.material}</td>
                    <td className="p-4">{item.power}</td>
                    <td className="p-4">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 border border-current ${i < item.rating ? "bg-current" : ""}`}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
