import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Star, ArrowRight } from "lucide-react";
import { PatternZigZag } from "@/components/ui/patterns";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ExperienceCardProps extends ComponentProps<"div"> {
  title: string;
  imageSrc: string;
  price: string;
  rating?: number;
  reviews?: number;
  duration?: string;
  location?: string;
}

export function ExperienceCard({
  title,
  imageSrc,
  price,
  rating = 4.8,
  reviews = 124,
  duration = "3h",
  location = "Kigali",
  className,
  children,
  ...props
}: ExperienceCardProps) {
  return (
    <Card
      className={cn(
        "group h-full p-0 overflow-hidden border-2 border-foreground bg-card gap-0 shadow-none hover:shadow-[8px_8px_0px_0px_currentColor] transition-all duration-300",
        className,
      )}
      {...props}
    >
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 border-[3px] border-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        <div className="absolute top-4 right-4 z-20 bg-foreground/90 text-primary text-[9px] font-black uppercase tracking-widest px-2 py-1 border border-primary/20 backdrop-blur-md">
          Verified
        </div>
      </div>

      <div className="h-4 w-full bg-foreground flex items-center overflow-hidden relative">
        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
        <PatternZigZag className="w-[200%] h-full text-background animate-pulse relative z-10 mix-blend-overlay" />
      </div>

      <div className="p-6 md:p-8 flex flex-col grow relative group-hover:bg-foreground/5 transition-colors duration-500">
        <div className="flex flex-col gap-2 mb-6">
          <span className="text-primary font-mono font-bold text-sm border-b border-primary/20 w-fit pb-1">
            {price} / Person
          </span>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-foreground leading-[0.9]">
            {title}
          </h3>
        </div>

        {children && (
          <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 line-clamp-3">
            {children}
          </p>
        )}

        <div className="mt-auto grid grid-cols-3 border-t border-foreground/10 pt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-primary">Rating</span>
            <div className="flex items-center gap-1 text-foreground">
              <Star className="w-3 h-3 fill-current" /> {rating}
            </div>
          </div>
          <div className="flex flex-col gap-1 pl-4 border-l border-foreground/10">
            <span className="text-[10px] text-primary">Time</span>
            <span className="text-foreground">{duration}</span>
          </div>
          <div className="flex flex-col gap-1 pl-4 border-l border-foreground/10">
            <span className="text-[10px] text-primary">Place</span>
            <span className="text-foreground truncate">{location}</span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Button className="w-full h-auto py-5 bg-foreground hover:bg-primary text-background hover:text-foreground font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-3 rounded-none shadow-none border-transparent">
          <span>Book Experience</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}
