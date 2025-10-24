import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/" className="inline-block mb-8 font-mono text-sm hover:underline">
            ← BACK TO HOME
          </Link>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-12 tracking-tight">PRIVACY POLICY</h1>

          <div className="space-y-8 font-mono text-sm leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. INFORMATION COLLECTION</h2>
              <p className="opacity-80">
                We collect information you provide directly to us, including when you create an account, make a
                purchase, or communicate with us. This may include your name, email address, shipping address, and
                payment information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. USE OF INFORMATION</h2>
              <p className="opacity-80">
                We use the information we collect to process your orders, communicate with you, improve our services,
                and comply with legal obligations. We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. COOKIES</h2>
              <p className="opacity-80">
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. AMAZON AFFILIATE DISCLOSURE</h2>
              <p className="opacity-80">
                As an Amazon Associate, we earn from qualifying purchases. When you click on product links and make a
                purchase, we may receive a commission at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. DATA SECURITY</h2>
              <p className="opacity-80">
                We implement appropriate technical and organizational measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. YOUR RIGHTS</h2>
              <p className="opacity-80">
                You have the right to access, correct, or delete your personal information. Contact us at
                privacy@fruitdryer.com to exercise these rights.
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
