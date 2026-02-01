import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PatternHorizontalDiamonds } from "./ImigongoPatterns";
import React from "react";

export function ImigongoHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-imigongo-black">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger>
              <PatternHorizontalDiamonds className="w-12 h-6 text-imigongo-ochre shrink-0 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="bg-imigongo-black border border-imigongo-ochre text-white p-4 max-w-xs shadow-xl rounded-none">
              <div className="flex flex-col gap-1">
                <h4 className="font-bold uppercase tracking-widest text-imigongo-ochre text-xs">
                  Imigongo (Cow Dung Art)
                </h4>
                <div className="mt-2 border-t border-white/20 pt-2">
                  <span className="block text-[10px] uppercase font-bold text-imigongo-ochre mb-1">
                    Material
                  </span>
                  <p className="text-white/80 font-light text-xs leading-relaxed">
                    Cow dung (Amase) mixed with natural ash (Ivu) and pigmented
                    earth.
                  </p>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
          <span className="text-xl font-black uppercase tracking-tighter text-imigongo-black">
            Vizit<span className="text-imigongo-ochre">Africa</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Tours", "Experiences", "Events", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-bold uppercase tracking-wide text-imigongo-black hover:text-imigongo-ochre transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="px-4 py-2 bg-imigongo-black text-white text-xs font-bold uppercase tracking-widest hover:bg-imigongo-ochre transition-colors">
          Book Now
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-imigongo-ochre transform translate-y-full"></div>
    </header>
  );
}
