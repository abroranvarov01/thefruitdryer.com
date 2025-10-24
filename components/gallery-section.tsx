const galleryImages = [
  "/dried-fruit-slices-black-and-white.jpg",
  "/food-dehydrator-industrial-kitchen-black-and-white.jpg",
  "/dehydrated-vegetables-monochrome.jpg",
  "/fruit-drying-process-black-and-white.jpg",
  "/industrial-kitchen-equipment-monochrome.jpg",
  "/dried-herbs-black-and-white-photography.jpg",
]

export function GallerySection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">MONO AESTHETICS</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-[4/3] overflow-hidden border-2 border-background">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 font-mono text-2xl tracking-wider transition-opacity duration-300">
                    DETAIL →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
