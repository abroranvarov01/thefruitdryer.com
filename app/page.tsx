import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { GallerySection } from "@/components/gallery-section"
import { ComparisonTable } from "@/components/comparison-table"
import { ReviewsSection } from "@/components/reviews-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FeaturesSection />
        <TechnologySection />
        <GallerySection />
        <ComparisonTable />
        <ReviewsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
