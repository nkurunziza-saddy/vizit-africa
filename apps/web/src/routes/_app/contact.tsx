import { createFileRoute } from "@tanstack/react-router";
import {
  PatternVerticalDiamond,
  PatternZigZag,
} from "@/components/ui/patterns";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { MapPin, Mail, ArrowRight, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/_app/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background min-h-screen relative">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end justify-start bg-foreground overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop"
            alt="Contact Us Background"
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-foreground via-transparent to-transparent" />

        <div className="container mx-auto px-4 pb-12 relative z-20">
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            Get In <span className="text-primary">Touch</span>
          </h1>
        </div>

        <div className="absolute top-0 right-12 bottom-0 w-32 opacity-10 pointer-events-none hidden lg:block">
          <PatternVerticalDiamond className="w-full h-full text-white" />
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-foreground mb-6">
                  Connect Directly
                </h2>
              </div>

              <div className="grid gap-4">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/250788123456"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  <div className="w-full bg-foreground hover:bg-primary text-white h-16 rounded flex items-center justify-between px-6 transition-all shadow-lg hover:shadow-xl group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <MessageSquare className="w-6 h-6 fill-current" />
                      <div className="text-left">
                        <span className="block text-[10px] font-bold uppercase tracking-widest opacity-90">
                          Chat Now
                        </span>
                        <span className="block text-lg font-black uppercase tracking-tight">
                          On WhatsApp
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* Email Button */}
                <a href="mailto:hello@vizit.africa" className="w-full">
                  <div className="w-full bg-primary hover:bg-foreground text-white h-16 flex items-center justify-between px-6 transition-all shadow-lg hover:shadow-xl group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6" />
                      <div className="text-left">
                        <span className="block text-[10px] font-bold uppercase tracking-widest opacity-90">
                          Drop us a line
                        </span>
                        <span className="block text-lg font-black uppercase tracking-tight">
                          Send Email
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>

              <div className="pt-8 border-t border-foreground/10">
                <div className="flex items-start gap-4">
                  <div className="w-[124px] h-[124px] bg-muted/20 rounded border border-foreground/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-8 h-8 text-foreground/20" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-2">
                      Visit our Office
                    </h3>
                    <p className="text-foreground/80 font-serif text-lg leading-relaxed">
                      Norrsken House Kigali
                      <br />
                      1 KN 78 St,
                      <br />
                      Kigali, Rwanda
                    </p>
                    <a
                      href="#"
                      className="inline-block mt-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary z-0 bg-transparent" />
              <div className="bg-white border-2 border-foreground p-8 md:p-12 relative z-10 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    Send a Message
                  </h3>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-foreground " />
                    <div className="w-2 h-2 bg-foreground/20 " />
                    <div className="w-2 h-2 bg-foreground/10 " />
                  </div>
                </div>

                <form className="space-y-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-widest text-foreground/60 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-primary block" /> Name
                    </label>
                    <InputGroup className="bg-transparent border-b-2 border-foreground/10 focus-within:border-foreground transition-colors">
                      <InputGroupInput
                        id="name"
                        placeholder="ENTER YOUR FULL NAME"
                        className="pl-0 font-bold uppercase tracking-wide placeholder:font-normal placeholder:normal-case placeholder:text-muted-foreground/50 shadow-none h-12 text-lg"
                      />
                    </InputGroup>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-widest text-foreground/60 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-primary block" /> Email
                    </label>
                    <InputGroup className="bg-transparent border-b-2 border-foreground/10 focus-within:border-foreground transition-colors">
                      <InputGroupInput
                        id="email"
                        placeholder="ENTER YOUR EMAIL ADDRESS"
                        type="email"
                        className="pl-0 font-bold uppercase tracking-wide placeholder:font-normal placeholder:normal-case placeholder:text-muted-foreground/50 shadow-none h-12 text-lg"
                      />
                    </InputGroup>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="type"
                      className="text-xs font-bold uppercase tracking-widest text-foreground/60 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-primary block" /> Interest
                    </label>
                    <InputGroup className="bg-transparent border-b-2 border-foreground/10 focus-within:border-foreground transition-colors">
                      <select
                        id="type"
                        className="w-full bg-transparent border-none outline-none font-bold uppercase tracking-wide h-12 text-lg cursor-pointer appearance-none text-foreground"
                      >
                        <option>General Inquiry</option>
                        <option>Booking a Tour</option>
                        <option>Corporate Partnership</option>
                        <option>Press & Media</option>
                      </select>
                    </InputGroup>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-widest text-foreground/60 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-primary block" /> Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full h-40 bg-muted/20 border-2 border-transparent focus:border-foreground outline-none font-serif text-lg resize-none p-4 placeholder:italic placeholder:text-muted-foreground"
                      placeholder="Tell us about what you're looking for..."
                    />
                  </div>

                  <Button className="w-full bg-foreground hover:bg-primary text-white font-black uppercase tracking-[0.2em] rounded h-14 mt-4 transition-all duration-300 group flex items-center justify-between px-8">
                    <span>Send Inquiry</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Divider */}
      <div className="h-32 bg-foreground flex items-center justify-center overflow-hidden relative">
        <PatternZigZag className="text-white/10 w-[120%] h-full absolute top-0" />
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-4">
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                Help Center
              </span>
              <h2 className="text-4xl font-black uppercase text-foreground mb-6">
                Frequently Asked <br />
                Questions
              </h2>
              <p className="text-muted-foreground font-serif leading-relaxed mb-8">
                Common questions about our tours, booking process, and cultural
                etiquette. Can't find what you need? Send us a message above.
              </p>
              <Button
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white uppercase tracking-widest font-bold rounded h-12"
              >
                View Full FAQ
              </Button>
            </div>

            <div className="col-span-1 lg:col-span-8">
              <Accordion className="border-t-2 border-foreground">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How do I book a private tour?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can book a private tour directly through our specialized
                    "Custom Journey" page or by contacting us via the form
                    above. We'll arrange a consultation to tailor the itinerary
                    to your specific interests.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What is included in the price?
                  </AccordionTrigger>
                  <AccordionContent>
                    Most of our tours include transportation, entry fees, a
                    professional guide, and water. Multi-day tours also include
                    accommodation and meals as specified in the itinerary.
                    Personal expenses and tips are generally not included.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Is transportation provided?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide comfortable, air-conditioned transportation
                    for all our tours. For airport transfers, please provide
                    your flight details during booking.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What is your cancellation policy?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a full refund for cancellations made at least 48
                    hours in advance for day tours. For multi-day experiences,
                    please refer to the specific terms and conditions provided
                    during booking, as they may vary based on accommodation
                    policies.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-foreground/10" />
    </div>
  );
}
