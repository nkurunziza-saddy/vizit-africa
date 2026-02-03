import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionContainer } from "../ui/section";

export const TestimonialsSection = () => {
  return (
    <SectionContainer
      title="Testimonials"
      description="What Our Customers Say about us"
      align="start"
      className="py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Hero Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1000"
              alt="Rice Terrace Scenery"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Quote Icon Overlay - Top Right */}
          <div className="absolute -top-4 -right-8 md:-right-12 text-[#2C4A6E]">
            <Quote className="h-10 w-10 fill-[#2C4A6E] rotate-180" />
          </div>
        </div>

        {/* Right: Testimonial Content */}
        <div className="flex flex-col gap-6 md:pl-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-primary/20">
              <AvatarImage
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
                alt="Jessica Lena"
              />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold text-[#2C4A6E]">Jessica Lena</h3>
              <p className="text-sm font-medium text-muted-foreground mb-1">USA, Texas</p>
              <div className="flex gap-0.5 text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>

          <blockquote className="text-muted-foreground leading-relaxed text-lg">
            "Booking my flight was incredibly smooth. I found the best price in
            minutes, and the confirmation was instant. No hidden fees, no
            stress—just a simple, reliable experience."
          </blockquote>

          <div className="self-end mt-4 text-[#2C4A6E]">
             <Quote className="h-10 w-10 fill-[#2C4A6E]" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
