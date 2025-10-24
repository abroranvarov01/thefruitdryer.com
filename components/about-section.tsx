export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-foreground text-background py-24">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-balance">ARCHITECTURE OF FLAVOR</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-relaxed font-light">
                We engineer tools that preserve nature through structure, temperature, and discipline.
              </p>

              <p className="text-lg leading-relaxed opacity-80">
                Every dehydrator is a study in precision. Form follows function. No decoration, only performance. The
                geometry of airflow meets the science of heat distribution.
              </p>
            </div>

            <div className="relative h-96 border-2 border-background">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-background/20"
                    style={{
                      animationDelay: `${i * 0.02}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
