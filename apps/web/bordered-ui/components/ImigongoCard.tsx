import React from "react";
import { cn } from "@/lib/utils";
import { Star, ArrowRight } from "lucide-react";
import { PatternZigZag } from "./ImigongoPatterns";

interface ImigongoCardProps extends React.ComponentProps<"div"> {
  title: string;
  imageSrc: string;
  price: string;
  rating?: number;
  reviews?: number;
  duration?: string;
  location?: string;
}

export function ImigongoCard({
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
}: ImigongoCardProps) {
  return (
    <div
      className={cn("flex flex-col bg-white h-full group", className)}
      {...props}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 border-[3px] border-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        <div className="absolute top-4 right-4 z-20 bg-imigongo-black/90 text-imigongo-ochre text-[9px] font-black uppercase tracking-widest px-2 py-1 border border-imigongo-ochre/20 backdrop-blur-md">
          Verified
        </div>
      </div>

      <div className="h-4 w-full bg-imigongo-black flex items-center overflow-hidden relative">
        <div className="absolute inset-0 bg-imigongo-ochre translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
        <PatternZigZag className="w-[200%] h-full text-white animate-pulse relative z-10 mix-blend-overlay" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative group-hover:bg-zinc-50 transition-colors duration-500">
        <div className="flex flex-col gap-2 mb-6">
          <span className="text-imigongo-ochre font-mono font-bold text-sm border-b border-imigongo-ochre/20 w-fit pb-1">
            {price} / Person
          </span>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-imigongo-black leading-[0.9] group-hover:text-imigongo-black transition-colors">
            {title}
          </h3>
        </div>

        {children && (
          <p className="text-imigongo-black/60 text-sm font-light leading-relaxed mb-8 line-clamp-3">
            {children}
          </p>
        )}

        <div className="mt-auto grid grid-cols-3 border-t border-imigongo-black/10 pt-4 text-xs font-bold uppercase tracking-wider text-imigongo-black/50">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-imigongo-ochre">Rating</span>
            <div className="flex items-center gap-1 text-imigongo-black">
              <Star className="w-3 h-3 fill-current" /> {rating}
            </div>
          </div>
          <div className="flex flex-col gap-1 pl-4 border-l border-imigongo-black/10">
            <span className="text-[10px] text-imigongo-ochre">Time</span>
            <span className="text-imigongo-black">{duration}</span>
          </div>
          <div className="flex flex-col gap-1 pl-4 border-l border-imigongo-black/10">
            <span className="text-[10px] text-imigongo-ochre">Place</span>
            <span className="text-imigongo-black truncate">{location}</span>
          </div>
        </div>
      </div>

      <button className="w-full py-5 bg-imigongo-black group-hover:bg-imigongo-ochre text-white font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-3">
        <span>Book Experience</span>
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
