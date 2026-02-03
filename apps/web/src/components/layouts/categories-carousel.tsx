import { SectionContainer } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function CategoriesCarousel() {
  return (
    <SectionContainer title="Categories" description="Browse what you want by category" align="start" className="py-20">
      <div className="relative w-full aspect-[21/9] min-h-[400px] rounded-2xl overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Apartments"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-center">
          <div className="container px-8 md:px-16">
            <div className="max-w-xl text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Apartments</h3>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Get the best apartments in Rwanda
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        <div className="h-2 w-8 bg-primary rounded-full" />
        <div className="h-2 w-2 bg-muted-foreground/30 rounded-full" />
        <div className="h-2 w-2 bg-muted-foreground/30 rounded-full" />
        <div className="h-2 w-2 bg-muted-foreground/30 rounded-full" />
      </div>
    </SectionContainer>
  );
}
