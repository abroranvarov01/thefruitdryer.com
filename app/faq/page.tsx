import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  const faqs = [
    {
      question: "HOW LONG DOES DEHYDRATION TAKE?",
      answer:
        "Drying time varies by food type and thickness. Herbs: 2-4 hours. Fruits: 6-12 hours. Vegetables: 4-8 hours. Meats: 4-8 hours. Thinner slices dry faster.",
    },
    {
      question: "WHAT TEMPERATURE SHOULD I USE?",
      answer:
        "Herbs: 95-115°F. Fruits: 135°F. Vegetables: 125-135°F. Meats: 145-165°F. Lower temperatures preserve more nutrients but take longer.",
    },
    {
      question: "DO I NEED TO ROTATE TRAYS?",
      answer:
        "Depends on airflow design. Horizontal airflow systems (like Excalibur) don't require rotation. Vertical systems may need tray rotation for even drying.",
    },
    {
      question: "HOW DO I STORE DEHYDRATED FOOD?",
      answer:
        "Store in airtight containers in cool, dark places. Vacuum sealing extends shelf life. Properly dried fruits last 6-12 months. Vegetables last 8-12 months. Jerky lasts 1-2 months.",
    },
    {
      question: "CAN I DEHYDRATE MULTIPLE FOODS AT ONCE?",
      answer:
        "Yes, but avoid mixing strong-flavored foods (like onions) with mild foods (like apples). Flavors can transfer between trays during the drying process.",
    },
    {
      question: "HOW DO I KNOW WHEN FOOD IS FULLY DRIED?",
      answer:
        "Fruits should be pliable but not sticky. Vegetables should be brittle. Meats should bend without breaking. Cool a piece before testing - warm food feels softer.",
    },
    {
      question: "IS DEHYDRATING COST-EFFECTIVE?",
      answer:
        "Yes. Average cost: $0.08/hour electricity. Preserves seasonal produce, reduces waste, and eliminates preservatives found in store-bought dried foods.",
    },
    {
      question: "HOW DO I CLEAN MY DEHYDRATOR?",
      answer:
        "Wash trays with warm soapy water. Wipe interior with damp cloth. Never submerge base unit. Most trays are dishwasher safe - check manufacturer guidelines.",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link href="/">
          <Button variant="ghost" className="mb-8 border-2 border-foreground hover:bg-foreground hover:text-background">
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK
          </Button>
        </Link>

        <div className="space-y-16">
          <div className="space-y-4">
            <h1 className="font-display text-6xl md:text-8xl tracking-tighter">FAQ</h1>
            <p className="font-mono text-sm md:text-base max-w-2xl">
              FREQUENTLY ASKED QUESTIONS. TECHNICAL ANSWERS. PRACTICAL GUIDANCE.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-foreground p-6 space-y-4 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-shadow"
              >
                <h3 className="font-mono font-bold text-lg">{faq.question}</h3>
                <p className="font-mono text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="border-2 border-foreground p-8 space-y-4">
            <h2 className="font-display text-3xl tracking-tighter">STILL HAVE QUESTIONS?</h2>
            <p className="font-mono text-sm max-w-2xl">
              Contact us for detailed technical specifications, usage recommendations, or product comparisons. We
              respond within 24 hours.
            </p>
            <Link href="/contact">
              <Button className="border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground font-mono">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
