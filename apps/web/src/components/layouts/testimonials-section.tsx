import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "The best way to explore Rwanda. The verified listings gave us peace of mind, and the local guides were incredible.",
    author: "Sarah Jenkins",
    role: "Traveler from UK",
    rating: 5
  },
  {
    id: 2,
    content: "Seamless booking process and excellent support. We found a hidden gem in Lake Kivu that wasn't on any other platform.",
    author: "David M.",
    role: "Digital Nomad",
    rating: 5
  },
  {
    id: 3,
    content: "I use Vizit Africa for all my business trips to Kigali. Reliable cars and comfortable stays every time.",
    author: "Anita K.",
    role: "Business Traveler",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 border-b border-border/40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Traveler Stories</h2>
          <p className="text-muted-foreground text-sm">
            Hear from community members who have explored with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="p-6 rounded-lg border border-border/60 bg-transparent flex flex-col gap-4 hover:border-border transition-colors">
              <div className="flex gap-0.5 text-primary">
                 {[...Array(item.rating)].map((_, i) => (
                     <Star key={i} className="h-3 w-3 fill-foreground text-foreground" />
                 ))}
              </div>
              <p className="text-sm text-foreground/80 italic leading-relaxed">
                "{item.content}"
              </p>
              <div className="mt-auto pt-2">
                 <div className="font-semibold text-sm text-foreground">{item.author}</div>
                 <div className="text-xs text-muted-foreground">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
