import React from "react";
import { cn } from "@/lib/utils";
import { PatternZigZag } from "./ImigongoPatterns";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ImigongoSectionProps extends React.ComponentProps<"section"> {
  title?: string;
}

export function ImigongoSection({
  children,
  className,
  title,
  ...props
}: ImigongoSectionProps) {
  return (
    <section
      className={cn("py-24 px-4 container mx-auto max-w-7xl", className)}
      {...props}
    >
      {title && (
        <div className="flex flex-col items-start gap-4 mb-16 relative">
          <div className="w-24 h-1 bg-imigongo-ochre mb-2" />

          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger>
                <PatternZigZag
                  className="w-8 h-8 text-imigongo-ochre shrink-0 rotate-90 cursor-help hover:scale-110 transition-transform"
                  strokeWidth={3}
                />
              </TooltipTrigger>
              <TooltipContent className="bg-imigongo-black border border-imigongo-ochre text-white p-4 max-w-xs shadow-xl">
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold uppercase tracking-widest text-imigongo-ochre text-xs">
                    Umwambi (The Arrow)
                  </h4>
                  <p className="text-white/80 font-light text-xs leading-relaxed">
                    A pattern symbolizing direction, focus, and the protection
                    of the journey ahead.
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-imigongo-black">
              {title}
            </h2>
          </div>

          <div className="w-full max-w-md h-3 mt-1 overflow-hidden">
            <PatternZigZag
              className="w-full h-full text-imigongo-black"
              strokeWidth={3}
              animated
            />
          </div>
        </div>
      )}
      {children}
    </section>
  );
}
