const reviews = [
  {
    text: "This dryer feels engineered, not designed. Exactly what I wanted.",
    author: "M. ANDERSON",
  },
  {
    text: "Pure function. Clean, effective, powerful.",
    author: "K. YAMAMOTO",
  },
  {
    text: "The build quality speaks for itself. Industrial grade.",
    author: "R. MUELLER",
  },
]

export function ReviewsSection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">VOICES OF DISCIPLINE</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="border-l-4 border-background pl-6 space-y-4">
                <p className="text-xl leading-relaxed">"{review.text}"</p>
                <p className="font-mono text-sm tracking-wider opacity-60">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
