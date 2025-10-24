"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes a dehydrator industrial-grade?",
    answer:
      "Industrial-grade dehydrators feature precise temperature control, uniform airflow distribution, durable construction materials, and consistent performance over extended periods. They are engineered for reliability, not aesthetics.",
  },
  {
    question: "How do I choose the right number of trays?",
    answer:
      "Consider your batch size requirements. 5-6 trays suit household use, while 9+ trays are ideal for serious preservation work or small-scale commercial operations. More trays mean more capacity but require more space and power.",
  },
  {
    question: "Digital vs manual temperature control?",
    answer:
      "Digital controls offer precise temperature settings and consistency, essential for delicate items. Manual controls provide simplicity and reliability. Choose based on your precision requirements and technical comfort level.",
  },
  {
    question: "What materials are best for longevity?",
    answer:
      "Stainless steel and food-grade plastics each have merits. Steel offers superior durability and heat resistance. Quality plastics reduce weight and cost while maintaining food safety standards. Both can last decades with proper care.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">CLARITY ONLY</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-foreground">
                <AccordionTrigger className="px-6 py-4 text-left text-xl font-bold hover:bg-foreground hover:text-background transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 border-t-2 border-foreground text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
