export function TechnologySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">THE ENGINEERING BEHIND HEAT</h2>

          <div className="border-2 border-foreground p-12 bg-muted">
            <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Main chamber outline */}
              <rect x="100" y="100" width="600" height="400" fill="none" stroke="currentColor" strokeWidth="3" />

              {/* Trays */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="100"
                  y1={180 + i * 60}
                  x2="700"
                  y2={180 + i * 60}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                />
              ))}

              {/* Airflow arrows */}
              {[0, 1, 2, 3, 4].map((i) => (
                <g key={`arrow-${i}`}>
                  <line x1="50" y1={180 + i * 60} x2="100" y2={180 + i * 60} stroke="currentColor" strokeWidth="2" />
                  <polygon points={`100,${180 + i * 60} 90,${175 + i * 60} 90,${185 + i * 60}`} fill="currentColor" />
                </g>
              ))}

              {/* Heat source */}
              <rect x="300" y="520" width="200" height="40" fill="currentColor" />

              {/* Labels */}
              <text x="400" y="80" textAnchor="middle" className="font-mono text-sm" fill="currentColor">
                DEHYDRATION CHAMBER
              </text>
              <text x="750" y="210" className="font-mono text-xs" fill="currentColor">
                AIRFLOW
              </text>
              <text x="750" y="270" className="font-mono text-xs" fill="currentColor">
                GRID
              </text>
              <text x="400" y="580" textAnchor="middle" className="font-mono text-xs" fill="currentColor">
                HEAT FLOW
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
