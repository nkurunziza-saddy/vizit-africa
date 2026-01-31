import React from "react";
import { cn } from "@/lib/utils";
import { PatternDiamond } from "./ImigongoPatterns";

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
        <div className="flex items-end gap-6 mb-16">
          <div className="hidden md:flex flex-col gap-1 w-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <PatternDiamond key={i} className="w-6 h-6 text-imigongo-black" />
            ))}
          </div>

          <div className="flex-1 pb-4 border-b-2 border-imigongo-black">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-imigongo-black">
              {title}
            </h2>
          </div>
        </div>
      )}
      {children}
    </section>
  );
}
