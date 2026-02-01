import React from "react";
import { PatternZigZag } from "./ImigongoPatterns";

interface FactItem {
  label: string;
  value: string;
}

const facts: FactItem[] = [
  { label: "Capital City", value: "Kigali" },
  { label: "Population", value: "~14.1 Million" },
  { label: "Size", value: "26,338 km²" },
  { label: "Currency", value: "Rwandan Franc" },
  { label: "Languages", value: "Kinyarwanda, English, French" },
  { label: "Time Zone", value: "CAT (UTC +2)" },
];

export function ImigongoFactGrid() {
  return (
    <div className="bg-white py-24 border-y border-imigongo-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <PatternZigZag className="w-8 h-8 text-imigongo-ochre shrink-0 rotate-90" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-imigongo-black">
            Quick Facts
          </h2>
          <PatternZigZag className="w-8 h-8 text-imigongo-ochre shrink-0 rotate-90" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-imigongo-black/10 border border-imigongo-black/10">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="bg-white p-6 hover:bg-imigongo-black/[0.02] transition-colors group relative overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-imigongo-ochre/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />

              <h3 className="text-[10px] uppercase font-bold tracking-widest text-imigongo-ochre mb-2">
                {fact.label}
              </h3>
              <p className="text-imigongo-black font-serif text-lg font-medium leading-tight">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
