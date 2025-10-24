import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/" className="inline-block mb-8 font-mono text-sm hover:underline">
            ← BACK TO HOME
          </Link>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-12 tracking-tight">CONTACT</h1>

          <div className="space-y-12">
            <div className="space-y-4 font-mono text-sm">
              <p className="text-lg opacity-80">
                Have questions about fruit dehydrators? Need help choosing the right model? We're here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-foreground p-8 space-y-4">
                <h2 className="font-display text-2xl font-bold">EMAIL</h2>
                <p className="font-mono text-sm opacity-80">info@fruitdryer.com</p>
                <p className="font-mono text-xs opacity-60">We typically respond within 24-48 hours</p>
              </div>

              <div className="border-2 border-foreground p-8 space-y-4">
                <h2 className="font-display text-2xl font-bold">SUPPORT</h2>
                <p className="font-mono text-sm opacity-80">support@fruitdryer.com</p>
                <p className="font-mono text-xs opacity-60">For technical questions and product support</p>
              </div>
            </div>

            <div className="border-2 border-foreground p-12 space-y-6">
              <h2 className="font-display text-3xl font-bold">SEND A MESSAGE</h2>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-sm font-bold">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-2 border-foreground bg-background px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block font-mono text-sm font-bold">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-2 border-foreground bg-background px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-sm font-bold">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full border-2 border-foreground bg-background px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border-2 border-foreground bg-foreground text-background px-8 py-4 font-mono text-sm font-bold hover:bg-background hover:text-foreground transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            <div className="text-center font-mono text-xs opacity-60 space-y-2">
              <p>FRUITDRYER.COM</p>
              <p>FORM. FUNCTION. DISCIPLINE.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
