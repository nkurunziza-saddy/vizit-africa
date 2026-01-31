import React from "react";
import { cn } from "@/lib/utils";

interface ImigongoGridProps extends React.ComponentProps<"div"> {
  cols?: 1 | 2 | 3 | 4;
}

export function ImigongoGrid({
  children,
  className,
  cols = 3,
  ...props
}: ImigongoGridProps) {
  return (
    <div
      className={cn(
        "grid bg-imigongo-black/10 gap-px border border-imigongo-black/10", // The "gap" creates the line effect
        cols === 1 && "grid-cols-1",
        cols === 2 && "grid-cols-1 md:grid-cols-2",
        cols === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        cols === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        className,
      )}
      {...props}
    >
      {/* 
        The children of this grid should ideally have white/solid backgrounds 
        so the 'gap' (showing the bg-imigongo-black/10) looks like a separator line.
      */}
      {children}
    </div>
  );
}
