import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
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
          className="h-full w-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 border-[3px] border-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="h-4 w-full bg-imigongo-black flex items-center overflow-hidden">
        <PatternZigZag className="w-[200%] h-full text-white animate-pulse" />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-xl font-black uppercase tracking-tight text-imigongo-black group-hover:text-imigongo-ochre transition-colors max-w-[70%]">
            {title}
          </h3>
          <span className="text-imigongo-ochre font-mono font-bold text-lg">
            {price}
          </span>
        </div>

        {children && (
          <p className="text-imigongo-black/70 text-sm leading-relaxed mb-6 line-clamp-3">
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

      <button className="w-full py-4 bg-imigongo-ochre text-white font-bold uppercase tracking-widest text-xs hover:bg-imigongo-black transition-colors">
        Book Experience
      </button>
    </div>
  );
}
