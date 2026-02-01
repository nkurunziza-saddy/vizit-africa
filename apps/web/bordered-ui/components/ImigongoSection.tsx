import React from "react";
import { cn } from "@/lib/utils";
import { ImigongoSectionTitle } from "./ImigongoSectionTitle";

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
        <ImigongoSectionTitle
          title={title}
          align="left"
          tooltip={
            <div className="flex flex-col gap-1">
              <h4 className="font-bold uppercase tracking-widest text-imigongo-ochre text-xs">
                Umwambi (The Arrow)
              </h4>
              <p className="text-white/80 font-light text-xs leading-relaxed">
                A pattern symbolizing direction, focus, and the protection of
                the journey ahead.
              </p>
            </div>
          }
        />
      )}
      {children}
    </section>
  );
}
