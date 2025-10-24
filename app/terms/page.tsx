import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/" className="inline-block mb-8 font-mono text-sm hover:underline">
            ← BACK TO HOME
          </Link>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-12 tracking-tight">TERMS OF SERVICE</h1>

          <div className="space-y-8 font-mono text-sm leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. ACCEPTANCE OF TERMS</h2>
              <p className="opacity-80">
                By accessing and using FruitDryer.com, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. PRODUCT INFORMATION</h2>
              <p className="opacity-80">
                We strive to provide accurate product descriptions and specifications. However, we do not warrant that
                product descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. AFFILIATE LINKS</h2>
              <p className="opacity-80">
                This website contains affiliate links to Amazon and other retailers. When you click these links and make
                a purchase, we may earn a commission. This does not affect the price you pay.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. INTELLECTUAL PROPERTY</h2>
              <p className="opacity-80">
                All content on this website, including text, graphics, logos, and images, is the property of
                FruitDryer.com and protected by copyright laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. LIMITATION OF LIABILITY</h2>
              <p className="opacity-80">
                FruitDryer.com shall not be liable for any indirect, incidental, special, or consequential damages
                arising out of or in connection with your use of the website or products purchased through affiliate
                links.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. MODIFICATIONS</h2>
              <p className="opacity-80">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to the website. Your continued use constitutes acceptance of the modified terms.
              </p>
            </section>

            <p className="pt-8 opacity-60">Last updated: January 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
