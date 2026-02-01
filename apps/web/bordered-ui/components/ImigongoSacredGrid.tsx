import React from "react";

export function ImigongoSacredGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-between container mx-auto px-4 mix-blend-multiply opacity-50">
      <div className="w-px h-full bg-imigongo-ochre/3" />
      <div className="w-px h-full bg-imigongo-ochre/3 hidden md:block" />
      <div className="w-px h-full bg-imigongo-ochre/3 hidden md:block" />
      <div className="w-px h-full bg-imigongo-ochre/3" />
    </div>
  );
}
