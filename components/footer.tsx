import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-sm">
            <Link href="/privacy" className="hover:underline">
              PRIVACY
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:underline">
              TERMS
            </Link>
            <span>|</span>
            <Link href="/contact" className="hover:underline">
              CONTACT
            </Link>
            <span>|</span>
            <Link href="/about" className="hover:underline">
              ABOUT
            </Link>
          </div>

          <div className="text-center space-y-2">
            <p className="font-mono text-sm tracking-wider">© 2025 FRUITDRYER.COM — ALL RIGHTS RESERVED.</p>
            <p className="text-xs opacity-60">🛒 As an Amazon Associate, we earn from qualifying purchases.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
