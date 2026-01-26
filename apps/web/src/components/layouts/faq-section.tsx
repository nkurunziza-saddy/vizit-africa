import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export function FaqsSection() {
  return (
    <section className="py-24 border-b border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Header */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Everything you need to know about booking with Vizit Africa.
            </p>
            <p className="text-xs text-muted-foreground">
              Can't find the answer? <a href="#" className="underline text-foreground">Contact support</a>
            </p>
          </div>

          {/* FAQ Items */}
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-border/50 first:border-t-0"
                >
                  <AccordionTrigger className="text-base font-medium py-5 hover:no-underline [&[data-state=open]>svg]:rotate-45">
                    <div className="flex items-center text-left">
                        {item.title}
                    </div>
                    {/* Custom icon handled via CSS/class usually, but Shadcn uses ChevronDown by default. 
                        We can override or just let it be. If using PlusIcon logic like curated example: */}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-6 leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    id: "item-1",
    title: "How do I book a stay or experience?",
    content:
      "Simply browse our curated listings, select your dates, and click 'Reserve'. We verify availability instantly and guide you through the secure payment process.",
  },
  {
    id: "item-2",
    title: "Are the listings verified?",
    content:
      "Yes. Every listing on Vizit Africa is manually vetted by our local team to ensure safety, quality, and an authentic experience.",
  },
  {
    id: "item-3",
    title: "What payment methods are accepted?",
    content:
      "We accept all major credit cards (Visa, Mastercard, Amex) as well as mobile money options popular in East Africa.",
  },
  {
    id: "item-4",
    title: "What is the cancellation policy?",
    content:
      "Cancellation policies vary by host but are clearly stated on each listing. Most offer free cancellation up to 48 hours before check-in.",
  },
  {
    id: "item-5",
    title: "Do you offer airport transfers?",
    content:
      "Yes, you can browse our Transport category to book reliable airport transfers and safari vehicles suitable for your trip.",
  },
];

export default FaqsSection;
