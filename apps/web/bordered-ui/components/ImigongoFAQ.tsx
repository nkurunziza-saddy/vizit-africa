import { useState } from "react";
import { cn } from "@/lib/utils";
import { PatternDiamond } from "./ImigongoPatterns";

const faqs = [
  {
    question: "Do I need a visa to visit Rwanda?",
    answer:
      "Most nationalities can obtain a visa upon arrival in Rwanda. However, we recommend checking the latest entry requirements on the official government migration website before your trip.",
  },
  {
    question: "Is it safe to travel solo?",
    answer:
      "Rwanda is ranked as one of the safest countries in the world. Solo travelers, including women, frequently report feeling safe and welcomed throughout the country.",
  },
  {
    question: "What is the best time to visit?",
    answer:
      "Rwanda is a year-round destination. The long dry season from June to September is the best time for tracking gorillas. The wet seasons offer lush scenery and better birdwatching.",
  },
  {
    question: "Are these tours suitable for children?",
    answer:
      "Many of our cultural experiences and city tours are family-friendly. However, gorilla trekking has a minimum age limit of 15 years.",
  },
];

export function ImigongoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-24 bg-imigongo-black/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-imigongo-ochre text-xs font-bold uppercase tracking-widest mb-2 block">
            Help Center
          </span>
          <h2 className="text-4xl font-black uppercase text-imigongo-black">
            Frequently Asked
          </h2>
        </div>

        <div className="border-t-2 border-imigongo-black">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-imigongo-black/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between py-6 text-left group hover:bg-imigongo-ochre/5 transition-colors px-4"
                >
                  <span
                    className={cn(
                      "text-lg font-bold uppercase tracking-tight transition-colors",
                      isOpen ? "text-imigongo-ochre" : "text-imigongo-black",
                    )}
                  >
                    {faq.question}
                  </span>

                  <div className="relative w-6 h-6 flex items-center justify-center mt-1">
                    <PatternDiamond
                      className={cn(
                        "absolute inset-0 w-full h-full transition-all duration-300",
                        isOpen
                          ? "text-imigongo-ochre rotate-90 scale-100"
                          : "text-imigongo-black/20 scale-75",
                      )}
                    />
                    <span
                      className={cn(
                        "relative z-10 text-lg leading-none font-light transition-transform duration-300",
                        isOpen ? "rotate-45 text-white" : "text-imigongo-black",
                      )}
                    >
                      +
                    </span>
                  </div>
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out px-4",
                    isOpen ? "max-h-48 pb-8 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
