"use client"

import { useEffect, useRef } from "react"

const features = [
  {
    icon: "🧊",
    title: "Form Follows Function",
    description: "Every element serves a purpose. No decoration without reason. Pure engineering aesthetics.",
  },
  {
    icon: "⚙️",
    title: "Industrial Design Ethic",
    description: "Built like architecture. Structured like machinery. Designed for decades of performance.",
  },
  {
    icon: "🌬️",
    title: "Airflow Geometry",
    description: "Precision-engineered ventilation systems. Heat distribution calculated to the degree.",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".feature-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-center">PRECISION, NOT DECORATION</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card opacity-0 border-2 border-background p-8 space-y-6 hover:bg-background hover:text-foreground transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-6xl">{feature.icon}</div>
                <h3 className="text-3xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-lg leading-relaxed opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
